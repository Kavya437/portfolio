import { Mail } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto max-w-7xl px-6 py-20"
        >
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Contact
            </p>

            <h2 className="mt-3 text-4xl font-semibold text-white">
                Let's build something together.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-neutral-400">
                I'm always open to discussing internships, projects,
                collaborations, or simply connecting with like-minded people.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
                <a
                    href="mailto:potnurukavyarupini@gmail.com"
                    className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition hover:-translate-y-1"
                >
                    <Mail size={18} />
                    Email Me
                </a>

                <a
                    href="https://github.com/Kavya437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-neutral-300 transition hover:border-white hover:text-white"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/kavyarupini-potnuru-ab32b927b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-neutral-300 transition hover:border-white hover:text-white"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
}