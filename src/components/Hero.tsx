import profileImage from '../assets/profile-picture.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Hello, I'm
          </p>
          <p className="mb-8 text-sm font-medium text-blue-800">
            HLOKOMELO INNOCENT MOTHAPO, a junior software developer passionate about building useful applications and learning new technologies. 
          </p>
          <h1 className="text-3xl font-bold sm:text-5xl md:text-4xl">
            HLOKOMELO INNOCENT MOTHAPO
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            I am a junior software developer who enjoys building useful
            applications and learning new technologies.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
            >
              View my projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-blue-200 px-5 py-3 text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              Contact Ozzy
            </a>
          </div>
        </div>

        <div className="relative flex w-full max-w-xs items-center justify-center md:w-[360px]">
          <div className="absolute h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
          <img
            src={profileImage}
            alt="Ozzy Mothapo"
            className="relative h-72 w-72 rounded-full object-cover shadow-xl ring-4 ring-white"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero