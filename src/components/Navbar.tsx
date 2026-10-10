function Navbar() {
  return (
    <nav className="border-b bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-10 py-6">
        <a href="#home" className="font-bold">
          HLOKOMELO INNOCENT MOTHAPO
        </a>
        <div className="flex gap-6 text-sm">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar