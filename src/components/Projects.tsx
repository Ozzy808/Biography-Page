import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Application A',
    description: 'The frontend application for managing user interactions.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Express', 'REST APIs'],
    githubUrl: 'https://github.com/yourusername/project-one',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Application B ',
    description: 'The Backend API for Application .',
    technologies: ['JavaScript', 'CSS', 'HTML', 'Node.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project-two',
    liveUrl: 'https://example.com',
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-gray-800 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects