import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import DailyMetrics from '@/models/DailyMetrics';
import { getServerSession } from 'next-auth';

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  try {
    const metrics = await DailyMetrics.find({}).sort({ date: -1 });
    return NextResponse.json(metrics);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch metrics' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  try {
    const body = await request.json();
    const metric = await DailyMetrics.create(body);
    return NextResponse.json(metric, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create metric' }, { status: 500 });
  }
}
