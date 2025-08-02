import "./Dashboard.css";
import React, { useState } from "react";
import {
  Search,
  Bell,
  Plus,
  Filter,
  MoreHorizontal,
  Download,
  Users,
  Phone,
  FileText,
  TrendingUp,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  User,
  CreditCard,
  LogOut,
  Home, // For the house icon
  Mail, // For the envelope icon
  Calendar, // For the calendar icon (assuming based on shape)
  FolderDot, // For the folder with dot (closest to folder with question mark without custom icon)
  Target, // For the target/bullseye icon
  HelpCircle, // For the help icon (assuming based on shape)
} from "lucide-react";

const LeadsDashboard = () => {
  const [isNewLeadModalOpen, setIsNewLeadModalOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample leads data (rest of your leads data remains the same)
  const leads = [
    {
      id: "#3066",
      customer: "Olivia Rhye",
      company: "Empire Mark",
      email: "rhye@empiremark.io",
      phone: "+1 (218) 699-3149",
      value: "$1,821.02",
      tags: "Important",
      source: "Facebook",
      status: "Customer",
      created: "Just now",
      avatar: "👩‍💼",
    },
    {
      id: "#3065",
      customer: "Phoenix Baker",
      company: "Wit Ventures",
      email: "baker@witventures.com",
      phone: "+1 (326) 507-6709",
      value: "$8,398.70",
      tags: "Follow up",
      source: "Facebook",
      status: "Qualified",
      created: "44 mins ago",
      avatar: "👨‍💼",
    },
    {
      id: "#3064",
      customer: "Lana Steiner",
      company: "Factor Four",
      email: "steiner@factorfour.com",
      phone: "+1 (208) 608-6292",
      value: "$5,266.94",
      tags: "Review",
      source: "LinkedIn",
      status: "Working",
      created: "3 hr ago",
      avatar: "👩‍💻",
    },
    {
      id: "#3063",
      customer: "Demi Wilkinson",
      company: "Market Square",
      email: "wilkinson@marketsq.com",
      phone: "+1 (317) 234-6462",
      value: "$2,968.95",
      tags: "Follow up",
      source: "Dribble",
      status: "Contacted",
      created: "7 hr ago",
      avatar: "👩",
    },
    {
      id: "#3062",
      customer: "Candice Wu",
      company: "Voice Firm",
      email: "candice@voicefirm.com",
      phone: "+1 (680) 539-0761",
      value: "$7,005.23",
      tags: "Review",
      source: "LinkedIn",
      status: "Qualified",
      created: "12 hr ago",
      avatar: "👩‍🔬",
    },
    {
      id: "#3061",
      customer: "Natali Craig",
      company: "Maxus Media",
      email: "natali@maxusmedia.net",
      phone: "+1 (540) 683-1441",
      value: "$2,595.82",
      tags: "Review",
      source: "UpWork",
      status: "Proposal Sent",
      created: "Yesterday",
      avatar: "👩‍🎨",
    },
  ];

  const stats = [
    { label: "New", value: "127", color: "stat-default" },
    { label: "Contacted", value: "705k", color: "stat-default" },
    { label: "Qualified", value: "249k", color: "stat-default" },
    { label: "Working", value: "57k", color: "stat-default" },
    { label: "Proposal Sent", value: "1.1k", color: "stat-default" },
    { label: "Customer", value: "3.7k", color: "stat-success" },
    { label: "Lost Leads", value: "5.2k", color: "stat-danger" },
  ];

  const getStatusColor = (status) => {
    const colors = {
      Customer: "status-customer",
      Qualified: "status-qualified",
      Working: "status-working",
      Contacted: "status-contacted",
      "Proposal Sent": "status-proposal",
    };
    return colors[status] || "status-default";
  };

  const getTagColor = (tag) => {
    const colors = {
      Important: "tag-important",
      "Follow up": "tag-followup",
      Review: "tag-review",
    };
    return colors[tag] || "tag-default";
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-circle"></div>
        </div>
        <nav className="sidebar-nav">
          {/* Main Navigation Items */}
          <div className="nav-item">
            <Home size={20} />
          </div>
          <div className="nav-item">
            <Users size={20} />
          </div>
          <div className="nav-item">
            <Mail size={20} />
          </div>
          <div className="nav-item active">
            <Phone size={20} />
          </div>
          <div className="nav-item">
            <FileText size={20} />
          </div>
          <div className="nav-item">
            <TrendingUp size={20} />
          </div>
          <div className="nav-item">
            <BarChart3 size={20} />
          </div>

          {/* New icons added here */}
          <div className="nav-item">
            <FolderDot size={20} />{" "}
            {/* Represents the folder with a dot/question mark */}
          </div>
          <div className="nav-item">
            <Target size={20} /> {/* Represents the target/bullseye icon */}
          </div>

          {/* Bottom aligned icons */}
          <div className="nav-item1">
            <HelpCircle size={20} />
          </div>
          <div className="nav-item">
            <Settings size={20} />
          </div>
        </nav>
      </div>

      {/* Main Content (rest of your component remains the same) */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="header-left">
              <div className="search-container">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input large"
                />
              </div>
            </div>

            <div className="header-right">
              <button className="notification-btn">
                <Bell size={20} />
                <div className="notification-dot"></div>
              </button>

              <div className="profile-container">
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  className="profile-btn"
                >
                  <div className="profile-avatar">PC</div>
                  <div className="profile-info">
                    <div className="profile-name">Pamela Cain</div>
                    <div className="profile-email">pamela@dyson.com</div>
                  </div>
                  <ChevronDown size={16} className="profile-chevron" />
                </button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="profile-dropdown">
                    <a href="#" className="dropdown-item">
                      <User size={16} />
                      Account
                    </a>
                    <a href="#" className="dropdown-item">
                      <CreditCard size={16} />
                      Billing
                    </a>
                    <a href="#" className="dropdown-item">
                      <Settings size={16} />
                      Settings
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <LogOut size={16} />
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Page Header */}
          <div className="page-header">
            <div className="page-title-section">
              <h1 className="page-title">Leads Management</h1>
              <p className="page-subtitle">
                Organize leads and track their progress effectively here
              </p>
            </div>

            <div className="page-actions">
              <button
                onClick={() => setIsNewLeadModalOpen(true)}
                className="btn btn-primary"
              >
                <Plus size={20} />
                <span>New Lead</span>
              </button>
              <button className="btn btn-secondary">
                <Download size={20} />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className={`stat-value ${stat.color}`}>{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Filters and Controls */}
          <div className="controls-section">
            <div className="controls-left">
              <button className="btn btn-outline">
                <Filter size={16} />
                <span>Filter</span>
              </button>
              <button className="btn btn-outline">
                <MoreHorizontal size={16} />
                <span>Bulk Actions</span>
              </button>
              <button className="btn btn-icon">
                <Grid3X3 size={16} />
              </button>
            </div>

            <div className="controls-right">
              <div className="search-container">
                <Search className="search-icon" size={16} />
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input small"
                />
              </div>
              <button className="btn btn-outline">
                <Grid3X3 size={16} />
                <span>View</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-container">
            <div className="table-wrapper">
              <table className="leads-table">
                <thead>
                  <tr>
                    <th className="checkbox-column">
                      <input type="checkbox" className="checkbox" />
                    </th>
                    <th>Lead ID</th>
                    <th>Customer</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Value</th>
                    <th>Tags</th>
                    <th>Source</th>
                    <th>Assigned</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr key={index} className="table-row">
                      <td>
                        <input type="checkbox" className="checkbox" />
                      </td>
                      <td className="lead-id">{lead.id}</td>
                      <td className="customer-name">{lead.customer}</td>
                      <td className="company-name">{lead.company}</td>
                      <td className="email-link">{lead.email}</td>
                      <td className="phone-number">{lead.phone}</td>
                      <td className="lead-value">{lead.value}</td>
                      <td>
                        <span className={`tag ${getTagColor(lead.tags)}`}>
                          {lead.tags}
                        </span>
                      </td>
                      <td className="source">{lead.source}</td>
                      <td>
                        <div className="avatar">{lead.avatar}</div>
                      </td>
                      <td>
                        <span
                          className={`status ${getStatusColor(lead.status)}`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="created-time">{lead.created}</td>
                      <td>
                        <button className="action-btn">
                          <MoreHorizontal size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button className="pagination-btn" disabled={currentPage === 1}>
                <ChevronLeft size={16} />
                <span>Previous</span>
              </button>

              <div className="page-numbers">
                {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
                  <button
                    key={index}
                    className={`page-btn ${
                      page === currentPage ? "active" : ""
                    }`}
                    onClick={() =>
                      typeof page === "number" && setCurrentPage(page)
                    }
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button className="pagination-btn">
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Lead Modal */}
      {isNewLeadModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">Add New Lead</h2>
              <button
                onClick={() => setIsNewLeadModalOpen(false)}
                className="modal-close"
              >
                ×
              </button>
            </div>

            <div className="modal-content">
              <div className="form-group">
                <label className="form-label">Customer Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter customer name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter company name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter email address"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Value</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter deal value"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Source</label>
                <select className="form-select">
                  <option>Select source</option>
                  <option>Facebook</option>
                  <option>LinkedIn</option>
                  <option>Google</option>
                  <option>Referral</option>
                </select>
              </div>

              <div className="modal-actions">
                <button
                  onClick={() => setIsNewLeadModalOpen(false)}
                  className="btn btn-primary modal-btn"
                >
                  Create Lead
                </button>
                <button
                  onClick={() => setIsNewLeadModalOpen(false)}
                  className="btn btn-secondary modal-btn"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsDashboard;
