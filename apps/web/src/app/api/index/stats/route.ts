/**
 * Document Index Stats API Endpoint
 * GET /api/index/stats - Returns document index statistics
 */

import { NextResponse } from 'next/server';
import { getIndexStats, buildIndex } from '@/lib/markdown/document-index';

export async function GET() {
  try {
    // Ensure index is built
    await buildIndex();

    // Get stats
    const stats = getIndexStats();

    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error('Error getting index stats:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to get index stats',
      },
      { status: 500 }
    );
  }
}
