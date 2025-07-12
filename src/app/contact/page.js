"use client";
import { useRouter } from "next/navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center p-4 md:p-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-200 rounded-full opacity-15 blur-lg"></div>
      
      <div className="relative z-10 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 max-w-2xl w-full">
        {/* Header with animated icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">📞</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto">
            Ready to order delicious pizza? We'd love to hear from you!
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid gap-6 md:gap-8">
          {/* Phone Card */}
          <div className="group bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-2xl">📞</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
                <p className="text-blue-600 font-bold text-lg md:text-xl">+91-9777718050</p>
                <p className="text-gray-500 text-sm">Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="group bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-2xl">📧</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
                <p className="text-green-600 font-bold text-lg md:text-xl break-all">sahurks1234@gmail.com</p>
                <p className="text-gray-500 text-sm">We'll respond within 2 hours</p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-2xl">📍</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Visit Us</h3>
                <p className="text-orange-600 font-bold text-lg md:text-xl">Masudpur, Jajpur, Odisha</p>
                <p className="text-gray-500 text-sm">PIN: 755043</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info section */}
        <div className="mt-8 md:mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">🍕 Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>100% Vegetarian</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Fresh Ingredients</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social media or additional contact */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Follow us on social media for daily specials and updates!
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <span className="text-lg">📱</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <span className="text-lg">💬</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <span className="text-lg">📸</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 