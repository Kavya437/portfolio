export default function About() {
    return (
        <section
            id="about"
            className="mx-auto flex max-w-6xl flex-col gap-16 px-10 py-32 lg:flex-row lg:items-start lg:px-16"
        >
            {/* Left */}
            <div className="lg:w-1/3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
                    <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
                        About
                    </p>

                    <h2 className="mt-4 text-4xl font-medium tracking-tight text-white">
                        Building with
                        <br />
                        curiosity and purpose.
                    </h2>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                            🇮🇳 Andhra Pradesh
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                            💻 B.Tech CSE
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                            ✨ Frontend
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                            🤖 AI
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                            🎯 CAT 2026
                        </span>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="space-y-6 lg:w-2/3">
                <p className="text-lg leading-8 text-neutral-400">
                    I'm <span className="font-medium text-white">Kavya Rupini Potnuru</span>, a
                    Computer Science student passionate about{" "}
                    <span className="text-white">frontend development</span>,{" "}
                    <span className="text-white">artificial intelligence</span>, and creating
                    thoughtful digital experiences.
                </p>

                <p className="text-lg leading-8 text-neutral-400">
                    I enjoy transforming ideas into clean, responsive interfaces while
                    continuously learning modern technologies. Alongside development, I'm
                    preparing for <span className="text-white">CAT 2026</span> with the goal of
                    pursuing an <span className="text-white">MBA</span> and building products
                    that create meaningful impact.
                </p>
            </div>
        </section>
    );
}