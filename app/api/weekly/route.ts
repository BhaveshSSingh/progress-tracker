import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import WeeklyCheckin from '@/models/WeeklyCheckin';
import { getServerSession } from 'next-auth';

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  try {
    const checkins = await WeeklyCheckin.find({}).sort({ weekNumber: -1 });
    return NextResponse.json(checkins);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch check-ins' }, { status: 500 });
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
    const checkin = await WeeklyCheckin.create(body);
    return NextResponse.json(checkin, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create check-in' }, { status: 500 });
  }
}
