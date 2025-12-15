import { NextRequest, NextResponse } from 'next/server';
import { searchDocuments, getSearchSuggestions } from '@/lib/search';
import { ContentArea } from '@/types/area';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');
  const mode = searchParams.get('mode') || 'search'; // 'search' or 'suggestions'
  const areasParam = searchParams.get('areas');
  const statusParam = searchParams.get('status');
  const classificationParam = searchParams.get('classification');
  const docTypeParam = searchParams.get('docType');
  const limitParam = searchParams.get('limit');

  if (!query || query.trim().length < 2) {
    return NextResponse.json({
      results: [],
      message: 'Query must be at least 2 characters'
    });
  }

  try {
    // Parse areas
    const areas: ContentArea[] = areasParam
      ? (areasParam.split(',') as ContentArea[])
      : ['ims', 'saas'];

    if (mode === 'suggestions') {
      const limit = limitParam ? parseInt(limitParam, 10) : 10;
      const suggestions = await getSearchSuggestions(query, areas, limit);
      return NextResponse.json({ suggestions });
    }

    // Parse filters
    const status = statusParam ? statusParam.split(',') : undefined;
    const classification = classificationParam ? classificationParam.split(',') : undefined;
    const docType = docTypeParam ? docTypeParam.split(',') : undefined;
    const limit = limitParam ? parseInt(limitParam, 10) : 50;

    const results = await searchDocuments(query, {
      areas,
      status,
      classification,
      docType,
      limit
    });

    return NextResponse.json({
      query,
      count: results.length,
      results
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Search failed', message: String(error) },
      { status: 500 }
    );
  }
}
