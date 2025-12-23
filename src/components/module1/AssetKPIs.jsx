// components/module1/AssetKPIs.jsx
import {
  Factory,
  Wrench,
  AlertTriangle,
  ShieldAlert,
  Ban,
  Drill,
  GitBranch,
  Warehouse
} from "lucide-react";

export default function AssetKPIs({ assets }) {
  const count = (fn) => assets.filter(fn).length;

  const total = assets.length;

  const kpis = [
    {
      title: "Total Assets",
      value: total,
      subtitle: "registered units",
      icon: Factory,
      color: "from-slate-700 to-slate-900"
    },
    {
      title: "Operational",
      value: count(a => a.status === "Operational"),
      subtitle: "running normally",
      icon: AlertTriangle,
      color: "from-green-500 to-green-700"
    },
    {
      title: "Maintenance",
      value: count(a => a.status === "Maintenance"),
      subtitle: "require attention",
      icon: Wrench,
      color: "from-amber-500 to-amber-700"
    },
    {
      title: "Under Inspection",
      value: count(a => a.status === "Under Inspection"),
      subtitle: "being reviewed",
      icon: ShieldAlert,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Decommissioned",
      value: count(a => a.status === "Decommissioned"),
      subtitle: "retired assets",
      icon: Ban,
      color: "from-red-500 to-red-700"
    },
    {
      title: "Rigs",
      value: count(a => a.type === "RIG"),
      subtitle: "drilling units",
      icon: Drill,
      color: "from-slate-500 to-slate-700"
    },
    {
      title: "Pipelines",
      value: count(a => a.type === "PIPELINE"),
      subtitle: "active lines",
      icon: GitBranch,
      color: "from-cyan-500 to-cyan-700"
    },
    {
      title: "Storage Units",
      value: count(a => a.type === "STORAGE"),
      subtitle: "capacity holders",
      icon: Warehouse,
      color: "from-violet-500 to-violet-700"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
}

/* ---------------- KPI CARD ---------------- */
function KpiCard({ title, value, subtitle, icon: Icon, color }) {
  return (
    <div
      className="group relative bg-white rounded-xl border border-gray-200
                 p-5 flex items-center gap-4
                 shadow-sm hover:shadow-xl
                 hover:-translate-y-1 transition-all duration-300
                 overflow-hidden"
    >
      {/* left glow bar */}
      <span
        className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${color}
                    opacity-0 group-hover:opacity-100 transition`}
      />

      {/* icon */}
      <div
        className={`p-3 rounded-xl bg-gradient-to-br ${color}
                    text-white shadow-md
                    group-hover:scale-105 group-hover:rotate-1
                    transition`}
      >
        <Icon className="w-7 h-7" />
      </div>

      {/* text */}
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {title}
        </p>
        <p className="text-2xl font-bold text-gray-900 leading-tight">
          {value}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
