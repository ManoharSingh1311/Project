import { useState } from 'react';
import { Plus, Search, Calendar, User } from 'lucide-react';

export default function Maintenance() {
  const [showAddForm, setShowAddForm] = useState(false);

  const workOrders = [
    {
      id: 'WO-1023',
      assetId: 'RIG-001',
      assetName: 'North Sea Rig Alpha',
      description: 'Preventive maintenance - drilling system inspection',
      type: 'Preventive',
      scheduledDate: '2024-01-15',
      assignedTo: 'John Mitchell',
      status: 'In Progress',
      priority: 'High'
    },
    {
      id: 'WO-1024',
      assetId: 'PL-045',
      assetName: 'Pipeline Delta-7',
      description: 'Pipeline integrity inspection and pressure testing',
      type: 'Preventive',
      scheduledDate: '2024-01-18',
      assignedTo: 'Sarah Connor',
      status: 'Scheduled',
      priority: 'Medium'
    },
    {
      id: 'WO-1025',
      assetId: 'STG-012',
      assetName: 'Storage Facility B',
      description: 'Tank pressure valve replacement - emergency',
      type: 'Corrective',
      scheduledDate: '2024-01-12',
      assignedTo: 'Mike Davis',
      status: 'Overdue',
      priority: 'Critical'
    },
    {
      id: 'WO-1026',
      assetId: 'RIG-002',
      assetName: 'West Texas Rig Beta',
      description: 'Quarterly equipment calibration',
      type: 'Preventive',
      scheduledDate: '2024-01-20',
      assignedTo: 'Lisa Anderson',
      status: 'Scheduled',
      priority: 'Medium'
    },
    {
      id: 'WO-1027',
      assetId: 'RIG-008',
      assetName: 'Gulf Platform Echo',
      description: 'Hydraulic system leak repair',
      type: 'Corrective',
      scheduledDate: '2024-01-16',
      assignedTo: 'Robert Lee',
      status: 'In Progress',
      priority: 'High'
    },
    {
      id: 'WO-1028',
      assetId: 'PL-046',
      assetName: 'Pipeline Gamma-3',
      description: 'Corrosion inspection and coating application',
      type: 'Preventive',
      scheduledDate: '2024-01-22',
      assignedTo: 'Emily Taylor',
      status: 'Scheduled',
      priority: 'Low'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Scheduled':
        return 'bg-gray-100 text-gray-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-100 text-red-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Maintenance Management</h2>
          <p className="text-gray-600 mt-1">Schedule and track work orders</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
        >
          <Plus size={20} />
          Create Work Order
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Work Orders</p>
          <p className="text-3xl font-bold text-gray-900">23</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">In Progress</p>
          <p className="text-3xl font-bold text-blue-600">8</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Scheduled</p>
          <p className="text-3xl font-bold text-gray-600">12</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Overdue</p>
          <p className="text-3xl font-bold text-red-600">3</p>
        </div>
      </div>

      {showAddForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Work Order</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Work Order ID</label>
              <input
                type="text"
                placeholder="Auto-generated"
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Asset</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                <option value="">Select Asset</option>
                <option value="RIG-001">RIG-001 - North Sea Rig Alpha</option>
                <option value="RIG-002">RIG-002 - West Texas Rig Beta</option>
                <option value="PL-045">PL-045 - Pipeline Delta-7</option>
                <option value="STG-012">STG-012 - Storage Facility B</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows={3}
                placeholder="Describe the maintenance work required..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                <option value="Preventive">Preventive</option>
                <option value="Corrective">Corrective</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Scheduled Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Assign To</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                <option value="">Select Technician</option>
                <option value="john">John Mitchell</option>
                <option value="sarah">Sarah Connor</option>
                <option value="mike">Mike Davis</option>
                <option value="lisa">Lisa Anderson</option>
                <option value="robert">Robert Lee</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
              Create Work Order
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
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search work orders..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WO ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scheduled Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {workOrders.map((wo) => (
                <tr key={wo.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{wo.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{wo.assetName}</p>
                      <p className="text-xs text-gray-500">{wo.assetId}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{wo.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{wo.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(wo.priority)}`}>
                      {wo.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-gray-400" />
                      {wo.scheduledDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-gray-400" />
                      {wo.assignedTo}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(wo.status)}`}>
                      {wo.status}
                    </span>
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
