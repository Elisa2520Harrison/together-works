import { Link } from 'react-router-dom'



export default function LandingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
                <div>
                    <span className="text-2xl font-bold tracking-tight text-[#5B3DF5]">
                        TogetherWorks
                    </span>
                </div>

                <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
                    <a href="#how-it-works" className="transition hover:text-[#5B3DF5]">
                        How it works
                    </a>
                    <a href="#why-togetherworks" className="transition hover:text-[#5B3DF5]">
                        Why TogetherWorks
                    </a>
                </div>

                <button
                    type="button"
                    className="rounded-full bg-[#5B3DF5] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4728D9]"
                >
                    Get started
                </button>
            </nav>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-16 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-24">
                    {/* Hero copy */}
                    <div>
                        <div className="mb-6 inline-flex items-center rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">
                            AI-powered opportunity discovery
                        </div>

                        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#171725] sm:text-6xl lg:text-7xl">
                            Better connections,
                            <span className="block text-[#5B3DF5]">
                                better opportunities.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
                            Your skills, resources, relationships and ideas could become
                            something bigger when connected to the right people.
                            TogetherWorks uses AI to discover what you can build together.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <Link
                                to="/onboarding"
                                className="rounded-full bg-[#5B3DF5] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#5B3DF5]/20 transition hover:bg-[#4728D9]"
                            >
                                Discover what you can build
                            </Link>

                            <a
                                href="#how-it-works"
                                className="rounded-full border border-gray-200 px-7 py-3.5 text-center text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                            >
                                See how it works
                            </a>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                            {['Skills', 'Resources', 'People', 'Opportunities'].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Connection visual */}
                    <div className="relative mx-auto flex h-[420px] w-full max-w-xl items-center justify-center">
                        <div className="absolute h-72 w-72 rounded-full bg-[#5B3DF5]/5" />
                        <div className="absolute h-52 w-52 rounded-full bg-[#F4B942]/10" />

                        {/* Connection lines */}
                        <div className="absolute h-px w-64 rotate-[-25deg] bg-[#5B3DF5]/20" />
                        <div className="absolute h-px w-64 rotate-[25deg] bg-[#5B3DF5]/20" />
                        <div className="absolute h-px w-64 rotate-90 bg-[#5B3DF5]/20" />

                        {/* Center */}
                        <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-[#5B3DF5] text-center text-lg font-bold text-white shadow-2xl shadow-[#5B3DF5]/30">
                            TogetherWorks
                        </div>

                        {/* Nodes */}
                        <div className="absolute left-8 top-16 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-100 bg-white text-center text-sm font-semibold text-gray-700 shadow-lg">
                            Skills
                        </div>

                        <div className="absolute right-8 top-16 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-100 bg-white text-center text-sm font-semibold text-gray-700 shadow-lg">
                            Resources
                        </div>

                        <div className="absolute bottom-10 left-16 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-100 bg-white text-center text-sm font-semibold text-gray-700 shadow-lg">
                            People
                        </div>

                        <div className="absolute bottom-10 right-16 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-100 bg-white text-center text-sm font-semibold text-gray-700 shadow-lg">
                            Opportunity
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="bg-[#F8F9FC] py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#5B3DF5]">
                            How it works
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                            From what you have to what you can build.
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            TogetherWorks connects capabilities that already exist but are
                            often scattered across different people.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-4">
                        {[
                            {
                                number: '01',
                                title: 'Share',
                                description:
                                    'Tell us what skills, resources, experience or connections you bring.',
                            },
                            {
                                number: '02',
                                title: 'Discover',
                                description:
                                    'AI identifies opportunities that could emerge from those capabilities.',
                            },
                            {
                                number: '03',
                                title: 'Connect',
                                description:
                                    'TogetherWorks finds complementary people who can contribute.',
                            },
                            {
                                number: '04',
                                title: 'Build',
                                description:
                                    'Turn the connection into a feasible team and actionable opportunity.',
                            },
                        ].map((step) => (
                            <div
                                key={step.number}
                                className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm"
                            >
                                <span className="text-sm font-bold text-[#5B3DF5]">
                                    {step.number}
                                </span>

                                <h3 className="mt-5 text-xl font-bold text-[#171725]">
                                    {step.title}
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why TogetherWorks */}
            <section id="why-togetherworks" className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-[#5B3DF5]">
                                The idea
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                                Capability becomes opportunity when the right people connect.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                A seamstress may have the skill. A supplier may have the
                                materials. Someone else may have the customers, equipment or
                                delivery network.
                            </p>

                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                Individually, each capability has limits. Together, they can
                                become something much bigger.
                            </p>
                        </div>

                        <div className="rounded-[2rem] bg-[#171725] p-8 text-white sm:p-10">
                            <p className="text-sm font-medium text-[#F4B942]">
                                TogetherWorks believes
                            </p>

                            <blockquote className="mt-5 text-2xl font-semibold leading-relaxed sm:text-3xl">
                                “What you have becomes more valuable when it connects with what
                                someone else has.”
                            </blockquote>

                            <div className="mt-8 h-px bg-white/10" />

                            <p className="mt-6 text-sm leading-6 text-gray-400">
                                AI helps understand the capabilities. Intelligent matching
                                connects them. Feasibility checks whether the opportunity can
                                actually work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-24 lg:px-8">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#5B3DF5] px-8 py-16 text-center sm:px-12">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        What could you build together?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
                        Start with what you already have. TogetherWorks will help you
                        discover where it could take you.
                    </p>

                    <button
                        type="button"
                        className="mt-8 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#5B3DF5] transition hover:bg-gray-100"
                    >
                        Get started
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-100 bg-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <span className="font-semibold text-[#5B3DF5]">
                        TogetherWorks
                    </span>

                    <span>Better connections, better opportunities.</span>
                </div>
            </footer>
        </main>
    )
}