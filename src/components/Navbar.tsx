const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black text-gray-50 shadow-lg shadow-gray-200/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6">
        <a href="#home" className="flex items-center gap-3 text-center text-lg font-extrabold tracking-wide text-white">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="h-10 w-10 object-contain"
          />
          HLOKOMELO INNOCENT MOTHAPO
        </a>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm sm:gap-x-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 font-medium text-gray-100 transition hover:bg-gray-800 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar