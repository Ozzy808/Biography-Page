const skills = [
    {
        name: 'React',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
        name: 'TypeScript',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
        name: 'HTML',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
        name: 'JavaScript',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
        name: 'Java',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
        name: 'C++',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    },
    {
        name: 'Python',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
        name: 'PHP',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    },
    {
        name: 'XAMPP',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
    },
    {
        name: 'Linux',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    },
    {
        name: 'PostgreSQL',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
        name: 'Tailwind CSS',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
        name: 'CSS',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
        name: 'VS Code',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',
    },
    {
        name: 'Git',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
        name: 'GitHub',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
]

function Skills() {
    return (
        <section id="skills" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold">Skills</h2>
                <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="tech-item flex w-24 flex-col items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1"
                        >
                            <img
                                src={skill.src}
                                alt={skill.name}
                                className="h-10 w-10 object-contain"
                            />
                            <span className="text-xs font-medium text-slate-700">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills