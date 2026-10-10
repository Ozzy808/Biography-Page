function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 text-blue-300">
          Interested in working together or just want to say hello?
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://www.email.Innocent.Mothapo100@gmail.com"
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            Email me
          </a>
          <a
            href="https://github.com/Ozzy808"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/innocent-mothapo"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact