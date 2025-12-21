// module1/AssetRegistration.jsx
import { useState } from "react";
import { normalizeAsset } from "./assetFormat";

const ID_PREFIX = {
  RIG: "RIG",
  PIPELINE: "PL",
  STORAGE: "STG"
};

export default function AssetRegistration({ assets, onAdd }) {
  const [form, setForm] = useState({
    type: "",
    name: "",
    id: "",
    location: "",
    status: "Operational"
  });

  const [errors, setErrors] = useState({});

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const e = {};

    if (!form.type) {
      e.type = "Asset type is required";
    }

    if (!form.name.trim()) {
      e.name = "Asset name is required";
    } else if (form.name.trim().length < 3) {
      e.name = "Asset name must be at least 3 characters";
    }

    if (!form.id.trim()) {
      e.id = "Asset ID is required";
    } else if (form.type) {
      const prefix = ID_PREFIX[form.type];
      const regex = new RegExp(`^${prefix}-\\d{3}$`, "i");
      if (!regex.test(form.id)) {
        e.id = `Format must be ${prefix}-001`;
      }
    }

    if (
      assets.some(
        (a) => a.id === form.id.toUpperCase()
      )
    ) {
      e.id = "Asset ID already exists";
    }

    if (!form.location.trim()) {
      e.location = "Location is required";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------------- SUBMIT ---------------- */
  const submit = () => {
    if (!validate()) return;

    const asset = normalizeAsset({
      ...form,
      lastMaintenance: new Date().toISOString().slice(0, 10)
    });

    onAdd(asset);

    setForm({
      type: "",
      name: "",
      id: "",
      location: "",
      status: "Operational"
    });

    setErrors({});
  };

  /* ---------------- UI HELPERS ---------------- */
  const inputClass = (field) =>
    `w-full px-4 py-2 rounded-lg border text-sm
     focus:ring-2 focus:ring-slate-500 focus:outline-none
     ${errors[field] ? "border-red-400" : "border-gray-300"}`;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900">
          Register New Asset
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Enter asset details to onboard into PetroManage
        </p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Asset Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Asset Type <span className="text-red-500">*</span>
          </label>
          <select
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value, id: "" })
            }
            className={inputClass("type")}
          >
            <option value="">Select Asset Type</option>
            <option value="RIG">RIG</option>
            <option value="PIPELINE">PIPELINE</option>
            <option value="STORAGE">STORAGE</option>
          </select>
          {errors.type && (
            <p className="text-xs text-red-500 mt-1">{errors.type}</p>
          )}
        </div>

        {/* Asset Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Asset Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., North Sea Rig Alpha"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Asset ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Asset ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder={
              form.type ? `${ID_PREFIX[form.type]}-001` : "Select type first"
            }
            value={form.id}
            onChange={(e) =>
              setForm({ ...form, id: e.target.value.toUpperCase() })
            }
            disabled={!form.type}
            className={`${inputClass("id")} ${
              !form.type && "bg-gray-100 cursor-not-allowed"
            }`}
          />
          {errors.id && (
            <p className="text-xs text-red-500 mt-1">{errors.id}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., Gulf of Mexico"
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
            className={inputClass("location")}
          />
          {errors.location && (
            <p className="text-xs text-red-500 mt-1">{errors.location}</p>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Initial Status
          </label>
          <select
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
            className={inputClass("status")}
          >
            <option>Operational</option>
            <option>Maintenance</option>
            <option>Under Inspection</option>
            <option>Decommissioned</option>
          </select>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-10 flex justify-end gap-3">
        <button
          onClick={submit}
          className="px-8 py-2 bg-slate-800 text-white rounded-lg
                     hover:bg-slate-700 transition font-medium"
        >
          Register Asset
        </button>
      </div>
    </div>
  );
}
