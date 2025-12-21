import { useEffect, useState } from "react";
import {
  Boxes,
  ClipboardList,
  PlusCircle,
  RefreshCcw
} from "lucide-react";

import AssetRegistration from "./module1/AssetRegistration";
import AssetList from "./module1/AssetList";
import AssetLifecycle from "./module1/AssetLifecycle";

import AssetKPIs from "./module1/AssetKPIs";
import { getAssets, saveAssets } from "./module1/assetStorage";

export default function Assets() {
  const [tab, setTab] = useState("list");
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    setAssets(getAssets());
  }, []);

  /* ---------------- CRUD OPERATIONS ---------------- */
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
            operational tracking to lifecycle status transitions and compliance readiness.
          </p>
        </div>
      </div>

      {/* ================= KPI SECTION ================= */}
      <AssetKPIs assets={assets} />

      {/* ================= MODULE SWITCH ================= */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

        {/* Switch Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50 rounded-t-xl">
          <h2 className="font-semibold text-gray-800">Module View</h2>

          <div className="flex bg-gray-200 rounded-lg p-1">
            <SwitchButton
              icon={ClipboardList}
              label="Assets"
              active={tab === "list"}
              onClick={() => setTab("list")}
            />
            <SwitchButton
              icon={PlusCircle}
              label="Register"
              active={tab === "register"}
              onClick={() => setTab("register")}
            />
            <SwitchButton
              icon={RefreshCcw}
              label="Lifecycle"
              active={tab === "lifecycle"}
              onClick={() => setTab("lifecycle")}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {tab === "list" && (
            <AssetList
              assets={assets}
              onDelete={deleteAsset}
              onUpdate={updateAsset}
            />
          )}

          {tab === "register" && (
            <AssetRegistration
              assets={assets}
              onAdd={addAsset}
            />
          )}

          {tab === "lifecycle" && (
            <AssetLifecycle assets={assets} />
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

/* ================= SWITCH BUTTON ================= */
function SwitchButton({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition
        ${
          active
            ? "bg-white text-slate-900 shadow"
            : "text-gray-600 hover:text-gray-900"
        }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}
