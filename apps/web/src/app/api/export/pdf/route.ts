import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { loadDocumentBySlug } from '@/lib/markdown/loader';
import { ContentArea } from '@/types/area';
import { STATUS_STYLES, CLASSIFICATION_STYLES, DocumentStatus, Classification } from '@/types/document';

// Format date to string
function formatDate(date: Date | string | undefined): string {
  if (!date) return '';
  if (date instanceof Date) {
    return date.toISOString().split('T')[0];
  }
  return String(date);
}

// Generate the HTML document for PDF rendering
function generatePdfHtml(
  frontmatter: Record<string, unknown>,
  content: string
): string {
  const statusStyle = STATUS_STYLES[frontmatter.status as DocumentStatus];
  const classificationStyle = CLASSIFICATION_STYLES[frontmatter.classification as Classification];
  const standards = (frontmatter.standard as string[]) || [];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${frontmatter.title}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.5;
      color: #1e293b;
      padding: 0;
    }

    .document-header {
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 20px;
      margin-bottom: 24px;
    }

    .document-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 16px;
    }

    .badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 9pt;
      font-weight: 500;
    }

    .badge-status {
      background-color: ${statusStyle?.bg === 'bg-amber-100' ? '#fef3c7' : statusStyle?.bg === 'bg-blue-100' ? '#dbeafe' : statusStyle?.bg === 'bg-green-100' ? '#dcfce7' : '#f1f5f9'};
      color: ${statusStyle?.text === 'text-amber-800' ? '#92400e' : statusStyle?.text === 'text-blue-800' ? '#1e40af' : statusStyle?.text === 'text-green-800' ? '#166534' : '#475569'};
    }

    .badge-classification {
      background-color: ${classificationStyle?.bg === 'bg-green-100' ? '#dcfce7' : classificationStyle?.bg === 'bg-blue-100' ? '#dbeafe' : classificationStyle?.bg === 'bg-amber-100' ? '#fef3c7' : '#fee2e2'};
      color: ${classificationStyle?.text === 'text-green-800' ? '#166534' : classificationStyle?.text === 'text-blue-800' ? '#1e40af' : classificationStyle?.text === 'text-amber-800' ? '#92400e' : '#991b1b'};
    }

    .badge-standard {
      background-color: #f1f5f9;
      color: #475569;
    }

    .document-id {
      font-family: 'Courier New', monospace;
      font-size: 10pt;
      color: #64748b;
      margin-bottom: 8px;
    }

    .document-title {
      font-size: 20pt;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 16px;
    }

    .document-info {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      font-size: 10pt;
    }

    .info-label {
      color: #64748b;
      margin-bottom: 2px;
    }

    .info-value {
      font-weight: 500;
    }

    /* Content styles */
    .document-content {
      font-size: 11pt;
      line-height: 1.6;
    }

    .document-content h1 {
      font-size: 18pt;
      font-weight: 700;
      color: #0f172a;
      margin-top: 24px;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e2e8f0;
    }

    .document-content h2 {
      font-size: 14pt;
      font-weight: 600;
      color: #1e293b;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .document-content h3 {
      font-size: 12pt;
      font-weight: 600;
      color: #334155;
      margin-top: 16px;
      margin-bottom: 8px;
    }

    .document-content h4 {
      font-size: 11pt;
      font-weight: 600;
      color: #475569;
      margin-top: 12px;
      margin-bottom: 6px;
    }

    .document-content p {
      margin-bottom: 12px;
    }

    .document-content ul, .document-content ol {
      margin-bottom: 12px;
      padding-left: 24px;
    }

    .document-content li {
      margin-bottom: 4px;
    }

    .document-content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 16px;
      font-size: 10pt;
    }

    .document-content th {
      background-color: #f1f5f9;
      text-align: left;
      font-weight: 600;
      padding: 8px 12px;
      border: 1px solid #e2e8f0;
    }

    .document-content td {
      padding: 8px 12px;
      border: 1px solid #e2e8f0;
      vertical-align: top;
    }

    .document-content code {
      font-family: 'Courier New', monospace;
      background-color: #f1f5f9;
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 10pt;
    }

    .document-content pre {
      background-color: #1e293b;
      color: #e2e8f0;
      padding: 12px;
      border-radius: 6px;
      overflow-x: auto;
      margin-bottom: 16px;
      font-size: 9pt;
    }

    .document-content pre code {
      background-color: transparent;
      padding: 0;
      color: inherit;
    }

    .document-content blockquote {
      border-left: 3px solid #0ea5e9;
      padding-left: 16px;
      margin-left: 0;
      margin-bottom: 12px;
      color: #475569;
      font-style: italic;
    }

    .document-content a {
      color: #0284c7;
      text-decoration: none;
    }

    .document-content strong {
      font-weight: 600;
    }

    /* Footer */
    .document-footer {
      margin-top: 32px;
      padding-top: 16px;
      border-top: 1px solid #e2e8f0;
      font-size: 9pt;
      color: #64748b;
      display: flex;
      justify-content: space-between;
    }

    /* Page break handling */
    .document-content h1, .document-content h2, .document-content h3 {
      page-break-after: avoid;
    }

    .document-content table {
      page-break-inside: avoid;
    }

    @page {
      margin: 2cm 2cm 2.5cm 2cm;
      size: A4;
    }

    @page :first {
      margin-top: 1.5cm;
    }
  </style>
</head>
<body>
  <div class="document-header">
    <div class="document-meta">
      <span class="badge badge-status">${statusStyle?.label || frontmatter.status}</span>
      <span class="badge badge-classification">${classificationStyle?.label || frontmatter.classification}</span>
      ${standards.map(std => `<span class="badge badge-standard">${std}</span>`).join('')}
    </div>
    <div class="document-id">${frontmatter.document_id}</div>
    <h1 class="document-title">${frontmatter.title}</h1>
    <div class="document-info">
      <div>
        <div class="info-label">Version</div>
        <div class="info-value">${frontmatter.version}</div>
      </div>
      <div>
        <div class="info-label">Owner</div>
        <div class="info-value">${frontmatter.owner}</div>
      </div>
      ${frontmatter.effective_date ? `
      <div>
        <div class="info-label">Effective Date</div>
        <div class="info-value">${formatDate(frontmatter.effective_date as Date | string)}</div>
      </div>
      ` : ''}
      ${frontmatter.review_date ? `
      <div>
        <div class="info-label">Review Date</div>
        <div class="info-value">${formatDate(frontmatter.review_date as Date | string)}</div>
      </div>
      ` : ''}
    </div>
  </div>

  <div class="document-content">
    ${content}
  </div>

  <div class="document-footer">
    <span>Swedwise AB - Integrated Management System</span>
    <span>Generated: ${new Date().toISOString().split('T')[0]}</span>
  </div>
</body>
</html>
`;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get('slug');
  const area = (searchParams.get('area') || 'ims') as ContentArea;

  if (!slug) {
    return NextResponse.json(
      { error: 'Missing slug parameter' },
      { status: 400 }
    );
  }

  try {
    // Load the document
    const document = await loadDocumentBySlug(slug, area);

    if (!document) {
      return NextResponse.json(
        { error: 'Document not found' },
        { status: 404 }
      );
    }

    const { frontmatter, content } = document;

    // Generate HTML for PDF
    const html = generatePdfHtml(frontmatter as unknown as Record<string, unknown>, content);

    // Launch Puppeteer and generate PDF
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: `
        <div style="width: 100%; font-size: 9px; padding: 0 2cm; display: flex; justify-content: space-between; color: #64748b;">
          <span>${frontmatter.document_id} v${frontmatter.version}</span>
          <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
        </div>
      `,
      margin: {
        top: '2cm',
        right: '2cm',
        bottom: '2.5cm',
        left: '2cm',
      },
    });

    await browser.close();

    // Generate filename
    const filename = `${frontmatter.document_id}-v${frontmatter.version}.pdf`;

    // Return PDF response
    return new NextResponse(Buffer.from(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF', message: String(error) },
      { status: 500 }
    );
  }
}
