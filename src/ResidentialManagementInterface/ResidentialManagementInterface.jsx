import React, { useState } from "react";
import { FaHome, FaTools, FaCalendarAlt, FaBullhorn, FaMoneyBillWave, FaChartBar, FaUserAlt, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";


const ResidentialManagementInterface = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaChartBar /> },
    { id: "units", label: "Units", icon: <FaHome /> },
    { id: "maintenance", label: "Maintenance", icon: <FaTools /> },
    { id: "events", label: "Events", icon: <FaCalendarAlt /> },
    { id: "announcements", label: "Announcements", icon: <FaBullhorn /> },
    { id: "financial", label: "Financial", icon: <FaMoneyBillWave /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      case "units":
        return <UnitManagementContent />;
      case "maintenance":
        return <MaintenanceRequestContent />;
      case "events":
        return <EventCalendarContent />;
      case "announcements":
        return <AnnouncementBoardContent />;
      case "financial":
        return <FinancialManagementContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:flex-shrink-0 md:w-64 bg-white shadow-lg">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center h-16 bg-indigo-600">
            <span className="text-white font-semibold text-lg">Residential Management</span>
          </div>
          <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`${
                  activeTab === item.id
                    ? "bg-indigo-100 text-indigo-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              >
                <span className="mr-3 h-6 w-6">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="bg-indigo-600 px-4 py-2 flex items-center justify-between">
          <span className="text-white font-semibold">Residential Management</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            <IoMdArrowDropdown className={`h-6 w-6 transform ${isMobileMenuOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="bg-white shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`${
                  activeTab === item.id
                    ? "bg-indigo-100 text-indigo-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                } group flex items-center px-4 py-2 text-base font-medium w-full focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              >
                <span className="mr-3 h-6 w-6">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto p-5">
        <div className="max-w-7xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

const DashboardContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <DashboardCard title="Total Units" value="120" icon={<FaHome className="h-6 w-6 text-indigo-600" />} />
      <DashboardCard title="Occupancy Rate" value="85%" icon={<FaUserAlt className="h-6 w-6 text-green-600" />} />
      <DashboardCard title="Maintenance Requests" value="8" icon={<FaTools className="h-6 w-6 text-yellow-600" />} />
      <DashboardCard title="Upcoming Events" value="3" icon={<FaCalendarAlt className="h-6 w-6 text-red-600" />} />
    </div>
    {/* Add more dashboard content here */}
  </div>
);

const DashboardCard = ({ title, value, icon }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="text-3xl font-semibold text-gray-900">{value}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
);

const UnitManagementContent = () => {
  // Mock data for units
  const units = [
    { unit: "101", tenant: "John Doe", rent: 1200, status: "Occupied" },
    { unit: "201", tenant: "Jane Doe", rent: 1300, status: "Occupied" },
    { unit: "301", tenant: "Sam Smith", rent: 1100, status: "Occupied" },
    { unit: "101", tenant: "John Doe", rent: 1200, status: "Occupied" },
    { unit: "201", tenant: "Jane Doe", rent: 1300, status: "Occupied" },
    { unit: "301", tenant: "Sam Smith", rent: 1100, status: "Occupied" },
    { unit: "101", tenant: "John Doe", rent: 1200, status: "Occupied" },
    { unit: "201", tenant: "Jane Doe", rent: 1300, status: "Occupied" },
    { unit: "301", tenant: "Sam Smith", rent: 1100, status: "Occupied" },
    { unit: "101", tenant: "John Doe", rent: 1200, status: "Occupied" },
    { unit: "201", tenant: "Jane Doe", rent: 1300, status: "Occupied" },
    { unit: "301", tenant: "Sam Smith", rent: 1100, status: "Occupied" },
    // Add more unit data here
  ];

  const [sortField, setSortField] = useState("unit");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const unitsPerPage = 5;

  // Function to handle sorting
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Function to handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Sorting logic
  const sortedUnits = [...units].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];
    if (sortDirection === "asc") {
      return fieldA > fieldB ? 1 : -1;
    } else {
      return fieldA < fieldB ? 1 : -1;
    }
  });

  // Pagination logic
  const indexOfLastUnit = currentPage * unitsPerPage;
  const indexOfFirstUnit = indexOfLastUnit - unitsPerPage;
  const currentUnits = sortedUnits.slice(indexOfFirstUnit, indexOfLastUnit);
  const totalPages = Math.ceil(units.length / unitsPerPage);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-900">Residential Unit Management</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Unit List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search units..."
              className="border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button
                className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
                onClick={() => handleSort("unit")}
              >
                Unit {sortField === "unit" && (sortDirection === "asc" ? "↑" : "↓")}
              </button>
              <button
                className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
                onClick={() => handleSort("tenant")}
              >
                Tenant {sortField === "tenant" && (sortDirection === "asc" ? "↑" : "↓")}
              </button>
              <button
                className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
                onClick={() => handleSort("rent")}
              >
                Rent {sortField === "rent" && (sortDirection === "asc" ? "↑" : "↓")}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {currentUnits.map((unit, index) => (
              <li key={index} className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-indigo-600 truncate">
                    Unit {unit.unit}
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {unit.status}
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <FaUserAlt className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      {unit.tenant}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <FaMoneyBillWave className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    <p>Rent: ${unit.rent}/month</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Pagination Controls */}
        <div className="px-4 py-3 bg-gray-50 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{indexOfFirstUnit + 1}</span> to{" "}
                <span className="font-medium">{Math.min(indexOfLastUnit, units.length)}</span> of{" "}
                <span className="font-medium">{units.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`${
                      currentPage === index + 1
                        ? "bg-indigo-600 text-white"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                    } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MaintenanceRequestContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-semibold text-gray-900">Maintenance Requests</h1>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Active Requests</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          New Request
        </button>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {[1, 2, 3].map((request) => (
            <li key={request} className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-indigo-600 truncate">Request #{request}001</div>
                <div className="ml-2 flex-shrink-0 flex">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    In Progress
                  </span>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    <FaTools className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    Plumbing Issue
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <FaCalendarAlt className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                  <p>Submitted: May 15, 2023</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const EventCalendarContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-semibold text-gray-900">Event Calendar</h1>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        {/* Calendar component would go here */}
        <div className="text-center py-10 text-gray-500">
          Interactive calendar component to be implemented
        </div>
      </div>
    </div>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Upcoming Events</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {[1, 2, 3].map((event) => (
          <li key={event} className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-indigo-600">Community Meeting #{event}</div>
              <div className="ml-2 text-sm text-gray-500">June {event + 14}, 2023</div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Discussion on upcoming renovations and community improvements
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const AnnouncementBoardContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-semibold text-gray-900">Announcement Board</h1>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Announcements</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Post Announcement
        </button>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {[1, 2, 3].map((announcement) => (
            <li key={announcement} className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-indigo-600">Important Notice #{announcement}</div>
                <div className="ml-2 text-sm text-gray-500">Posted: May {15 + announcement}, 2023</div>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {announcement === 1
                  ? "Scheduled maintenance for the elevator on June 1st"
                  : announcement === 2
                  ? "New recycling program starting next month"
                  : "Annual residents' meeting on June 15th"}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const FinancialManagementContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-semibold text-gray-900">Financial Management</h1>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Financial Overview</h2>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Total Revenue (YTD)</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">$245,000</dd>
          </div>
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Outstanding Payments</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">$12,500</dd>
          </div>
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Maintenance Expenses (YTD)</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">$78,000</dd>
          </div>
        </dl>
      </div>
    </div>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Recent Transactions</h2>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {[1, 2, 3].map((transaction) => (
            <li key={transaction} className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-900">Transaction #{transaction}001</div>
                <div className="ml-2 text-sm text-gray-500">May {20 + transaction}, 2023</div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    {transaction === 1
                      ? "Rent Payment - Unit 101"
                      : transaction === 2
                      ? "Maintenance Fee - Plumbing Repair"
                      : "Utility Payment - Electricity"}
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                  <p className={transaction === 2 ? "text-red-600" : "text-green-600"}>
                    {transaction === 1 ? "+$1,200" : transaction === 2 ? "-$350" : "+$180"}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ResidentialManagementInterface;