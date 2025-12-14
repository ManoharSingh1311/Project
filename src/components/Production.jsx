import { useState } from 'react';
import { Plus, Calendar, TrendingUp, BarChart } from 'lucide-react';

export default function Production() {
  const [activeTab, setActiveTab] = useState<'plans' | 'records'>('plans');
  const [showAddForm, setShowAddForm] = useState(false);

  const productionPlans = [
    { id: 'PLAN-001', assetId: 'RIG-001', assetName: 'North Sea Rig Alpha', plannedVolume: 5000, unit: 'barrels/day', startDate: '2024-01-01', endDate: '2024-03-31', status: 'Active' },
    { id: 'PLAN-002', assetId: 'RIG-002', assetName: 'West Texas Rig Beta', plannedVolume: 4200, unit: 'barrels/day', startDate: '2024-01-01', endDate: '2024-03-31', status: 'Active' },
    { id: 'PLAN-003', assetId: 'RIG-008', assetName: 'Gulf Platform Echo', plannedVolume: 6500, unit: 'barrels/day', startDate: '2024-01-15', endDate: '2024-04-15', status: 'Active' },
    { id: 'PLAN-004', assetId: 'STG-012', assetName: 'Storage Facility B', plannedVolume: 150000, unit: 'barrels', startDate: '2024-01-01', endDate: '2024-06-30', status: 'Planned' }
  ];

  const productionRecords = [
    { id: 'REC-1245', assetId: 'RIG-001', assetName: 'North Sea Rig Alpha', actualVolume: 5150, plannedVolume: 5000, unit: 'barrels', date: '2024-01-14', variance: '+3%' },
    { id: 'REC-1246', assetId: 'RIG-002', assetName: 'West Texas Rig Beta', actualVolume: 4050, plannedVolume: 4200, unit: 'barrels', date: '2024-01-14', variance: '-3.6%' },
    { id: 'REC-1247', assetId: 'RIG-008', assetName: 'Gulf Platform Echo', actualVolume: 6420, plannedVolume: 6500, unit: 'barrels', date: '2024-01-14', variance: '-1.2%' },
    { id: 'REC-1248', assetId: 'RIG-001', assetName: 'North Sea Rig Alpha', actualVolume: 4980, plannedVolume: 5000, unit: 'barrels', date: '2024-01-13', variance: '-0.4%' },
    { id: 'REC-1249', assetId: 'RIG-002', assetName: 'West Texas Rig Beta', actualVolume: 4300, plannedVolume: 4200, unit: 'barrels', date: '2024-01-13', variance: '+2.4%' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Production Management</h2>
          <p className="text-gray-600 mt-1">Plan and track production operations</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
        >
          <Plus size={20} />
          {activeTab === 'plans' ? 'New Plan' : 'Add Record'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <BarChart className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">15,650</p>
              <p className="text-sm text-gray-600">Daily Production (barrels)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">98.2%</p>
              <p className="text-sm text-gray-600">Plan Achievement</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-50 rounded-lg">
              <Calendar className="text-amber-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">4</p>
              <p className="text-sm text-gray-600">Active Production Plans</p>
            </div>
          </div>
        </div>
      </div>

      {showAddForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {activeTab === 'plans' ? 'Create Production Plan' : 'Add Production Record'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Asset</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                <option value="">Select Asset</option>
                <option value="RIG-001">RIG-001 - North Sea Rig Alpha</option>
                <option value="RIG-002">RIG-002 - West Texas Rig Beta</option>
                <option value="RIG-008">RIG-008 - Gulf Platform Echo</option>
              </select>
            </div>
            {activeTab === 'plans' ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Planned Volume</label>
                  <input
                    type="number"
                    placeholder="e.g., 5000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Actual Volume</label>
                  <input
                    type="number"
                    placeholder="e.g., 4980"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  />
                </div>
              </>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                <option value="barrels">Barrels</option>
                <option value="barrels/day">Barrels per Day</option>
                <option value="mcf">MCF (Natural Gas)</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
              {activeTab === 'plans' ? 'Create Plan' : 'Add Record'}
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
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('plans')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'plans'
                  ? 'border-b-2 border-slate-800 text-slate-800'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Production Plans
            </button>
            <button
              onClick={() => setActiveTab('records')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'records'
                  ? 'border-b-2 border-slate-800 text-slate-800'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Production Records
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          {activeTab === 'plans' ? (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Planned Volume</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {productionPlans.map((plan) => (
                  <tr key={plan.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{plan.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{plan.assetName}</p>
                        <p className="text-xs text-gray-500">{plan.assetId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {plan.plannedVolume.toLocaleString()} {plan.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {plan.startDate} to {plan.endDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        plan.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {plan.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Record ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Planned</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {productionRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{record.assetName}</p>
                        <p className="text-xs text-gray-500">{record.assetId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.actualVolume.toLocaleString()} {record.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {record.plannedVolume.toLocaleString()} {record.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        record.variance.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {record.variance}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{record.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
