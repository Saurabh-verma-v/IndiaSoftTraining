import { useEffect, useState } from "react";
import API from "../../services/api";

const emptyForm = {
  websiteName: "",
  logo: "",
  favicon: "",
  email: "",
  phone: "",
  alternatePhone: "",
  address: "",
  socialLinks: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    twitter: "",
  },
  footerDescription: "",
  copyrightText: "",
};

export default function AdminSettings() {
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // GET: Load existing website settings
  const fetchSettings = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("/settings");
      const settings = response.data.data;

      if (settings) {
        setForm({
          ...emptyForm,
          ...settings,
          socialLinks: {
            ...emptyForm.socialLinks,
            ...(settings.socialLinks || {}),
          },
        });
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load website settings."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  // Handle regular input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Handle social link changes
  const handleSocialChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      socialLinks: {
        ...previous.socialLinks,
        [name]: value,
      },
    }));
  };

  // PUT: Save website settings
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const payload = {
        websiteName: form.websiteName,
        logo: form.logo,
        favicon: form.favicon,
        email: form.email,
        phone: form.phone,
        alternatePhone: form.alternatePhone,
        address: form.address,
        socialLinks: form.socialLinks,
        footerDescription: form.footerDescription,
        copyrightText: form.copyrightText,
      };

      await API.put("/settings", payload);

      setSuccess("Website settings saved successfully.");
      await fetchSettings();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to save website settings."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-xl bg-white p-10 text-center text-gray-500 shadow-sm">
        Loading website settings...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Website Settings
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your institute's website information and contact details.
        </p>
      </div>

      {/* Feedback messages */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {success && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* General settings */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-gray-800">
            General Information
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Institute Name *
              </label>

              <input
                name="websiteName"
                value={form.websiteName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="IndiaSoftTraining"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Logo URL
              </label>

              <input
                name="logo"
                type="url"
                value={form.logo}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="https://example.com/logo.png"
              />
            </div>

            <div className="sm:col-span-2">
              {form.logo && (
                <div>
                  <p className="mb-2 text-sm text-gray-500">
                    Logo Preview
                  </p>

                  <img
                    src={form.logo}
                    alt="Institute logo preview"
                    className="max-h-24 max-w-56 rounded-lg border border-gray-200 p-2 object-contain"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Favicon URL
              </label>

              <input
                name="favicon"
                type="url"
                value={form.favicon}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="https://example.com/favicon.ico"
              />
            </div>
          </div>
        </section>

        {/* Contact information */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-gray-800">
            Contact Information
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="info@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Primary Phone
              </label>

              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Alternate Phone
              </label>

              <input
                name="alternatePhone"
                type="tel"
                value={form.alternatePhone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Alternate contact number"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Address
              </label>

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Institute address"
              />
            </div>
          </div>
        </section>

        {/* Social media */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            Social Media Links
          </h2>

          <p className="mb-5 text-sm text-gray-500">
            Enter the full URL for each social media profile.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {Object.entries(form.socialLinks).map(([platform, value]) => (
              <div key={platform}>
                <label className="mb-2 block text-sm font-medium capitalize text-gray-700">
                  {platform}
                </label>

                <input
                  name={platform}
                  type="url"
                  value={value || ""}
                  onChange={handleSocialChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  placeholder={`https://${platform}.com/...`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer settings */}
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold text-gray-800">
            Footer Settings
          </h2>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Footer Description
              </label>

              <textarea
                name="footerDescription"
                value={form.footerDescription}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="Short description about your institute..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Copyright Text
              </label>

              <input
                name="copyrightText"
                value={form.copyrightText}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                placeholder="© 2026 IndiaSoftTraining. All rights reserved."
              />
            </div>
          </div>
        </section>

        {/* Save button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? "Saving Settings..." : "Save Website Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}