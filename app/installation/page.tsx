"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Check, X, Menu } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const locationOptions = [
  "HO", "ML", "NG", "MG", "DG", "HP", "KY", "7MP", "KG", 
  "NB 424", "NB 456", "BL", "DL", "RT", "RP", "WCP", 
  "KEG", "YPM", "KCC", "PD", "WT", "OGF", "TH", "CCC", "HCM",
  "JF", "GBN", "GFD", "KB", "ON", "DON"
];

const steps = [
  { id: "os", title: "Install OS", details: ["Windows 11 LTSC"] },
  { id: "admin", title: "Enable Admin User", details: ["Set a secure password"] },
  { id: "cashier", title: "Create Cashier User", details: ["Set a password for cashier account"] },
  { id: "activation", title: "Activate Windows OS", details: ["Perform Windows Update"] },
  { id: "copy", title: "Copy Software", details: ["Copy '\\\\nlm\\apps\\Basic Softwares\\POS' to `D:\\` drive"] },
  { id: "security", title: "Install Security Software", details: ["ESET Cloud with EDR"] },
  { id: "firewall", title: "Turn Off Firewall" },
  { id: "remote", title: "Enable Remote Access" },
  {
    id: "software",
    title: "Install Required Software",
    details: [
      "VNC",
      "WinRAR",
      "OPOS Printer Software",
      "POS for .NET 1.14",
      "SQL Server Express (2022) - SELECT CUSTOM ==> new == accept    ",
      "SQL Server Management Studio (SSMS)",
      "ANYDESK",
      "Chrome Browser",
      "Crystal Reports",
    ],
  },

  { id: "folders", title: "Create Folder Structure", details: ["`D:\\Sarasa\\Data`"] },
  { id: "pipes", title: "Enable Named Pipes ", 
    details: [
      "Search SQL",
      "SQL Server Configuration Manager ==> run as administrator",
      "in SQL Server Network Configuration, double click protocols for SQLEXPRESS",
      "on the protocols name Enable",
      "Named Pipes and TCP/IP for the SQL instance",
    ] 
  },


  { id: "openrowset", title: "Execute OPENROWSET Query", 
    details: [
      "Methods to enable OPENROWSET:",
      "1. Using SQL Server Management Studio (SSMS)",
      "2. Using T-SQL",
      "Login and run the required script",

    ] 
  },
  { id: "db", title: "Restore Relevant Database" },
  { id: "rename", title: "Rename Computer", details: ["Example: `SPOS1`"] },
  {
    id: "variables",
    title: "Create Environment Variables",
    details: [
      "`LocationID`",
      "`UnitNo`",
      "`Server` (same as PC name, e.g., SPOS1)",
      "`Key`",
    ],
  },
  {
    id: "service",
    title: "Install Current Sale Service",
    details: ["Startup Type: Automatic", "Recovery: Restart the service"],
  },
  { id: "sarasa", title: "Install Sarasa POS Software" },
  {
    id: "permissions",
    title: "Set Folder Permissions",
    details: [
      "`C:\\Program Files\\SarasaSoftSolution` for cashier user",
      "`D:\\` drive for cashier user",
    ],
  },
  { id: "auto-login", title: "Enable Auto Login", details: ["Run `netplwiz` and configure auto login for cashier user"] },
  { id: "sleep", title: "Disable Sleep Mode", details: ["Set Power Options → Never Sleep"] },
  { id: "ip", title: "Assign Static IP", details: ["Configure static IP for the relevant showroom"] },
];

export default function EnterpriseChecklistGuided() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [activeSubStep, setActiveSubStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [preInstallData, setPreInstallData] = useState({ purpose: '', location: '', unitNo: '' });
  const [showPreInstall, setShowPreInstall] = useState(true);
  const [verification, setVerification] = useState({ verifiedBy: '', confirmed: false, configuredBy: '', status: 'completed' as 'completed' | 'pending' });
  const [locationError, setLocationError] = useState(false);
  const [purposeError, setPurposeError] = useState(false);

  const handleClose = () => router.push("/");

  const totalSubSteps = steps.reduce((acc, step) => acc + (step.details?.length || 1), 0);
  const completedSubSteps = steps
    .slice(0, activeStep)
    .reduce((acc, step) => acc + (step.details?.length || 1), 0) + activeSubStep;

  const progressPercent = activeStep >= steps.length ? 100 : Math.min(Math.round((completedSubSteps / totalSubSteps) * 100), 100);

  const handleSubStepDone = () => {
    const stepDetailsLength = steps[activeStep].details?.length || 0;
    if (activeSubStep + 1 < stepDetailsLength) {
      setActiveSubStep(activeSubStep + 1);
    } else {
      setActiveSubStep(0);
      setActiveStep(activeStep + 1);
    }
  };

  const handleSubStepBack = () => {
    if (activeSubStep > 0) {
      setActiveSubStep(activeSubStep - 1);
    } else if (activeStep > 0) {
      const prevStepDetailsLength = steps[activeStep - 1].details?.length || 1;
      setActiveStep(activeStep - 1);
      setActiveSubStep(prevStepDetailsLength - 1);
    }
  };

  return (
    <div className={`${inter.className} bg-black text-white min-h-screen`}>
      {showPreInstall ? (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Pre-Installation Checklist</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Purpose</label>
                <select
                  value={preInstallData.purpose}
                  onChange={(e) => {
                    setPreInstallData({ ...preInstallData, purpose: e.target.value });
                    if (purposeError) setPurposeError(false); // Clear error when user selects
                  }}
                  className={`w-full px-3 py-2 bg-gray-800 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    purposeError ? 'border-red-500' : 'border-gray-600'
                  }`}
                >
                  <option value="">Select Purpose</option>
                  <option value="stock count">Stock Count</option>
                  <option value="showroom">Showroom</option>
                  <option value="magasale">Magasale</option>
                </select>
                {purposeError && (
                  <p className="text-red-400 text-sm mt-1">Please select a purpose</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <select
                  value={preInstallData.location}
                  onChange={(e) => {
                    setPreInstallData({ ...preInstallData, location: e.target.value });
                    if (locationError) setLocationError(false); // Clear error when user selects
                  }}
                  className={`w-full px-3 py-2 bg-gray-800 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    locationError ? 'border-red-500' : 'border-gray-600'
                  }`}
                >
                  <option value="">Select Location</option>
                  {locationOptions.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                {locationError && (
                  <p className="text-red-400 text-sm mt-1">Please select a location</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Unit No</label>
                <input
                  type="text"
                  value={preInstallData.unitNo}
                  onChange={(e) => setPreInstallData({ ...preInstallData, unitNo: e.target.value })}
                  placeholder="Enter unit number"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={() => {
                  // Validate all fields
                  const hasPurpose = preInstallData.purpose.trim() !== '';
                  const hasLocation = preInstallData.location.trim() !== '';
                  const hasUnitNo = preInstallData.unitNo.trim() !== '';
                  
                  // Set error states
                  setPurposeError(!hasPurpose);
                  setLocationError(!hasLocation);
                  
                  // Proceed only if all fields are valid
                  if (hasPurpose && hasLocation && hasUnitNo) {
                    setShowPreInstall(false);
                  }
                }}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition"
                disabled={!preInstallData.purpose || !preInstallData.location || !preInstallData.unitNo}
              >
                Start Installation
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Progress bar */}
          <div className="fixed top-0 left-0 w-full z-50">
            <div className="h-1 bg-gray-800">
              <div
                className="h-1 bg-blue-600 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Mobile top bar */}
          <div className="lg:hidden fixed top-4 left-0 w-full z-50 bg-gray-900 shadow-md flex justify-between items-center px-4 py-3">
            <span className="text-sm font-semibold">
              {activeStep >= steps.length ? "Installation Verification" : `Step ${activeStep + 1} of ${steps.length}: ${steps[activeStep]?.title}`}
            </span>
            <div className="flex items-center space-x-2">
              <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
              <button onClick={handleClose} className="p-1 rounded-md hover:bg-gray-700"><X size={24} /></button>
            </div>
          </div>

          {/* Mobile Sidebar Overlay */}
          {menuOpen && (
            <div className="fixed inset-0 z-40 bg-black bg-opacity-70 lg:hidden" onClick={() => setMenuOpen(false)}>
              <div className="absolute top-0 left-0 h-full w-64 bg-gray-900 p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-lg font-semibold mb-6">Steps</h2>
                <nav className="space-y-2 text-sm">
                  {steps.map((step, i) => (
                    <a key={step.id} href={`#${step.id}`} onClick={() => setMenuOpen(false)}
                      className={`block px-2 py-1 rounded-md transition ${activeStep === i && activeStep < steps.length ? "bg-blue-700 text-white font-medium" : "text-gray-300 hover:bg-gray-800"}`}>
                      {i < activeStep || activeStep >= steps.length ? <Check className="inline-block w-4 h-4 text-green-500 mr-1" /> : i + 1}. {step.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}

          {/* Desktop Close Button */}
          <div className="hidden lg:flex fixed top-4 right-4 z-50">
            <button onClick={handleClose} className="p-2 bg-gray-900 hover:bg-gray-800 rounded-md shadow-lg" aria-label="Close Installation Page">
              <X size={24} className="text-white" />
            </button>
          </div>

          {/* Layout */}
          <div className="flex max-w-7xl mx-auto px-4 pt-20 lg:pt-16">
            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col w-64 pr-6 sticky top-24 h-screen border-r border-gray-700">
              <h2 className="text-xs font-semibold text-gray-400 mb-4 uppercase">Steps</h2>
              <nav className="space-y-2 text-sm">
                {steps.map((step, i) => (
                  <div key={step.id} className="flex flex-col">
                    <a href={`#${step.id}`} className={`flex items-center px-2 py-1 rounded-md transition ${activeStep === i && activeStep < steps.length ? "bg-blue-700 text-white font-medium" : "text-gray-400 hover:bg-gray-800"}`}>
                      <span className="mr-2">{i < activeStep || activeStep >= steps.length ? <Check className="text-green-500 w-4 h-4" /> : i + 1}</span>
                      {step.title}
                    </a>
                    {step.details?.map((d, idx) => {
                      const locked = i > activeStep || (i === activeStep && idx > activeSubStep);
                      const done = i < activeStep || (i === activeStep && idx < activeSubStep) || activeStep >= steps.length;
                      return (
                        <span key={idx} className={`ml-6 block px-2 py-1 text-sm rounded-md transition ${locked && activeStep < steps.length ? "text-gray-600" : "text-gray-300 hover:bg-gray-800"}`}>
                          {done && <Check className="inline-block w-4 h-4 text-green-500 mr-1" />}
                          {d}
                        </span>
                      );
                    })}
                  </div>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 pl-0 lg:pl-8 pb-16">
              <h1 className="text-3xl font-bold mb-12 text-white">POS Installation Checklist</h1>
              <div className="mb-6 p-4 bg-gray-800 rounded-md">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Configuration Details</h3>
                <p className="text-gray-300"><strong>Purpose:</strong> {preInstallData.purpose}</p>
                <p className="text-gray-300"><strong>Location:</strong> {preInstallData.location}</p>
                <p className="text-gray-300"><strong>Unit No:</strong> {preInstallData.unitNo}</p>
              </div>
              <div className="space-y-8">
                {activeStep >= steps.length ? (
                  <section className="border-b border-gray-700 pb-6">
                    <h2 className="text-2xl font-bold text-blue-400 mb-4">Installation Verification</h2>
                    <div className="bg-gray-800 p-6 rounded-md">
                      <h3 className="text-lg font-semibold text-white mb-4">Cross-Check Verification</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Configured By</label>
                          <input
                            type="text"
                            value={verification.configuredBy}
                            onChange={(e) => setVerification({ ...verification, configuredBy: e.target.value })}
                            placeholder="Enter who configured this machine"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Verified By</label>
                          <input
                            type="text"
                            value={verification.verifiedBy}
                            onChange={(e) => setVerification({ ...verification, verifiedBy: e.target.value })}
                            placeholder="Enter verifier's name"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Installation Status</label>
                          <select
                            value={verification.status}
                            onChange={(e) => setVerification({ ...verification, status: e.target.value as 'completed' | 'pending' })}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                          </select>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="confirmed"
                            checked={verification.confirmed}
                            onChange={(e) => setVerification({ ...verification, confirmed: e.target.checked })}
                            className="mr-2"
                          />
                          <label htmlFor="confirmed" className="text-gray-300">I confirm that the installation was completed perfectly</label>
                        </div>
                        {verification.confirmed && verification.verifiedBy && verification.configuredBy && (
                          <div className="mt-4 p-4 bg-green-800 rounded-md">
                            <p className="text-green-200">Installation verified by {verification.verifiedBy} on {new Date().toLocaleDateString()}</p>
                          </div>
                        )}
                        <div className="mt-6 flex space-x-4">
                          <button
                            onClick={async () => {
                              if (!verification.confirmed || !verification.verifiedBy || !verification.configuredBy) {
                                alert('Please fill in all verification details and confirm the installation.');
                                return;
                              }

                              try {
                                // Save to database via API
                                const reportData = {
                                  purpose: preInstallData.purpose,
                                  location: preInstallData.location,
                                  unitNo: preInstallData.unitNo,
                                  configuredBy: verification.configuredBy,
                                  verifiedBy: verification.verifiedBy,
                                  verifiedDate: new Date().toISOString(),
                                  status: verification.status
                                };

                                const response = await fetch('/api/installation-reports', {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify(reportData),
                                });

                                if (!response.ok) {
                                  const errorData = await response.json();
                                  throw new Error(errorData.error || 'Failed to save report');
                                }

                                // Navigate to reports page
                                router.push('/reports');
                              } catch (error) {
                                console.error('Error saving report:', error);
                                alert('Failed to save installation report. Please try again.');
                              }
                            }}
                            className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md font-medium transition"
                          >
                            Submit & View Reports
                          </button>
                          <button
                            onClick={() => router.push('/reports')}
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition"
                          >
                            View Reports
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : (
                  steps.map((step, i) => {
                    if (i > activeStep) return null;
                    return (
                      <section key={step.id} id={step.id} className="border-b border-gray-700 pb-6">
                        <div className="flex flex-col">
                          <div className="flex items-center mb-2">
                            <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center font-semibold rounded-full mr-4 ${i < activeStep ? "bg-green-500 text-black" : "bg-blue-600 text-white"}`}>
                              {i < activeStep ? <Check className="w-5 h-5" /> : i + 1}
                            </div>
                            <h2 className="text-lg font-semibold text-blue-400">{step.title}</h2>
                          </div>

                          <ul className="list-disc list-inside text-gray-300 space-y-1">
                            {(step.details || ["Complete this step"]).map((d, idx) => {
                              const locked = i > activeStep || (i === activeStep && idx > activeSubStep);
                              const done = i < activeStep || (i === activeStep && idx < activeSubStep);

                              return (
                                <li key={idx} className="flex justify-between items-center">
                                  <span className={`${locked ? "text-gray-600" : "text-gray-300"}`}>
                                    {done && <Check className="inline-block w-4 h-4 text-green-500 mr-1" />}
                                    {d}
                                  </span>
                                  {!done && !locked && (
                                    <div className="flex space-x-2">
                                      <button onClick={handleSubStepDone} className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded-md text-sm">
                                        Done
                                      </button>
                                      <button onClick={handleSubStepBack} className="px-2 py-1 bg-gray-700 hover:bg-gray-800 rounded-md text-sm">
                                        Back
                                      </button>
                                    </div>
                                  )}
                                </li>
                              );
                            })}
                          </ul>

                        </div>
                      </section>
                    );
                  })
                )}
              </div>
            </main>
          </div>

        </>
      )}
    </div>
  );
}
