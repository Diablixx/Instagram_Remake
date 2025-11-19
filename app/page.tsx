import Link from "next/link";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[850px] flex items-center justify-center gap-8">
          {/* Left Side - Phone Mockup with Images (Hidden on Mobile) */}
          <div className="hidden lg:block relative w-[380px] h-[580px] flex-shrink-0">
            <div className="relative w-full h-full">
              {/* Phone Frame Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[300px] h-[550px]">
                  {/* Collage of images */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    {/* Main phone container */}
                    <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-gray-900 shadow-2xl border-8 border-gray-800">
                      {/* Screenshot placeholder - we'll use a gradient and shapes */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900">
                        {/* Image grid simulation */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] grid grid-cols-3 gap-1">
                          <div className="bg-orange-500 rounded-lg"></div>
                          <div className="bg-blue-600 rounded-lg"></div>
                          <div className="bg-pink-500 rounded-lg"></div>
                          <div className="bg-green-500 rounded-lg"></div>
                          <div className="bg-purple-600 rounded-lg"></div>
                          <div className="bg-yellow-500 rounded-lg"></div>
                          <div className="bg-red-500 rounded-lg"></div>
                          <div className="bg-teal-500 rounded-lg"></div>
                          <div className="bg-indigo-600 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating emoji/icon decorations */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-lg"></div>
                  <div className="absolute top-1/4 -right-6 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg"></div>
                  <div className="absolute bottom-1/4 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-6 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <LoginForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="max-w-[935px] mx-auto">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 text-xs text-[#737373]">
            <Link href="#" className="hover:text-white transition-colors">Meta</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Blog</Link>
            <Link href="#" className="hover:text-white transition-colors">Jobs</Link>
            <Link href="#" className="hover:text-white transition-colors">Help</Link>
            <Link href="#" className="hover:text-white transition-colors">API</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Locations</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram Lite</Link>
            <Link href="#" className="hover:text-white transition-colors">Threads</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact uploading and non-users</Link>
            <Link href="#" className="hover:text-white transition-colors">Meta Verified</Link>
          </nav>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-[#737373]">
            <select className="bg-transparent border-none text-[#737373] cursor-pointer focus:outline-none">
              <option>English (UK)</option>
            </select>
            <span>© 2025 Instagram from Meta</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
