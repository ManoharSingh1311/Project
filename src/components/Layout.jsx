import { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  TrendingUp,
  Wrench,
  FileCheck,
  BarChart3,
  Menu,
  X
} from 'lucide-react';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', id: 'dashboard' },
    { icon: <Package size={20} />, label: 'Assets', id: 'assets' },
    { icon: <TrendingUp size={20} />, label: 'Production', id: 'production' },
    { icon: <Wrench size={20} />, label: 'Maintenance', id: 'maintenance' },
    { icon: <FileCheck size={20} />, label: 'Compliance', id: 'compliance' },
    { icon: <BarChart3 size={20} />, label: 'Analytics', id: 'analytics' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <aside
        className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-slate-800 text-white transition-all duration-300 overflow-hidden`}
      >
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold text-amber-400">PetroManage</h1>
          <p className="text-sm text-slate-400 mt-1">Operations Management</p>
        </div>

        <nav className="p-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors mb-1 text-left"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                Operations Manager
              </p>
              <p className="text-xs text-gray-500">
                operator@petromanage.com
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-medium">
              OM
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
