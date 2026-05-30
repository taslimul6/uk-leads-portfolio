export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">UK</span>
              </div>
              <span className="font-bold text-lg text-white">
                Beauty & Wellness Directory
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Connecting you with the best beauty, wellness, and health
              businesses across the UK. All businesses offer WhatsApp booking for
              your convenience.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/directory" className="hover:text-purple-400 transition-colors">Business Directory</a></li>
              <li><a href="/cities" className="hover:text-purple-400 transition-colors">Browse by City</a></li>
              <li><a href="/about" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Cities</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/directory?city=Birmingham" className="hover:text-purple-400 transition-colors">Birmingham</a></li>
              <li><a href="/directory?city=Manchester" className="hover:text-purple-400 transition-colors">Manchester</a></li>
              <li><a href="/directory?city=Bradford" className="hover:text-purple-400 transition-colors">Bradford</a></li>
              <li><a href="/directory?city=Oldham" className="hover:text-purple-400 transition-colors">Oldham</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 UK Beauty & Wellness Directory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
