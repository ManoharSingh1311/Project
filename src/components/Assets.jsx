import { useEffect, useState } from "react";
import { Boxes, ClipboardList } from "lucide-react";
import AssetRegistration from "./module1/AssetRegistration";
import AssetList from "./module1/AssetList";
import AssetKPIs from "./module1/AssetKPIs";
import { getAssets, saveAssets } from "./module1/assetStorage";

export default function Assets() {
  const [tab, setTab] = useState("list");
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    setAssets(getAssets());
  }, []);

  const addAsset = (asset) => {
    const updated = [...assets, asset];
    setAssets(updated);
    saveAssets(updated);
    setTab("list");
  };

  const deleteAsset = (id) => {
    const updated = assets.filter(a => a.id !== id);
    setAssets(updated);
    saveAssets(updated);
  };

  const updateAsset = (updatedAsset) => {
    const updated = assets.map(a =>
      a.id === updatedAsset.id ? updatedAsset : a
    );
    setAssets(updated);
    saveAssets(updated);
  };

  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]" />

        <div className="relative p-8 text-white">
          <div className="flex items-center gap-3">
            <Boxes className="w-9 h-9 text-slate-300" />
            <h1 className="text-3xl font-bold tracking-tight">
              Asset Management
            </h1>
          </div>

          <p className="mt-3 text-slate-300 max-w-3xl leading-relaxed">
            Centralized management of oil & gas assets — from registration and
            operational tracking to lifecycle status updates and compliance readiness.
          </p>
        </div>
      </div>

      {/* ================= KPI SECTION ================= */}
      <AssetKPIs assets={assets} />

      {/* ================= CONTENT ================= */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

        {/* -------- Tabs -------- */}
        <div className="flex border-b bg-gray-50 rounded-t-xl overflow-hidden">
          <TabButton
            label="Asset List"
            icon={ClipboardList}
            active={tab === "list"}
            onClick={() => setTab("list")}
          />
          <TabButton
            label="Asset Registration"
            icon={Boxes}
            active={tab === "register"}
            onClick={() => setTab("register")}
          />
        </div>

        {/* -------- Tab Content -------- */}
        <div className="p-6">
          {tab === "register" ? (
            <AssetRegistration assets={assets} onAdd={addAsset} />
          ) : (
            <AssetList
              assets={assets}
              onDelete={deleteAsset}
              onUpdate={updateAsset}
            />
          )}
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="text-center text-sm text-gray-500 pt-4 border-t">
        © {new Date().getFullYear()} PetroManage — Asset & Operations Management System
      </div>
    </div>
  );
}

/* ================= TAB BUTTON ================= */
function TabButton({ label, icon: Icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition
        ${
          active
            ? "bg-white text-slate-900 border-b-2 border-slate-900"
            : "text-gray-600 hover:text-slate-900 hover:bg-gray-100"
        }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}
