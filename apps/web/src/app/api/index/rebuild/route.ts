/**
 * Document Index Rebuild API Endpoint
 * POST /api/index/rebuild - Rebuilds the document index
 */

import { NextResponse } from 'next/server';
import { rebuildIndex, getIndexStats } from '@/lib/markdown/document-index';

export async function POST() {
  try {
    // Rebuild the index
    await rebuildIndex();

    // Get updated stats
    const stats = getIndexStats();

    return NextResponse.json({
      success: true,
      message: 'Index rebuilt successfully',
      data: stats,
    });
  } catch (error) {
    console.error('Error rebuilding index:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to rebuild index',
      },
      { status: 500 }
    );
  }
}
