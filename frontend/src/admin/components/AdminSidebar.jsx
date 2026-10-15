import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Layers,
  MessageSquare,
  Users,
  Star,
  Trophy,
  BriefcaseBusiness,
  Settings,
  X,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Courses",
    path: "/admin/courses",
    icon: BookOpen,
  },
  {
    name: "Categories",
    path: "/admin/categories",
    icon: Layers,
  },
  {
    name: "Enquiries",
    path: "/admin/enquiries",
    icon: MessageSquare,
  },
  {
    name: "Trainer Applications",
    path: "/admin/trainer-applications",
    icon: Users,
  },
  {
    name: "Testimonials",
    path: "/admin/testimonials",
    icon: Star,
  },
  {
    name: "Success Stories",
    path: "/admin/success-stories",
    icon: Trophy,
  },
  {
    name: "Training Services",
    path: "/admin/training-services",
    icon: BriefcaseBusiness,
  },
  {
    name: "Website Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

const AdminSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-gray-900 text-white transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <div>
            <h2 className="text-xl font-bold">
              IndiaSoft<span className="text-red-400">Training</span>
            </h2>
            <p className="mt-1 text-xs text-gray-400">Administration Panel</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-white/10 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-red-600 text-white"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-4">
          <p className="text-xs text-gray-400">
            IndiaSoftTraining Admin
          </p>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;