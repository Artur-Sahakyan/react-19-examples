export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-4 sm:h-6" />

        <nav className="mx-auto w-full max-w-xl rounded-full bg-[#1f275a] px-8 py-3 shadow-md">
          <ul className="flex items-center justify-center gap-8">
            <li>
              <a
                href="#home"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* bottom spacing */}
        <div className="h-4 sm:h-6" />
      </div>
    </header>
  );
}
