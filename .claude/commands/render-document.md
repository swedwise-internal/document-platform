# Render Document to Format

Render a Markdown document to the specified output format.

## Task
Render document: **$ARGUMENTS** (e.g., "policies/ims-policy.md pdf", "procedures/incident-management.md docx")

## Instructions

1. Parse the input to extract:
   - Document path
   - Target format (html, pdf, docx)

2. Read the source Markdown file from `templates/` or `content/`

3. Process and render to the specified format

## Supported Formats

| Format | Tool | Output |
|--------|------|--------|
| `html` | remark/rehype | Rendered HTML |
| `pdf` | Pandoc or Puppeteer | PDF file |
| `docx` | Pandoc or docx library | Word document |
| `latex` | Pandoc | LaTeX source |

## Rendering Process

### For HTML

```bash
# Using Node.js script
node scripts/render.js --input templates/policies/ims-policy.md --format html --output output/ims-policy.html
```

### For PDF (Pandoc)

```bash
pandoc templates/policies/ims-policy.md \
  -o output/ims-policy.pdf \
  --pdf-engine=xelatex \
  --template=templates/export/policy.tex \
  --toc \
  --toc-depth=3 \
  -V geometry:margin=2.5cm \
  -V fontsize=11pt
```

### For PDF (Puppeteer - via HTML)

```bash
node scripts/render.js --input templates/policies/ims-policy.md --format pdf --output output/ims-policy.pdf --via-html
```

### For DOCX

```bash
pandoc templates/policies/ims-policy.md \
  -o output/ims-policy.docx \
  --reference-doc=templates/export/reference.docx
```

## Frontmatter Options

The document frontmatter can control rendering:

```yaml
---
title: Document Title
document_id: SW-IMS-POL-001
version: "1.0"

# Export options
exports:
  pdf:
    template: policy
    include_toc: true
    include_cover: true
    header_logo: images/logo.png
  docx:
    reference_doc: templates/reference.docx
    include_toc: true
---
```

## IMS-Specific Rendering Features

### Document Header
Automatically generate document control header with:
- Document ID and version
- Effective date
- Classification
- Owner

### Document Control Table
Render version history table at document end.

### Approval Block
Generate signature lines for document approval.

### Cross-References
Resolve internal document references (`{doc}` and `{ref}` directives).

## Batch Rendering

Render all documents of a type:

```bash
# Render all policies to PDF
for f in templates/policies/*.md; do
  node scripts/render.js --input "$f" --format pdf --output "output/pdf/$(basename "$f" .md).pdf"
done
```

## Verification

After rendering, verify:
1. [ ] All frontmatter fields rendered correctly
2. [ ] Table of contents generated (if enabled)
3. [ ] Cross-references resolved
4. [ ] Document control table present
5. [ ] Styling matches Swedwise branding

## Output Location

Rendered documents saved to:
- HTML: `output/html/`
- PDF: `output/pdf/`
- DOCX: `output/docx/`
