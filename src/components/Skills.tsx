const skills = ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'Git', 'Node.js', 'Express', 'Python', 'Tailwind CSS', 'Vite', 'pnpm', 'REST APIs', 'java SE', 'PostgreSQL', 'Next.js', 'PowerBI ']

function Skills() {
  return (
    <section id="skills" className="px-3 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-8 flex flex-wrap gap-5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-black px-5 py-3 text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills