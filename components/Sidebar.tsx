'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, Briefcase, FolderKanban, CalendarCheck, LogOut, Zap } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/daily', label: 'Daily Tracking', icon: Calendar },
    { href: '/applications', label: 'Applications', icon: Briefcase },
    { href: '/projects', label: 'Projects', icon: FolderKanban },
    { href: '/weekly', label: 'Weekly Check-in', icon: CalendarCheck },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-950 to-black border-r border-slate-800 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-500/10 rounded-lg">
            <Zap className="text-green-400" size={28} />
          </div>
          <h1 className="text-xl font-bold text-white">Job Tracker</h1>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-green-500/10 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={() => signOut()}
          className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
