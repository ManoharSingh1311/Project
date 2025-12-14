import { TrendingUp, TrendingDown, Activity, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const metrics = [
    {
      title: 'Total Assets',
      value: '248',
      change: '+12',
      trend: 'up',
      icon: <Activity className="text-blue-600" size={24} />
    },
    {
      title: 'Active Production',
      value: '186 Units',
      change: '+8%',
      trend: 'up',
      icon: <TrendingUp className="text-green-600" size={24} />
    },
    {
      title: 'Pending Maintenance',
      value: '23',
      change: '-5',
      trend: 'down',
      icon: <AlertTriangle className="text-amber-600" size={24} />
    },
    {
      title: 'Compliance Score',
      value: '94%',
      change: '+2%',
      trend: 'up',
      icon: <TrendingUp className="text-emerald-600" size={24} />
    }
  ];

  const recentAssets = [
    { id: 'RIG-001', name: 'North Sea Rig Alpha', type: 'RIG', status: 'Operational', location: 'North Sea' },
    { id: 'PL-045', name: 'Pipeline Delta-7', type: 'PIPELINE', status: 'Operational', location: 'Texas' },
    { id: 'STG-012', name: 'Storage Facility B', type: 'STORAGE', status: 'Maintenance', location: 'Louisiana' },
    { id: 'RIG-008', name: 'Gulf Platform Echo', type: 'RIG', status: 'Operational', location: 'Gulf of Mexico' }
  ];

  const recentWorkOrders = [
    { id: 'WO-1023', asset: 'RIG-001', description: 'Preventive maintenance - drilling system', dueDate: '2024-01-15', status: 'In Progress' },
    { id: 'WO-1024', asset: 'PL-045', description: 'Pipeline integrity inspection', dueDate: '2024-01-18', status: 'Scheduled' },
    { id: 'WO-1025', asset: 'STG-012', description: 'Tank pressure valve replacement', dueDate: '2024-01-12', status: 'Overdue' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Operations Dashboard</h2>
        <p className="text-gray-600 mt-1">Real-time overview of assets and operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                {metric.icon}
              </div>
              <span className={`flex items-center text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
            <p className="text-sm text-gray-600 mt-1">{metric.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Assets</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentAssets.map((asset) => (
                <div key={asset.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{asset.name}</p>
                    <p className="text-sm text-gray-600">{asset.id} • {asset.location}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    asset.status === 'Operational' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {asset.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Work Orders</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentWorkOrders.map((wo) => (
                <div key={wo.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-medium text-gray-900">{wo.id}</p>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      wo.status === 'Overdue' ? 'bg-red-100 text-red-800' :
                      wo.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {wo.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{wo.description}</p>
                  <p className="text-xs text-gray-500">Asset: {wo.asset} • Due: {wo.dueDate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
