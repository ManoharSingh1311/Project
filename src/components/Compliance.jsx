import { useState } from 'react';
import { Plus, Download, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function Compliance() {
  const [showAddForm, setShowAddForm] = useState(false);

  const complianceReports = [
    {
      id: 'CR-2024-001',
      assetId: 'RIG-001',
      assetName: 'North Sea Rig Alpha',
      reportType: 'Environmental Compliance',
      safetyScore: 95,
      complianceStatus: 'Compliant',
      generatedDate: '2024-01-10',
      nextAudit: '2024-04-10',
      inspector: 'Environmental Agency'
    },
    {
      id: 'CR-2024-002',
      assetId: 'RIG-002',
      assetName: 'West Texas Rig Beta',
      reportType: 'Safety Inspection',
      safetyScore: 88,
      complianceStatus: 'Compliant',
      generatedDate: '2024-01-08',
      nextAudit: '2024-04-08',
      inspector: 'OSHA'
    },
    {
      id: 'CR-2024-003',
      assetId: 'PL-045',
      assetName: 'Pipeline Delta-7',
      reportType: 'Integrity Assessment',
      safetyScore: 92,
      complianceStatus: 'Compliant',
      generatedDate: '2024-01-12',
      nextAudit: '2024-07-12',
      inspector: 'Pipeline Safety Board'
    },
    {
      id: 'CR-2024-004',
      assetId: 'STG-012',
      assetName: 'Storage Facility B',
      reportType: 'Fire Safety Compliance',
      safetyScore: 78,
      complianceStatus: 'Pending Review',
      generatedDate: '2024-01-11',
      nextAudit: '2024-02-11',
      inspector: 'Fire Marshal'
    },
    {
      id: 'CR-2024-005',
      assetId: 'RIG-008',
      assetName: 'Gulf Platform Echo',
      reportType: 'Environmental Compliance',
      safetyScore: 97,
      complianceStatus: 'Compliant',
      generatedDate: '2024-01-09',
      nextAudit: '2024-04-09',
      inspector: 'EPA'
    }
  ];

  const auditTrail = [
    { date: '2024-01-14 10:30', user: 'Jane Smith', action: 'Generated Compliance Report', details: 'CR-2024-005 for RIG-008' },
    { date: '2024-01-13 14:15', user: 'Mike Johnson', action: 'Submitted Audit Document', details: 'Environmental assessment for PL-045' },
    { date: '2024-01-12 09:00', user: 'Sarah Connor', action: 'Updated Safety Score', details: 'CR-2024-003 - Score updated to 92' },
    { date: '2024-01-11 16:45', user: 'Robert Lee', action: 'Exported Report', details: 'Downloaded CR-2024-002 for regulatory submission' }
  ];

  const getComplianceColor = (status) => {
    switch (status) {
      case 'Compliant':
        return 'bg-green-100 text-green-800';
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Non-Compliant':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSafetyScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Compliance & Safety Reporting</h2>
          <p className="text-gray-600 mt-1">Monitor regulatory compliance and safety standards</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
        >
          <Plus size={20} />
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Overall Compliance</p>
            <CheckCircle className="text-green-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-gray-900">94%</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Avg Safety Score</p>
            <FileText className="text-blue-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-gray-900">90</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Pending Reviews</p>
            <AlertCircle className="text-amber-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-gray-900">2</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Upcoming Audits</p>
            <FileText className="text-slate-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-gray-900">5</p>
        </div>
      </div>

      {showAddForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Generate Compliance Report</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report ID</label>
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                <option value="">Select Type</option>
                <option value="Environmental Compliance">Environmental Compliance</option>
                <option value="Safety Inspection">Safety Inspection</option>
                <option value="Integrity Assessment">Integrity Assessment</option>
                <option value="Fire Safety Compliance">Fire Safety Compliance</option>
                <option value="Operational Safety">Operational Safety</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Inspector/Agency</label>
              <input
                type="text"
                placeholder="e.g., OSHA, EPA"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Safety Score</label>
              <input
                type="number"
                min="0"
                max="100"
                placeholder="0-100"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Compliance Status</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent">
                <option value="Compliant">Compliant</option>
                <option value="Pending Review">Pending Review</option>
                <option value="Non-Compliant">Non-Compliant</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Next Audit Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
              Generate Report
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
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Compliance Reports</h3>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download size={16} />
            Export All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Safety Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Audit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {complianceReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{report.assetName}</p>
                      <p className="text-xs text-gray-500">{report.assetId}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{report.reportType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-lg font-bold ${getSafetyScoreColor(report.safetyScore)}`}>
                      {report.safetyScore}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getComplianceColor(report.complianceStatus)}`}>
                      {report.complianceStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{report.generatedDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{report.nextAudit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      <Download size={16} className="inline" /> Export
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Audit Trail</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {auditTrail.map((entry, index) => (
              <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white text-sm font-medium">
                    {entry.user.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-gray-900">{entry.action}</p>
                    <p className="text-xs text-gray-500">{entry.date}</p>
                  </div>
                  <p className="text-sm text-gray-600">{entry.details}</p>
                  <p className="text-xs text-gray-500 mt-1">by {entry.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
