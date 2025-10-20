import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import InstallationReport from '@/lib/models/InstallationReport';

export async function GET() {
  try {
    await dbConnect();

    // Get unique configuredBy values, filter out empty/undefined values
    const users = await InstallationReport.distinct('configuredBy', {
      configuredBy: { $exists: true, $nin: [null, ''] }
    });

    // Sort the users alphabetically
    const sortedUsers = users.sort();

    return NextResponse.json(sortedUsers);
  } catch (error) {
    console.error('Error fetching unique users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch unique users' },
      { status: 500 }
    );
  }
}