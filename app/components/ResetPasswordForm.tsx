"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ResetPasswordForm = () => {
  // Now you can safely use the hook here
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");

  // Example of how you might use the token
  useEffect(() => {
    if (token) {
      console.log("Found reset token:", token);
      // You could add logic here to verify the token
    }
  }, [token]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle the password reset logic here
    console.log("Resetting password with token:", token);
  };

  if (!token) {
    return (
      <p className="text-red-700">
        No reset token found. Please check your link.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Reset Your Password</h2>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-black"
        >
          New Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-800 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Reset Password
      </button>
    </form>
  );
};

export default ResetPasswordForm;
