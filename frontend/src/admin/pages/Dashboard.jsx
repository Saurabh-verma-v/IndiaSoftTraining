import { useEffect, useState } from "react";
import {
  BookOpen,
  Layers,
  MessageSquare,
  Users,
  Star,
  Trophy,
  RefreshCw,
  AlertCircle,
} from "lucide-react";

import API from "../../services/api";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("/dashboard/");

      if (response.data.success) {
        setStats(response.data.data);
      } else {
        setError("Unable to load dashboard data.");
      }
    } catch (err) {
      console.error(
        "Dashboard API error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
          "Failed to load dashboard data. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const dashboardCards = [
    {
      title: "Total Courses",
      key: "totalCourses",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Categories",
      key: "totalCategories",
      icon: Layers,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Total Enquiries",
      key: "totalEnquiries",
      icon: MessageSquare,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "New Enquiries",
      key: "newEnquiries",
      icon: AlertCircle,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Trainer Applications",
      key: "totalTrainerApplications",
      icon: Users,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Testimonials",
      key: "totalTestimonials",
      icon: Star,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Success Stories",
      key: "totalSuccessStories",
      icon: Trophy,
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-5 md:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Welcome to IndiaSoftTraining administration.
          </p>
        </div>

        <button
          onClick={fetchDashboardData}
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <RefreshCw
            size={18}
            className={loading ? "animate-spin" : ""}
          />
          Refresh Data
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="rounded-xl bg-white p-10 text-center shadow-sm">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-red-600 border-t-transparent" />

          <p className="mt-4 text-gray-500">
            Loading dashboard data...
          </p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="font-medium text-red-700">{error}</p>

          <button
            onClick={fetchDashboardData}
            className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Dashboard Cards */}
      {!loading && !error && stats && (
        <>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.key}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {card.title}
                      </p>

                      <h2 className="mt-3 text-3xl font-bold text-gray-800">
                        {stats[card.key] ?? 0}
                      </h2>
                    </div>

                    <div className={`rounded-xl p-3 ${card.color}`}>
                      <Icon size={24} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Section */}
          <div className="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">
              Website Overview
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Manage your training programs, course categories, student
              enquiries, trainer applications, testimonials, and success
              stories from your administration panel.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;