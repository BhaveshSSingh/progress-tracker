'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, FolderKanban, Clock, CheckSquare, Github, ExternalLink } from 'lucide-react';
import { MOCK_PROJECTS } from '@/lib/mockData';

export default function ProjectsPage() {
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const [showForm, setShowForm] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'In Progress': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'On Hold': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-black p-6 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">Projects</h2>
          <p className="text-slate-500">Build your portfolio.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        >
          <Plus size={18} />
          New Project
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project._id} className="flex flex-col bg-gradient-to-br from-slate-950 to-black border-slate-800 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all group">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition">
                    <FolderKanban className="text-green-400" size={24} />
                  </div>
                  <CardTitle className="text-lg text-white">{project.name}</CardTitle>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock size={16} />
                <span>{project.hours} hours spent</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-medium text-slate-400">
                  <span>Tasks</span>
                  <span className="text-slate-600">{project.tasks.length} items</span>
                </div>
                <ul className="space-y-2">
                  {project.tasks.map((task, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckSquare size={14} className="text-slate-700" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex gap-2">
                 <button className="flex-1 py-2 text-sm bg-slate-900 hover:bg-slate-800 rounded text-slate-400 flex items-center justify-center gap-2 transition">
                    <Github size={14} /> Code
                 </button>
                 <button className="flex-1 py-2 text-sm bg-slate-900 hover:bg-slate-800 rounded text-slate-400 flex items-center justify-center gap-2 transition">
                    <ExternalLink size={14} /> Demo
                 </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
