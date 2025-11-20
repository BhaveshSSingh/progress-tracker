'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, CalendarCheck, TrendingUp, AlertCircle } from 'lucide-react';

const MOCK_CHECKINS = [
  {
    _id: "1",
    weekNumber: 1,
    summary: "Started DSA with Arrays and Strings. Solved 15 easy problems.",
    interviews: 0,
    improvements: "Need to be more consistent with daily hours.",
    createdAt: "2024-03-10",
  },
  {
    _id: "2",
    weekNumber: 2,
    summary: "Moved to Linked Lists. Built the basic UI for the tracker.",
    interviews: 1,
    improvements: "Focus on system design concepts next week.",
    createdAt: "2024-03-17",
  }
];

export default function WeeklyPage() {
  const [checkins, setCheckins] = useState(MOCK_CHECKINS);
  const [formData, setFormData] = useState({
    weekNumber: 3,
    summary: '',
    interviews: 0,
    improvements: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Check-in submitted! (Mock)");
    setFormData({
      weekNumber: formData.weekNumber + 1,
      summary: '',
      interviews: 0,
      improvements: '',
    });
  };

  return (
    <div className="min-h-screen bg-black p-6 space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Weekly Check-in</h2>
        <p className="text-slate-500">Reflect, adapt, and improve.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* New Check-in Form */}
        <Card className="bg-gradient-to-br from-slate-950 to-black border-slate-800 shadow-[0_0_30px_rgba(34,197,94,0.15)] h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <TrendingUp className="text-green-400" />
              New Check-in
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Week Number</label>
                  <input
                    type="number"
                    value={formData.weekNumber}
                    onChange={(e) => setFormData({ ...formData, weekNumber: parseInt(e.target.value) })}
                    className="w-full p-2 bg-black border border-slate-800 rounded-md text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Interviews</label>
                  <input
                    type="number"
                    value={formData.interviews}
                    onChange={(e) => setFormData({ ...formData, interviews: parseInt(e.target.value) })}
                    className="w-full p-2 bg-black border border-slate-800 rounded-md text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Summary</label>
                <textarea
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full p-2 bg-black border border-slate-800 rounded-md h-32 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                  placeholder="What did you accomplish this week?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Improvements / Plan</label>
                <textarea
                  value={formData.improvements}
                  onChange={(e) => setFormData({ ...formData, improvements: e.target.value })}
                  className="w-full p-2 bg-black border border-slate-800 rounded-md h-32 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                  placeholder="What needs to change next week?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                <Save size={18} />
                Submit Check-in
              </button>
            </form>
          </CardContent>
        </Card>

        {/* Past Check-ins List */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Past Check-ins</h3>
          {checkins.map((checkin) => (
            <Card key={checkin._id} className="bg-gradient-to-br from-slate-950 to-black border-slate-800 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">Week {checkin.weekNumber}</CardTitle>
                  <span className="text-xs text-slate-600 flex items-center gap-1">
                    <CalendarCheck size={12} />
                    {new Date(checkin.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Summary</p>
                  <p className="text-sm mt-1 text-slate-400 leading-relaxed">{checkin.summary}</p>
                </div>
                
                {checkin.improvements && (
                  <div className="bg-yellow-500/5 p-3 rounded-md border border-yellow-500/10">
                    <p className="text-xs font-semibold text-yellow-500/80 uppercase tracking-wider flex items-center gap-1">
                      <AlertCircle size={12} /> Improvements
                    </p>
                    <p className="text-sm mt-1 text-slate-400">{checkin.improvements}</p>
                  </div>
                )}
                
                {checkin.interviews > 0 && (
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-400 bg-blue-500/10 p-2 rounded w-fit">
                    <CalendarCheck size={16} />
                    {checkin.interviews} Interviews
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
