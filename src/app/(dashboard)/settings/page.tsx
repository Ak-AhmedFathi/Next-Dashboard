"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@radix-ui/react-label";
import { Bell, User, Shield, Settings } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  role: z.enum(["Admin", "Teacher", "Parent", "Student"]),
  notifications: z.boolean().default(true),
});

type FormData = z.infer<typeof schema>;

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      role: "Student",
      notifications: true,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Saved Settings:", data);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 sm:p-6 lg:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 animate__animated animate__fadeIn">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

        {/* Tabs */}
        <div className="flex gap-3 border-b border-gray-200 mb-6 overflow-x-auto">
          {[
            { id: "profile", label: "Profile", icon: <User size={18} /> },
            { id: "account", label: "Account", icon: <Shield size={18} /> },
            { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
            { id: "preferences", label: "Preferences", icon: <Settings size={18} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-md transition ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 animate__animated animate__fadeInUp"
        >
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label className="text-sm font-medium text-gray-700">Full Name</Label>
                <input
                  {...register("fullName")}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
              </div>
              <div>
                <Label className="text-sm font-medium text-gray-700">Email</Label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="example@email.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <Label className="text-sm font-medium text-gray-700">Role</Label>
                <select
                  {...register("role")}
                  className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-1"
                >
                  <option value="Admin">Admin</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Parent">Parent</option>
                  <option value="Student">Student</option>
                </select>
              </div>
            </div>
          )}

          {/* Account Tab */}
          {activeTab === "account" && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Password</Label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <Label>Confirm Password</Label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  {...register("notifications")}
                  className="h-4 w-4"
                />
                <span className="text-sm text-gray-700">Enable Email Notifications</span>
              </label>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === "preferences" && (
            <div className="grid gap-4">
              <div>
                <Label>Theme</Label>
                <select className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-1">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
            </div>
          )}

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl px-6 py-2 transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
