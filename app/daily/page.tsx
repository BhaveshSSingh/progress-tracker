'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Save, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CHART_DATA } from '@/lib/mockData';

export default function DailyPage() {
  const [formData, setFormData] = useState({
    hours: 0,
    topicsLearned: '',
    questionsSolved: 0,
    questionsRevisited: 0,
    revisionNotes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Entry saved! (Mock)");
    setFormData({
      hours: 0,
      topicsLearned: '',
      questionsSolved: 0,
      questionsRevisited: 0,
      revisionNotes: '',
    });
  };

  return (
    <div className="min-h-screen bg-black p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Daily Tracking</h2>
          <p className="text-slate-500">Log your progress for today.</p>
        </div>
        <div className="text-slate-500 text-sm flex items-center gap-2">
          <Calendar size={16} />
          {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form */}
        <Card className="lg:col-span-1 bg-gradient-to-br from-slate-950 to-black border-slate-800 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
          <CardHeader>
            <CardTitle className="text-white">New Entry</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Hours Spent</label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.hours}
                    onChange={(e) => setFormData({ ...formData, hours: parseFloat(e.target.value) })}
                    className="w-full p-2 bg-black border border-slate-800 rounded-md text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Questions</label>
                  <input
                    type="number"
                    value={formData.questionsSolved}
                    onChange={(e) => setFormData({ ...formData, questionsSolved: parseInt(e.target.value) })}
                    className="w-full p-2 bg-black border border-slate-800 rounded-md text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Topics Learned</label>
                <input
                  type="text"
                  value={formData.topicsLearned}
                  onChange={(e) => setFormData({ ...formData, topicsLearned: e.target.value })}
                  className="w-full p-2 bg-black border border-slate-800 rounded-md text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                  placeholder="React, System Design..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Revision Notes</label>
                <textarea
                  value={formData.revisionNotes}
                  onChange={(e) => setFormData({ ...formData, revisionNotes: e.target.value })}
                  className="w-full p-2 bg-black border border-slate-800 rounded-md h-32 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
                  placeholder="What did you revise today?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                <Save size={18} />
                Save Entry
              </button>
            </form>
          </CardContent>
        </Card>

        {/* Activity Chart */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-slate-950 to-black border-slate-800 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
          <CardHeader>
            <CardTitle className="text-white">Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA.activity}>
                <XAxis dataKey="date" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}h`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0a', borderColor: '#334155', color: '#f8fafc' }}
                  cursor={{ fill: 'rgba(34,197,94,0.05)' }}
                />
                <Bar dataKey="hours" fill="#22c55e" radius={[4, 4, 0, 0]} name="Study Hours" />
                <Bar dataKey="questions" fill="#a855f7" radius={[4, 4, 0, 0]} name="Questions Solved" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
