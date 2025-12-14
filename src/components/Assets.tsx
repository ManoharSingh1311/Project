import { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';

export default function Assets() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const assets = [
    { id: 'RIG-001', name: 'North Sea Rig Alpha', type: 'RIG', location: 'North Sea', status: 'Operational', lastMaintenance: '2024-01-05' },
    { id: 'RIG-002', name: 'West Texas Rig Beta', type: 'RIG', location: 'Texas', status: 'Operational', lastMaintenance: '2024-01-03' },
    { id: 'PL-045', name: 'Pipeline Delta-7', type: 'PIPELINE', location: 'Texas', status: 'Operational', lastMaintenance: '2023-12-28' },
    { id: 'PL-046', name: 'Pipeline Gamma-3', type: 'PIPELINE', location: 'Oklahoma', status: 'Under Inspection', lastMaintenance: '2024-01-10' },
    { id: 'STG-012', name: 'Storage Facility B', type: 'STORAGE', location: 'Louisiana', status: 'Maintenance', lastMaintenance: '2024-01-08' },
    { id: 'STG-013', name: 'Storage Tank Array C', type: 'STORAGE', location: 'California', status: 'Operational', lastMaintenance: '2024-01-02' },
    { id: 'RIG-008', name: 'Gulf Platform Echo', type: 'RIG', location: 'Gulf of Mexico', status: 'Operational', lastMaintenance: '2024-01-06' },
    { id: 'PL-052', name: 'Pipeline Omega-9', type: 'PIPELINE', location: 'Alaska', status: 'Operational', lastMaintenance: '2023-12-30' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Operational':
        return 'bg-green-100 text-green-800';
      case 'Maintenance':
        return 'bg-amber-100 text-amber-800';
      case 'Under Inspection':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'RIG':
        return 'bg-slate-100 text-slate-800';
      case 'PIPELINE':
        return 'bg-cyan-100 text-cyan-800';
      case 'STORAGE':
        return 'bg-violet-100 text-violet-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Asset Management</h2>
          <p className="text-gray-600 mt-1">Register and manage oil & gas assets</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
        >
          <Plus size={20} />
          Add Asset
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Register New Asset</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Asset ID</label>
              <input
                type="text"
                placeholder="e.g., RIG-009"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Asset Name</label>
              <input
                type="text"
                placeholder="e.g., Pacific Rig Delta"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Asset Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                <option value="">Select Type</option>
                <option value="RIG">RIG</option>
                <option value="PIPELINE">PIPELINE</option>
                <option value="STORAGE">STORAGE</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="e.g., North Dakota"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                <option value="Operational">Operational</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Under Inspection">Under Inspection</option>
                <option value="Decommissioned">Decommissioned</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Installation Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
              Register Asset
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search assets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter size={20} />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Maintenance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assets.map((asset) => (
                <tr key={asset.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{asset.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{asset.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(asset.type)}`}>
                      {asset.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{asset.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{asset.lastMaintenance}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex gap-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit size={16} />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
