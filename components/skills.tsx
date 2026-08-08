const skillGroups = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Django", "Firebase"],
    },
    {
        title: "Programming",
        skills: ["Python", "JavaScript", "C"],
    },
    {
        title: "AI / ML",
        skills: ["Machine Learning", "Mask R-CNN", "OpenCV"],
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Vercel"],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="mx-auto max-w-7xl px-6 py-28"
        >
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Skills
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-semibold text-white">
                Technologies I use to bring ideas to life.
            </h2>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 backdrop-blur"
                    >
                        <h3 className="mb-5 text-lg font-medium text-white">
                            {group.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-neutral-700 bg-neutral-800/70 px-4 py-2 text-sm text-neutral-300 transition-all duration-300 hover:border-white hover:text-white"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}