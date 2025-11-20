'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { RadialBarChart, RadialBar, PolarRadiusAxis, Label, BarChart, Bar, XAxis, YAxis, CartesianGrid, AreaChart, Area } from 'recharts';
import { GOALS, CHART_DATA, WEEKLY_GOALS, MONTHLY_GOALS } from '@/lib/mockData';
import { CheckCircle2, Circle, Trophy, Target, Rocket, TrendingUp, Zap } from 'lucide-react';

export default function DashboardPage() {
  const dsaProgress = (GOALS.dsa.current / GOALS.dsa.target) * 100;
  const aiProgress = GOALS.aiCourse.current;

  // Generate smooth DSA progress data
  const dsaChartData = [
    { week: 'W1', hours: 45 },
    { week: 'W2', hours: 58 },
    { week: 'W3', hours: 72 },
    { week: 'W4', hours: 85 },
    { week: 'W5', hours: 95 },
    { week: 'W6', hours: 108 },
    { week: 'W7', hours: 124 },
  ];

  return (
    <div className="min-h-screen bg-black p-6 space-y-8">
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
          <Zap className="text-green-400" size={36} />
          Mission Control
        </h2>
        <p className="text-slate-500 mt-2">Your path to success, visualized.</p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Main Goal: DSA Hours (Large Tile) - Market Trends Style */}
        <Card className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-slate-950 to-black border-slate-800 shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:shadow-[0_0_50px_rgba(34,197,94,0.25)] transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <TrendingUp className="text-green-400" size={24} />
              </div>
              <div>
                <CardTitle className="text-white">DSA Mastery</CardTitle>
                <CardDescription className="text-slate-500">Algorithmic excellence</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">{GOALS.dsa.current}</span>
                <span className="text-slate-500 text-lg">/ {GOALS.dsa.target} hrs</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-green-400 text-sm font-medium">▲ {dsaProgress.toFixed(1)}%</span>
              </div>
            </div>
            
            <div className="h-[200px] w-full">
              <ChartContainer
                config={{
                  hours: { label: "DSA Hours", color: "hsl(142, 76%, 36%)" },
                }}
                className="w-full h-full"
              >
                <AreaChart data={dsaChartData}>
                  <defs>
                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="rgb(34, 197, 94)" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="rgb(34, 197, 94)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="rgb(34, 197, 94)" 
                    strokeWidth={2}
                    fill="url(#colorHours)" 
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </AreaChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Secondary Goal: Applications (Bar Chart) */}
        <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-slate-950 to-black border-slate-800 shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:shadow-[0_0_50px_rgba(239,68,68,0.25)] transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <Rocket className="text-red-400" size={24} />
              </div>
              <div>
                <CardTitle className="text-white">Application Pipeline</CardTitle>
                <CardDescription className="text-slate-500">Goal: {GOALS.applications.target} Applications</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                applied: { label: "Applied", color: "hsl(142, 76%, 36%)" },
                test: { label: "OA", color: "hsl(217, 91%, 60%)" },
                interview: { label: "Interview", color: "hsl(48, 96%, 53%)" },
                offer: { label: "Offer", color: "hsl(142, 76%, 36%)" },
                rejected: { label: "Rejected", color: "hsl(0, 84%, 60%)" },
              }}
              className="h-[200px] w-full"
            >
              <BarChart data={CHART_DATA.applications} layout="vertical" margin={{ left: 0 }}>
                <YAxis dataKey="status" type="category" tickLine={false} axisLine={false} hide />
                <XAxis type="number" hide />
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Bar dataKey="count" radius={5} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* AI Course Progress (Custom Radial) */}
        <Card className="col-span-1 bg-gradient-to-br from-slate-950 to-black border-slate-800 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white">AI Course</CardTitle>
            <CardDescription className="text-slate-500">Deep Learning Path</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
             <div className="relative h-32 w-32 flex items-center justify-center">
                <svg className="h-full w-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-800" />
                  <circle 
                    cx="64" 
                    cy="64" 
                    r="56" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    fill="transparent" 
                    className="text-purple-500" 
                    strokeDasharray={351} 
                    strokeDashoffset={351 - (351 * aiProgress) / 100} 
                    strokeLinecap="round"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))' }}
                  />
                </svg>
                <span className="absolute text-2xl font-bold text-white">{aiProgress}%</span>
             </div>
             <p className="text-xs text-slate-500 mt-3">4 / 10 Modules</p>
          </CardContent>
        </Card>

        {/* Projects Goal */}
        <Card className="col-span-1 bg-gradient-to-br from-slate-950 to-black border-slate-800 shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:shadow-[0_0_50px_rgba(34,197,94,0.25)] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white">Capstone Projects</CardTitle>
            <CardDescription className="text-slate-500">AI Excellence</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-4xl font-bold text-green-400">
              {GOALS.projects.current} <span className="text-lg text-slate-600">/ {GOALS.projects.target}</span>
            </div>
            <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-green-400 w-1/2" 
                style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}
              />
            </div>
            <p className="text-xs text-slate-500">1 In Progress</p>
          </CardContent>
        </Card>

        {/* Weekly Goals List */}
        <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-slate-950 to-black border-slate-800 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:shadow-[0_0_50px_rgba(59,130,246,0.25)] transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Target className="text-blue-400" size={24} />
              </div>
              <CardTitle className="text-white">Weekly Objectives</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {WEEKLY_GOALS.map((goal) => (
                <li key={goal.id} className="flex items-center gap-3 group cursor-pointer">
                  <button className={`transition-all ${goal.completed ? 'text-green-400' : 'text-slate-700 hover:text-green-400'}`}>
                    {goal.completed ? <CheckCircle2 size={20} style={{ filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))' }} /> : <Circle size={20} />}
                  </button>
                  <span className={`${goal.completed ? 'text-slate-600 line-through' : 'text-slate-300'}`}>
                    {goal.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Monthly Goals List */}
        <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-slate-950 to-black border-slate-800 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Target className="text-purple-400" size={24} />
              </div>
              <CardTitle className="text-white">Monthly Targets</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {MONTHLY_GOALS.map((goal) => (
                <li key={goal.id} className="flex items-center gap-3 group cursor-pointer">
                  <button className={`transition-all ${goal.completed ? 'text-green-400' : 'text-slate-700 hover:text-green-400'}`}>
                    {goal.completed ? <CheckCircle2 size={20} style={{ filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.6))' }} /> : <Circle size={20} />}
                  </button>
                  <span className={`${goal.completed ? 'text-slate-600 line-through' : 'text-slate-300'}`}>
                    {goal.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
