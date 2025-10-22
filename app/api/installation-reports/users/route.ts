import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import InstallationReport from '@/lib/models/InstallationReport';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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