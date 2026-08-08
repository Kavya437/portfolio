import Image from "next/image";
export default function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-6xl px-10 py-32 lg:px-16"
        >
            <div className="mb-16">
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
                    Projects
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight text-white">
                    Projects that showcase how I solve problems through design, code, and AI.
                </h2>
            </div>

            <div className="grid gap-8">
                {/* Featured Project */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20">

                    {/* Browser Preview */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
                        {/* Browser Bar */}
                        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                            <div className="h-3 w-3 rounded-full bg-red-400/80" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                            <div className="h-3 w-3 rounded-full bg-green-400/80" />
                        </div>

                        {/* Preview */}
                        <div className="relative aspect-[16/7] overflow-hidden rounded-b-xl">
                            <Image
                                src="/images/ai-commerce-os.png"
                                alt="AI Commerce OS"
                                fill
                                priority
                                className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="flex-1">
                            <h3 className="text-2xl font-medium text-white">
                                AI Commerce OS
                            </h3>

                            <p className="mt-4 max-w-2xl leading-8 text-neutral-400">
                                A modern AI-powered ecommerce dashboard built with
                                Next.js, React, TypeScript and Tailwind CSS,
                                featuring analytics, product management and an
                                intuitive shopping workflow.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {[
                                    "Next.js",
                                    "React",
                                    "TypeScript",
                                    "Tailwind CSS",
                                    "OpenAI",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="mt-8 flex items-center justify-between">
                                <button className="rounded-full bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95">
                                    Live Demo
                                </button>

                                <button className="text-neutral-400 transition-colors duration-300 hover:text-white">
                                    View Code →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Projects */}
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                        <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
                            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                                <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                            </div>

                            <div className="relative aspect-[4/3] overflow-hidden rounded-b-xl">
                                <Image
                                    src="/images/pocketpal.png"
                                    alt="PocketPal"
                                    fill
                                    className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                                />
                            </div>
                        </div>

                        <h3 className="text-xl font-medium text-white">
                            PocketPal
                        </h3>

                        <p className="mt-3 leading-7 text-neutral-400">
                            A modern personal finance application that helps users
                            track expenses, manage budgets, and visualize spending
                            through a clean and intuitive interface.
                        </p>

                        <div className="mt-6 flex items-center gap-4">
                            <a
                                href="https://pocketpal-kavya.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Live Demo
                            </a>

                            <a
                                href="https://github.com/Kavya437/pocketpal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                            >
                                View Code →
                            </a>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                        <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
                            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                                <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                            </div>

                            <div className="relative aspect-[4/3] overflow-hidden rounded-b-xl">
                                <Image
                                    src="/images/agrismart.jpeg"
                                    alt="AgriSmart"
                                    fill
                                    className="object-contain p-2 transition-transform duration-500 hover:scale-[1.03]"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-medium text-white">
                                AgriSmart
                            </h3>

                            <span className="rounded-full border border-neutral-700 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
                                Team Project
                            </span>
                        </div>

                        <p className="mt-3 leading-7 text-neutral-400">
                            An AI-powered crop recommendation platform that suggests suitable crops
                            based on soil, weather, and environmental conditions. I contributed to
                            the frontend development, documentation, and project presentation as part
                            of a team.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}