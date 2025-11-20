'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Briefcase, Building2, Calendar } from 'lucide-react';
import { MOCK_APPLICATIONS } from '@/lib/mockData';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState(MOCK_APPLICATIONS);
  const [showForm, setShowForm] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Offer': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Rejected': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'Interview': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Online Test': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-black p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Applications</h2>
          <p className="text-slate-500">Track your job hunt.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        >
          <Plus size={18} />
          New Application
        </button>
      </div>

      <div className="grid gap-4">
        {applications.map((app) => (
          <Card key={app._id} className="hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all bg-gradient-to-br from-slate-950 to-black border-slate-800 group">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-slate-800 transition">
                  <Building2 className="text-slate-500" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{app.company}</h3>
                  <p className="text-slate-500">{app.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-right hidden md:block">
                  <p className="text-xs text-slate-600 flex items-center justify-end gap-1">
                    <Calendar size={12} /> Applied
                  </p>
                  <p className="text-sm font-medium text-slate-400">{new Date(app.dateApplied).toLocaleDateString()}</p>
                </div>
                
                <div className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(app.status)}`}>
                  {app.status}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
