import { TrendingUp, TrendingDown, Activity, BarChart3 } from 'lucide-react';

export default function Analytics() {
  const performanceMetrics = [
    { metric: 'Production Efficiency', value: '92.5%', change: '+3.2%', trend: 'up' },
    { metric: 'Asset Utilization', value: '87.8%', change: '+1.5%', trend: 'up' },
    { metric: 'Downtime Hours', value: '124h', change: '-8.3%', trend: 'down' },
    { metric: 'Maintenance Response', value: '2.4h', change: '-12%', trend: 'down' }
  ];

  const productionTrends = [
    { month: 'Jul', production: 145000, target: 140000 },
    { month: 'Aug', production: 152000, target: 145000 },
    { month: 'Sep', production: 148000, target: 150000 },
    { month: 'Oct', production: 162000, target: 155000 },
    { month: 'Nov', production: 158000, target: 160000 },
    { month: 'Dec', production: 171000, target: 165000 }
  ];

  const assetPerformance = [
    { asset: 'RIG-001', efficiency: 95, utilization: 92, downtime: 18 },
    { asset: 'RIG-002', efficiency: 88, utilization: 85, downtime: 32 },
    { asset: 'RIG-008', efficiency: 93, utilization: 90, downtime: 22 },
    { asset: 'PL-045', efficiency: 91, utilization: 88, downtime: 15 },
    { asset: 'STG-012', efficiency: 85, utilization: 82, downtime: 45 }
  ];

  const predictedMaintenance = [
    { asset: 'RIG-001', component: 'Drilling System', probability: 'High', daysUntil: 15, confidence: 87 },
    { asset: 'RIG-002', component: 'Hydraulic Pump', probability: 'Medium', daysUntil: 28, confidence: 72 },
    { asset: 'PL-045', component: 'Valve Assembly', probability: 'Low', daysUntil: 45, confidence: 64 },
    { asset: 'STG-012', component: 'Pressure Sensor', probability: 'High', daysUntil: 12, confidence: 91 }
  ];

  const maxProduction = Math.max(...productionTrends.map(t => Math.max(t.production, t.target)));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h2>
        <p className="text-gray-600 mt-1">Performance insights and predictive analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric) => (
          <div key={metric.metric} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm text-gray-600 mb-2">{metric.metric}</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
              <span className={`flex items-center text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Production Trends</h3>
            <p className="text-sm text-gray-600 mt-1">Last 6 months performance</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {productionTrends.map((trend) => (
                <div key={trend.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{trend.month}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">
                        Actual: {trend.production.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">
                        Target: {trend.target.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
                      style={{ width: `${(trend.production / maxProduction) * 100}%` }}
                    />
                    <div
                      className="absolute top-0 left-0 h-full border-r-2 border-dashed border-gray-400"
                      style={{ width: `${(trend.target / maxProduction) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Asset Performance</h3>
            <p className="text-sm text-gray-600 mt-1">Top 5 assets by efficiency</p>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {assetPerformance.map((asset) => (
                <div key={asset.asset}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{asset.asset}</span>
                    <span className="text-xs text-gray-500">{asset.downtime}h downtime</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Efficiency</p>
                      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full rounded-full ${
                            asset.efficiency >= 90 ? 'bg-green-500' :
                            asset.efficiency >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${asset.efficiency}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-900 mt-1 font-medium">{asset.efficiency}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Utilization</p>
                      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full rounded-full ${
                            asset.utilization >= 90 ? 'bg-blue-500' :
                            asset.utilization >= 80 ? 'bg-cyan-500' : 'bg-gray-400'
                          }`}
                          style={{ width: `${asset.utilization}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-900 mt-1 font-medium">{asset.utilization}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Activity className="text-amber-600" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Predictive Maintenance</h3>
              <p className="text-sm text-gray-600">AI-powered maintenance forecasting</p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Failure Probability</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Est. Days Until Maintenance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {predictedMaintenance.map((pred, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pred.asset}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{pred.component}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      pred.probability === 'High' ? 'bg-red-100 text-red-800' :
                      pred.probability === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {pred.probability}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pred.daysUntil} days</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${pred.confidence}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{pred.confidence}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <BarChart3 className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Operational Assets</p>
              <p className="text-2xl font-bold text-gray-900">186</p>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">75% of total capacity</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <TrendingUp className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg Daily Output</p>
              <p className="text-2xl font-bold text-gray-900">15,650</p>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">barrels per day</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-50 rounded-lg">
              <Activity className="text-amber-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Critical Alerts</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">requiring immediate attention</p>
          </div>
        </div>
      </div>
    </div>
  );
}
