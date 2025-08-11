// pages/reset-password.js
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Hook to read URL parameters
import { motion, AnimatePresence } from "framer-motion";
import {
  FiLock,
  FiLoader,
  FiCheckCircle,
  FiAlertTriangle,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import toast from "react-hot-toast";
import Link from "next/link";
import AuthLayout from "../components/AuthLayout";

const ResetPasswordPage = () => {
  // Hook to read URL query params. We need this to get the reset token.
  const searchParams = useSearchParams();

  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState(""); // For form validation errors
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // State for success view
  const [isInvalidToken, setIsInvalidToken] = useState(false); // State for invalid token view

  // On component mount, get the token from the URL.
  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      setIsInvalidToken(true); // If no token is found, the link is invalid.
    }
  }, [searchParams]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(""); // Reset errors on new submission

    // 1. Client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (loading) return;

    setLoading(true);
    const toastId = toast.loading("Resetting your password...");

    try {
      // --- SIMULATING API CALL ---
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (token === "invalid-token-for-testing") {
        // Simulate an invalid token error from API
        throw new Error("This reset link is invalid or has expired.");
      }
      // -----------------------------

      toast.success("Password has been reset successfully!", { id: toastId });
      setIsSuccess(true); // Switch to success view
    } catch (err) {
      const errorMessage =
        typeof err === "object" && err !== null && "message" in err
          ? String((err as { message?: string }).message)
          : "An error occurred";
      toast.error(errorMessage, { id: toastId });
      // If the API confirms the token is invalid, switch to the invalid token view
      if (
        errorMessage.includes("invalid") ||
        errorMessage.includes("expired")
      ) {
        setIsInvalidToken(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const renderContent = () => {
    if (isInvalidToken) {
      return (
        <motion.div
          key="invalid"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-center"
        >
          <FiAlertTriangle className="mx-auto text-red-500 text-6xl mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Invalid Link
          </h3>
          <p className="text-gray-600">
            This password reset link is either invalid or has expired. Please
            request a new one.
          </p>
          <Link href="/forgot-password">
            <span className="cursor-pointer mt-6 inline-block text-pink-500 font-semibold hover:underline">
              Request a New Link
            </span>
          </Link>
        </motion.div>
      );
    }

    if (isSuccess) {
      return (
        <motion.div
          key="success"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-center"
        >
          <FiCheckCircle className="mx-auto text-green-500 text-6xl mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Password Reset!
          </h3>
          <p className="text-gray-600">
            Your password has been successfully updated. You can now log in with
            your new password.
          </p>
          <Link href="/login">
            <button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg">
              Go to Login
            </button>
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.form
        key="form"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onSubmit={handleSubmit}
      >
        <p className="text-center text-gray-600 mb-6">
          Create a new, strong password.
        </p>
        <div className="relative mb-4">
          <FiLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            className="w-full p-2 pl-10 pr-10 border-b-2 border-gray-300 focus:outline-none focus:border-pink-400"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
        <div className="relative mb-4">
          <FiLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError("");
            }}
            className="w-full p-2 pl-10 pr-10 border-b-2 border-gray-300 focus:outline-none focus:border-pink-400"
            required
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading && <FiLoader className="animate-spin mr-2" />}
          {loading ? "Saving..." : "Reset Password"}
        </button>
      </motion.form>
    );
  };

  return (
    <AuthLayout
      pageTitle="RESET PASSWORD"
      panelTitle="Need Help?"
      panelSubtitle="If you're having trouble, feel free to contact our support team."
      linkHref="/contact" // Example link, change as needed
      linkText="Contact Us"
      mobileLinkText="Back to Login"
    >
      <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
