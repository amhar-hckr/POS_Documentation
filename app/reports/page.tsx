"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { DocumentationLayout } from "../../components/layout/documentation-layout";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { CheckCircle, X, Calendar, MapPin, Settings, User, Clock } from "lucide-react";

interface InstallationReport {
  id: string;
  purpose: string;
  location: string;
  unitNo: string;
  configuredBy: string;
  verifiedBy: string;
  verifiedDate: string;
  status: 'completed' | 'pending';
}

export default function ReportsPage() {
  const router = useRouter();
  const [reports, setReports] = useState<InstallationReport[]>([]);
  const [userFilter, setUserFilter] = useState<string>('');
  const [dateFrom, setDateFrom] = useState<string>('');
  const [dateTo, setDateTo] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get filtered reports based on user selection and date range
  const filteredReports = reports.filter(report => {
    // User filter
    const userMatch = !userFilter || report.configuredBy === userFilter;
    
    // Date filter
    let dateMatch = true;
    if (dateFrom || dateTo) {
      const reportDate = new Date(report.verifiedDate);
      
      if (dateFrom) {
        const fromDate = new Date(dateFrom);
        dateMatch = dateMatch && reportDate >= fromDate;
      }
      
      if (dateTo) {
        const toDate = new Date(dateTo);
        // Set to end of day for inclusive filtering
        toDate.setHours(23, 59, 59, 999);
        dateMatch = dateMatch && reportDate <= toDate;
      }
    }
    
    return userMatch && dateMatch;
  });

  // Get unique users for filter dropdown (filter out empty/undefined values)
  const [uniqueUsers, setUniqueUsers] = useState<string[]>([]);

  // Fetch reports from API
  const fetchReports = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (userFilter) params.append('user', userFilter);
      if (dateFrom) params.append('dateFrom', dateFrom);
      if (dateTo) params.append('dateTo', dateTo);

      const response = await fetch(`/api/installation-reports?${params.toString()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch reports');
      }

      const data = await response.json();
      setReports(data);
    } catch (err) {
      console.error('Error fetching reports:', err);
      setError(err instanceof Error ? err.message : 'Failed to load reports');
    } finally {
      setLoading(false);
    }
  }, [userFilter, dateFrom, dateTo]);

  // Fetch unique users for filter dropdown
  const fetchUniqueUsers = async () => {
    try {
      const response = await fetch('/api/installation-reports/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const users = await response.json();
      setUniqueUsers(users);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  // Clear date filters
  const clearDateFilters = () => {
    setDateFrom('');
    setDateTo('');
  };

  // Load data on component mount and when filters change
  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  useEffect(() => {
    fetchUniqueUsers();
  }, []);

  const handleClose = () => router.push("/");

  const getPurposeColor = (purpose: string) => {
    switch (purpose) {
      case 'stock count': return 'bg-blue-600';
      case 'showroom': return 'bg-green-600';
      case 'magasale': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  const getPurposeLabel = (purpose: string) => {
    switch (purpose) {
      case 'stock count': return 'Stock Count';
      case 'showroom': return 'Showroom';
      case 'magasale': return 'Magasale';
      default: return purpose;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-600';
      case 'pending': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-3 w-3 mr-1" />;
      case 'pending': return <Clock className="h-3 w-3 mr-1" />;
      default: return <CheckCircle className="h-3 w-3 mr-1" />;
    }
  };

  return (
    <DocumentationLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Configuration Reports</h1>
            <p className="text-gray-300">Detailed view of all POS machine configurations and installations</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-md shadow-lg"
            aria-label="Close Reports Page"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Filter Section */}
        <div className="mb-8 space-y-6">
          {/* User Filter */}
          <Card className="bg-slate-800 border-blue-900">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Filter by Configurator</h3>
                  <p className="text-gray-300 text-sm">View configurations by specific team member</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <select
                    value={userFilter}
                    onChange={(e) => setUserFilter(e.target.value)}
                    className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
                  >
                    <option value="">All Configurators</option>
                    {uniqueUsers.map(user => (
                      <option key={user} value={user}>{user}</option>
                    ))}
                  </select>
                  {userFilter && (
                    <button
                      onClick={() => setUserFilter('')}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-md text-white transition whitespace-nowrap"
                    >
                      Clear Filter
                    </button>
                  )}
                </div>
              </div>
              {userFilter && (
                <div className="mt-4 p-3 bg-blue-900/30 rounded-md border border-blue-700">
                  <p className="text-blue-200">
                    <span className="font-semibold">{userFilter}</span> has configured{' '}
                    <span className="font-bold text-blue-400">{filteredReports.length}</span> POS machine(s)
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Date Filter */}
          <Card className="bg-slate-800 border-green-900">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Filter by Date Range</h3>
                  <p className="text-gray-300 text-sm">View configurations within specific date range</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-400 mb-1">From Date</label>
                    <input
                      type="date"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-400 mb-1">To Date</label>
                    <input
                      type="date"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                      className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  {(dateFrom || dateTo) && (
                    <button
                      onClick={clearDateFilters}
                      className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-md text-white transition whitespace-nowrap self-end"
                    >
                      Clear Dates
                    </button>
                  )}
                </div>
              </div>
              {(dateFrom || dateTo) && (
                <div className="mt-4 p-3 bg-green-900/30 rounded-md border border-green-700">
                  <p className="text-green-200">
                    Showing reports {dateFrom && `from ${new Date(dateFrom).toLocaleDateString()}`} 
                    {dateFrom && dateTo && ' '} 
                    {dateTo && `to ${new Date(dateTo).toLocaleDateString()}`}
                    {' '}({filteredReports.length} total)
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="bg-slate-800 border-blue-900">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Settings className="h-8 w-8 text-blue-400 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-white">{filteredReports.length}</p>
                  <p className="text-gray-300 text-sm">Total Configurations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-green-900">
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-400 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-white">
                    {filteredReports.filter(r => r.status === 'completed').length}
                  </p>
                  <p className="text-gray-300 text-sm">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-yellow-900">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-yellow-400 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-white">
                    {filteredReports.filter(r => r.status === 'pending').length}
                  </p>
                  <p className="text-gray-300 text-sm">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-purple-900">
            <CardContent className="p-6">
              <div className="flex items-center">
                <MapPin className="h-8 w-8 text-purple-400 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-white">
                    {new Set(filteredReports.map(r => r.location)).size}
                  </p>
                  <p className="text-gray-300 text-sm">Locations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-orange-900">
            <CardContent className="p-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-orange-400 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-white">
                    {new Set([...filteredReports.map(r => r.configuredBy), ...filteredReports.map(r => r.verifiedBy)]).size}
                  </p>
                  <p className="text-gray-300 text-sm">Team Members</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports Table */}
        <Card className="bg-slate-800 border-blue-900">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-blue-400">Installation Reports</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="text-center py-8">
                <div className="text-red-400 mb-2">Error loading reports</div>
                <p className="text-gray-400 text-sm">{error}</p>
                <button
                  onClick={fetchReports}
                  className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition"
                >
                  Try Again
                </button>
              </div>
            )}

            {loading && !error && (
              <div className="text-center py-8">
                <div className="text-gray-400">Loading reports...</div>
              </div>
            )}

            {!loading && !error && (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-300">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left">Unit No</th>
                        <th className="px-6 py-3 text-left">Purpose</th>
                        <th className="px-6 py-3 text-left">Location</th>
                        <th className="px-6 py-3 text-left">Configured By</th>
                        <th className="px-6 py-3 text-left">Verified By</th>
                        <th className="px-6 py-3 text-left">Date</th>
                        <th className="px-6 py-3 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {filteredReports.map((report) => (
                        <tr key={report.id} className="hover:bg-gray-700">
                          <td className="px-6 py-4 font-medium text-white">{report.unitNo}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPurposeColor(report.purpose)} text-white`}>
                              {getPurposeLabel(report.purpose)}
                            </span>
                          </td>
                          <td className="px-6 py-4">{report.location}</td>
                          <td className="px-6 py-4">{report.configuredBy}</td>
                          <td className="px-6 py-4">{report.verifiedBy}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                              {new Date(report.verifiedDate).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)} text-white`}>
                              {getStatusIcon(report.status)}
                              {report.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredReports.length === 0 && (
                  <div className="text-center py-12">
                    <Settings className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-300 mb-2">
                      {userFilter || dateFrom || dateTo ? 'No Configurations Found' : 'No Reports Yet'}
                    </h3>
                    <p className="text-gray-400">
                      {userFilter || dateFrom || dateTo ? (
                        <>
                          No configurations found with the selected filters.
                          {userFilter && ` User: ${userFilter}`}
                          {(dateFrom || dateTo) && ` Date range: ${dateFrom || 'any'} to ${dateTo || 'any'}`}
                          {' '}Try adjusting your filters.
                        </>
                      ) : (
                        'Installation reports will appear here once configurations are completed and submitted.'
                      )}
                    </p>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </DocumentationLayout>
  );
}