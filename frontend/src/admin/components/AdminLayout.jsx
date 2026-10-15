import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const pageTitles = {
  "/admin/dashboard": "Dashboard",
  "/admin/courses": "Courses",
  "/admin/categories": "Categories",
  "/admin/enquiries": "Enquiries",
  "/admin/trainer-applications": "Trainer Applications",
  "/admin/testimonials": "Testimonials",
  "/admin/success-stories": "Success Stories",
  "/admin/training-services": "Training Services",
  "/admin/settings": "Website Settings",
};

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitle = pageTitles[location.pathname] || "Admin Panel";

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="min-h-screen lg:pl-72">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-5 md:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu size={23} />
            </button>

            <div>
              <h1 className="text-xl font-bold text-gray-800">
                {pageTitle}
              </h1>
              <p className="hidden text-xs text-gray-500 sm:block">
                Manage your institute website
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <LogOut size={17} />
            <span>Logout</span>
          </button>
        </header>

        {/* Current admin page */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;