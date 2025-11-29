"use client";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 pt-16 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* -------------- ABOUT US -------------- */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Your one-stop digital solutions partner.
            We deliver modern, scalable, high-quality services
            to help your business grow and succeed.
          </p>
        </div>

        {/* -------------- SERVICES -------------- */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Website Development</li>
            <li>App Development</li>
            <li>SEO Optimization</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* -------------- QUICK LINKS -------------- */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* -------------- CONTACT -------------- */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>📍 Pudukottai</li>
            {/* <li>📞 +91 98765 43210</li> */}
            <li>📧 codearcus17@gmail.com</li>
          </ul>
        </div>

        {/* -------------- SOCIAL / FOLLOW US -------------- */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Follow Us</h3>

          <div className="flex space-x-4 text-blue-600 text-2xl mb-6">

            {/* FACEBOOK */}
            <a href="#" aria-label="Facebook">
              <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5H15c-1.2 0-1.5.8-1.5 1.6V12H18l-.5 3h-3v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a href="#" aria-label="Instagram">
              <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.8A5.2 5.2 0 1 0 17.2 13 5.2 5.2 0 0 0 12 7.8zm0 2A3.2 3.2 0 1 1 8.8 13 3.2 3.2 0 0 1 12 9.8zm4.6-3.9a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z"/>
              </svg>
            </a>

            {/* LINKEDIN */}
            <a href="#" aria-label="LinkedIn">
              <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3v12h-3V8zM8.5 8h2.9v1.7h.1c.4-.8 1.3-1.7 2.8-1.7 3 0 3.6 2 3.6 4.6V20h-3v-6.2c0-1.5-.1-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V20h-3V8z"/>
              </svg>
            </a>

          </div>

          <h4 className="text-sm font-medium mb-2">Stay in touch</h4>

          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-l-lg px-3 py-2 text-sm"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-lg">
              →
            </button>
          </div>
        </div>

      </div>

      {/* -------- COPYRIGHT -------- */}
      <div className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CodeArcUs. All rights reserved.
      </div>
    </footer>
  );
}
