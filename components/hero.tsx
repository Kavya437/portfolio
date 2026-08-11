export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl px-10 pt-40 lg:px-16">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="max-w-2xl">
        {/* Eyebrow */}
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
          Computer Science Student · Aspiring MBA
        </p>

        {/* Heading */}
        <h1 className="text-5xl font-medium leading-[0.98] tracking-tight text-white md:text-6xl lg:text-7xl">
          Crafting digital
          <br />
          experiences that are
          <br />
          clean, intuitive and
          <br />
          built with purpose.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-500">
          I'm{" "}
          <span className="font-medium text-white">
            Kavya Rupini Potnuru
          </span>
          , a Computer Science student who enjoys building modern web
          applications while continuously improving through hands-on
          projects.
        </p>

        {/* Buttons */}
        <div className="mt-16 flex items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-white/10 px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/5 active:scale-95"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}