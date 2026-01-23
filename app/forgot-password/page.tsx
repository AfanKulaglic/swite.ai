'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useAuth } from '@/lib/auth/AuthContext';

export default function ForgotPasswordPage() {
  const { resetPassword } = useAuth();
  
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error } = await resetPassword(email);
      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link href="/login" className="inline-flex items-center gap-2 px-3 py-2 mb-12 border border-white/10 hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5 transition-all duration-300 text-sm font-light group">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Login
        </Link>

        {/* Logo */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#4169E1] to-[#6B46C1] flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="SWITE.AI Logo" 
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-light tracking-tight">SWITE.AI</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-light tracking-tight leading-[0.95] mb-3">
            <span className="block text-white/40">Reset your</span>
            <span className="block font-medium text-white">password</span>
          </h1>
          <p className="text-sm text-white/40 font-light">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        {success ? (
          <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-green-400 font-medium">Check your email</span>
            </div>
            <p className="text-white/60 text-sm">
              We've sent a password reset link to <strong className="text-white">{email}</strong>. 
              Please check your inbox and follow the instructions.
            </p>
            <Link 
              href="/login"
              className="mt-6 inline-block px-6 py-3 bg-white/10 hover:bg-white/20 transition-colors text-sm"
            >
              Return to Login
            </Link>
          </div>
        ) : (
          <>
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-light text-white/40 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#4169E1]/40 focus:bg-white/[0.07] outline-none transition-all duration-300 text-sm font-light"
                  placeholder="you@company.com"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#4169E1] to-[#6B46C1] text-white text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-white/40 font-light">
                Remember your password?{" "}
                <Link href="/login" className="text-white hover:text-white/80 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
