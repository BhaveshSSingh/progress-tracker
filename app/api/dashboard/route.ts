import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import DailyMetrics from '@/models/DailyMetrics';
import Project from '@/models/Project';
import Application from '@/models/Application';
import { getServerSession } from 'next-auth';
import { startOfWeek, endOfWeek } from 'date-fns';

export async function GET() {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  try {
    const now = new Date();
    const start = startOfWeek(now);
    const end = endOfWeek(now);

    // Daily Metrics for this week
    const weeklyMetrics = await DailyMetrics.find({
      date: { $gte: start, $lte: end }
    });

    const totalHours = weeklyMetrics.reduce((acc, curr) => acc + curr.hours, 0);
    const questionsSolved = weeklyMetrics.reduce((acc, curr) => acc + curr.questionsSolved, 0);
    const revisionsDone = weeklyMetrics.filter(m => m.revisionNotes).length;

    // Projects
    const projects = await Project.find({});
    const activeProjects = projects.filter(p => p.status === 'In Progress').length;

    // Applications
    const applications = await Application.find({});
    const applicationStats = {
      applied: applications.filter(a => a.status === 'Applied').length,
      interview: applications.filter(a => a.status === 'Interview').length,
      offer: applications.filter(a => a.status === 'Offer').length,
      rejected: applications.filter(a => a.status === 'Rejected').length,
    };

    return NextResponse.json({
      totalHours,
      questionsSolved,
      revisionsDone,
      activeProjects,
      applicationStats,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch dashboard stats' }, { status: 500 });
  }
}
