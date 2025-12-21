// components/module1/AssetLifecycle.jsx
import { ArrowRight, CheckCircle, Clock, XCircle } from "lucide-react";

const STATUS_ORDER = [
  "Registered",
  "Operational",
  "Maintenance",
  "Under Inspection",
  "Decommissioned"
];

function AssetLifecycle({ assets }) {
  if (assets.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No assets available to display lifecycle
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="border rounded-xl p-6 bg-white shadow-sm"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-lg">{asset.name}</h3>
              <p className="text-sm text-gray-500">
                {asset.id} · {asset.type} · {asset.location}
              </p>
            </div>

            <span className="text-sm px-3 py-1 rounded-full bg-gray-100">
              {asset.status}
            </span>
          </div>

          {/* Timeline */}
          <div className="flex items-center gap-4 overflow-x-auto">
            {STATUS_ORDER.map((status, i) => {
              const isCompleted =
                STATUS_ORDER.indexOf(asset.status) >= i;

              return (
                <div key={status} className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border
                      ${
                        isCompleted
                          ? "bg-green-500 text-white border-green-500"
                          : "bg-gray-100 text-gray-400"
                      }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </div>

                  <div className="text-xs font-medium text-gray-600">
                    {status}
                  </div>

                  {i < STATUS_ORDER.length - 1 && (
                    <ArrowRight className="text-gray-300 w-4 h-4" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
export default AssetLifecycle;