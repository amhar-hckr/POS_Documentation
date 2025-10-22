import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import InstallationReport from '@/lib/models/InstallationReport';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const { searchParams } = new URL(request.url);
    const userFilter = searchParams.get('user');
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');

    const query: {
      configuredBy?: string;
      verifiedDate?: { $gte?: Date; $lte?: Date };
    } = {};

    // Apply user filter
    if (userFilter) {
      query.configuredBy = userFilter;
    }

    // Apply date range filter
    if (dateFrom || dateTo) {
      query.verifiedDate = {};
      if (dateFrom) {
        query.verifiedDate.$gte = new Date(dateFrom);
      }
      if (dateTo) {
        const toDate = new Date(dateTo);
        toDate.setHours(23, 59, 59, 999);
        query.verifiedDate.$lte = toDate;
      }
    }

    const reports = await InstallationReport.find(query).sort({ verifiedDate: -1 });

    return NextResponse.json(reports);
  } catch (error) {
    console.error('Error fetching installation reports:', error);
    return NextResponse.json(
      { error: 'Failed to fetch installation reports' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const body = await request.json();

    // Validate required fields
    const requiredFields = ['purpose', 'location', 'unitNo', 'configuredBy', 'verifiedBy', 'verifiedDate', 'status'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate enum values
    if (!['stock count', 'showroom', 'magasale'].includes(body.purpose)) {
      return NextResponse.json(
        { error: 'Invalid purpose value' },
        { status: 400 }
      );
    }

    if (!['completed', 'pending'].includes(body.status)) {
      return NextResponse.json(
        { error: 'Invalid status value' },
        { status: 400 }
      );
    }

    // Generate unique ID
    const id = Date.now().toString();

    const reportData = {
      id,
      purpose: body.purpose,
      location: body.location,
      unitNo: body.unitNo,
      configuredBy: body.configuredBy,
      verifiedBy: body.verifiedBy,
      verifiedDate: new Date(body.verifiedDate),
      status: body.status,
    };

    const report = await InstallationReport.create(reportData);

    return NextResponse.json(report, { status: 201 });
  } catch (error) {
    console.error('Error creating installation report:', error);

    // Handle duplicate key error
    if (error && typeof error === 'object' && 'code' in error && error.code === 11000) {
      return NextResponse.json(
        { error: 'Report with this ID already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create installation report' },
      { status: 500 }
    );
  }
}