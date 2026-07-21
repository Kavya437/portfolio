export default function Background() {
    return (
        <>
            {/* Main radial glow */}
            <div className="fixed inset-0 -z-50 overflow-hidden">
                <div className="absolute left-[38%] top-10 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />
            </div>

            {/* Grid */}
            <div
                className="
          fixed
          inset-0
          -z-40
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:60px_60px]
        "
            />
        </>
    );
}