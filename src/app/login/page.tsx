"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, User, Lock, GraduationCap } from "lucide-react";
import Link from 'next/link';

// ✅ Validation schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["Admin", "Teacher", "Student", "Parent"]),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { role: "Admin" },
  });

  const onSubmit = (data: LoginForm) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-indigo-100">
        {/* Logo + School Name */}
        <div className="flex flex-col items-center mb-8">
          <GraduationCap className="w-12 h-12 text-blue-600 mb-2" />
          <h1 className="text-2xl font-extrabold text-blue-700">Future School</h1>
          <p className="text-sm text-gray-500">Shaping Tomorrow, Today</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                {...register("password")}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Role Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <Select.Root
              defaultValue="Admin"
              onValueChange={(value: string) => setValue("role", value as LoginForm["role"])}
            >
              <Select.Trigger className="w-full px-4 py-2 rounded-lg border border-gray-300 flex justify-between items-center focus:ring-2 focus:ring-blue-500">
                <Select.Value />
                <Select.Icon>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Content className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Select.ScrollUpButton className="flex items-center justify-center p-2">
                  <ChevronUp />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-1">
                  {(["Admin", "Teacher", "Student", "Parent"] as const).map(
                    (role) => (
                      <Select.Item
                        key={role}
                        value={role}
                        className="px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-100"
                      >
                        <Select.ItemText>{role}</Select.ItemText>
                      </Select.Item>
                    )
                  )}
                </Select.Viewport>
              </Select.Content>
            </Select.Root>
            {errors.role && (
              <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 focus:ring-2 focus:ring-blue-500"
          >
            
            <Link href="/admin">Login to Future School</Link>
            
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Don’t have an account? {" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
