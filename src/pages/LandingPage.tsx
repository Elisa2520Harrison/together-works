import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
                <Link to="/" className="shrink-0">
                    <Logo className="h-9 w-auto" />
                </Link>

                <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
                    <a
                        href="#how-it-works"
                        className="transition hover:text-[#5B3DF5]"
                    >
                        How it works
                    </a>

                    <a
                        href="#why-togetherworks"
                        className="transition hover:text-[#5B3DF5]"
                    >
                        Why TogetherWorks
                    </a>
                </div>

                <Link
                    to="/onboarding"
                    className="rounded-full bg-[#5B3DF5] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4728D9]"
                >
                    Get started
                </Link>
            </nav>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-16 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-24">
                    {/* Hero copy */}
                    <div>
                        <div className="mb-6 inline-flex items-center rounded-full border border-[#5B3DF5]/20 bg-[#5B3DF5]/5 px-4 py-2 text-sm font-medium text-[#5B3DF5]">
                            AI-powered opportunity matching
                        </div>

                        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#171725] sm:text-6xl lg:text-7xl">
                            Better connections,
                            <span className="block text-[#5B3DF5]">
                                better opportunities.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
                            What you know, what you can do, and what you need
                            can become something bigger when connected to the
                            right people. TogetherWorks helps turn capabilities
                            and needs into meaningful opportunities.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <Link
                                to="/onboarding"
                                className="rounded-full bg-[#5B3DF5] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-[#5B3DF5]/20 transition hover:bg-[#4728D9]"
                            >
                                Discover what you can bring
                            </Link>

                            <a
                                href="#how-it-works"
                                className="rounded-full border border-gray-200 px-7 py-3.5 text-center text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                            >
                                See how it works
                            </a>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-3">
                            {[
                                'Skills',
                                'Experience',
                                'Resources',
                                'People',
                                'Opportunities',
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Hero connection visual */}
                    <div className="relative mx-auto flex h-[420px] w-full max-w-xl items-center justify-center">
                        <div className="absolute h-80 w-80 rounded-full bg-[#5B3DF5]/5" />
                        <div className="absolute h-60 w-60 rounded-full bg-[#F4B942]/10" />

                        {/* Connection lines */}
                        <div className="absolute h-px w-64 rotate-[-25deg] bg-[#5B3DF5]/20" />
                        <div className="absolute h-px w-64 rotate-[25deg] bg-[#5B3DF5]/20" />
                        <div className="absolute h-px w-64 rotate-90 bg-[#5B3DF5]/20" />

                        {/* Center */}
                        <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-[#5B3DF5] p-5 text-center shadow-2xl shadow-[#5B3DF5]/30">
                            <Logo className="h-auto w-24 brightness-0 invert" />
                        </div>

                        {/* Nodes */}
                        <div className="absolute left-4 top-12 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-100 bg-white text-center text-sm font-semibold text-gray-700 shadow-lg sm:left-8">
                            Skills
                        </div>

                        <div className="absolute right-4 top-12 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-100 bg-white text-center text-sm font-semibold text-gray-700 shadow-lg sm:right-8">
                            Needs
                        </div>

                        <div className="absolute bottom-8 left-12 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-100 bg-white text-center text-sm font-semibold text-gray-700 shadow-lg sm:left-16">
                            People
                        </div>

                        <div className="absolute bottom-8 right-12 flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-100 bg-white text-center text-sm font-semibold text-gray-700 shadow-lg sm:right-16">
                            Opportunity
                        </div>
                    </div>
                </div>
            </section>

            {/* What TogetherWorks does */}
            <section className="border-y border-gray-100 bg-[#F8F9FC] py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#5B3DF5]">
                            One platform, two directions
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                            Bring what you have. Find what you need.
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            TogetherWorks helps people make their capabilities
                            visible and turn real needs into opportunities to
                            work with the right people.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {/* What you bring */}
                        <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5B3DF5]/10 text-xl">
                                ✦
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-[#171725]">
                                What you bring
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                Tell TogetherWorks about your skills,
                                experience, resources, interests, or the ways
                                you can contribute.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    'Hair braiding',
                                    'Catering',
                                    'Design',
                                    'Tailoring',
                                    'Delivery',
                                    'Software',
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* What you need */}
                        <div className="rounded-[2rem] bg-[#171725] p-8 text-white shadow-sm sm:p-10">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl">
                                ✦
                            </div>

                            <h3 className="mt-6 text-2xl font-bold">
                                What you need
                            </h3>

                            <p className="mt-4 leading-7 text-gray-300">
                                Describe what you're trying to accomplish in
                                your own words. TogetherWorks helps structure
                                your request and identify people who could
                                contribute.
                            </p>

                            <div className="mt-6 rounded-2xl bg-white/5 p-4">
                                <p className="text-sm leading-6 text-gray-300">
                                    “I have a wedding in Accra on Saturday and
                                    need 12 experienced hair braiders…”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#5B3DF5]">
                            How it works
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                            From a need or capability to a real opportunity.
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            TogetherWorks makes it easier to discover who can
                            help, what you can contribute, and what could be
                            built together.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-4">
                        {[
                            {
                                number: '01',
                                title: 'Share',
                                description:
                                    'Tell us what you can do, what you have, or what you need.',
                            },
                            {
                                number: '02',
                                title: 'Understand',
                                description:
                                    'AI helps turn your information or request into something structured and actionable.',
                            },
                            {
                                number: '03',
                                title: 'Match',
                                description:
                                    'TogetherWorks identifies people whose skills, location, availability, and experience fit the opportunity.',
                            },
                            {
                                number: '04',
                                title: 'Connect',
                                description:
                                    'Invite the right people and start turning the opportunity into something real.',
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

            {/* AI example */}
            <section className="bg-[#F8F9FC] py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-[#5B3DF5]">
                                See the difference
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                                You don't need to know exactly how to describe
                                an opportunity.
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-gray-600">
                                Just explain what you're trying to accomplish.
                                TogetherWorks can break the request into the
                                important pieces needed to find the right
                                people.
                            </p>
                        </div>

                        <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                            {/* User request */}
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    Your request
                                </p>

                                <div className="mt-3 rounded-2xl bg-gray-50 p-5">
                                    <p className="text-sm leading-7 text-gray-700">
                                        “I have a wedding in Accra on Saturday
                                        and I need 12 experienced hair braiders
                                        to handle the guests.”
                                    </p>
                                </div>
                            </div>

                            {/* AI analysis */}
                            <div className="my-6 flex justify-center">
                                <div className="h-8 w-px bg-gray-200" />
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5B3DF5]/10 text-xs text-[#5B3DF5]">
                                        ✦
                                    </span>

                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5B3DF5]">
                                        TogetherWorks understands
                                    </p>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    {[
                                        ['Need', 'Hair braiding team'],
                                        ['People', '12'],
                                        ['Location', 'Accra'],
                                        ['Deadline', 'Saturday'],
                                    ].map(([label, value]) => (
                                        <div
                                            key={label}
                                            className="rounded-2xl border border-gray-100 p-4"
                                        >
                                            <p className="text-xs text-gray-400">
                                                {label}
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#171725]">
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Matching */}
                            <div className="my-6 flex justify-center">
                                <div className="h-8 w-px bg-gray-200" />
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    Potential matches
                                </p>

                                <div className="mt-4 space-y-3">
                                    {[
                                        ['Ama Mensah', '96% match'],
                                        ['Akosua Beauty Hub', '92% match'],
                                        ['Nana Yaa Styles', '87% match'],
                                    ].map(([name, score]) => (
                                        <div
                                            key={name}
                                            className="flex items-center justify-between rounded-2xl border border-gray-100 p-4"
                                        >
                                            <div>
                                                <p className="text-sm font-semibold text-[#171725]">
                                                    {name}
                                                </p>

                                                <p className="mt-1 text-xs text-gray-500">
                                                    Hair braiding · Accra
                                                </p>
                                            </div>

                                            <span className="text-sm font-bold text-[#5B3DF5]">
                                                {score}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why TogetherWorks */}
            <section id="why-togetherworks" className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-[#5B3DF5]">
                                Why TogetherWorks
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                                The opportunity is often already there. The
                                connection is what's missing.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                A seamstress may have the skill. A supplier may
                                have the materials. A market trader may have
                                customers. Someone else may have the equipment
                                or delivery network.
                            </p>

                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                TogetherWorks helps make those capabilities
                                visible and connects complementary people when
                                there is a real opportunity to work together.
                            </p>
                        </div>

                        <div className="rounded-[2rem] bg-[#171725] p-8 text-white sm:p-10">
                            <p className="text-sm font-medium text-[#F4B942]">
                                The TogetherWorks idea
                            </p>

                            <blockquote className="mt-5 text-2xl font-semibold leading-relaxed sm:text-3xl">
                                “What you have becomes more valuable when it
                                connects with what someone else has.”
                            </blockquote>

                            <div className="mt-8 h-px bg-white/10" />

                            <p className="mt-6 text-sm leading-6 text-gray-400">
                                AI helps understand what people bring and what
                                opportunities require. Matching helps identify
                                complementary capabilities. Together, they make
                                better connections possible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-24 lg:px-8">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#5B3DF5] px-8 py-16 text-center sm:px-12">
                    <div className="mx-auto flex justify-center">
                        <div className="rounded-2xl bg-white/10 px-5 py-3">
                            <Logo className="h-10 w-auto brightness-0 invert" />
                        </div>
                    </div>

                    <h2 className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        What could you build together?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/80">
                        Start with what you have, or tell us what you need.
                        TogetherWorks helps you discover the people and
                        possibilities that could take it further.
                    </p>

                    <Link
                        to="/onboarding"
                        className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#5B3DF5] transition hover:bg-gray-100"
                    >
                        Get started
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-100 bg-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <Link to="/" className="shrink-0">
                        <Logo className="h-7 w-auto" />
                    </Link>

                    <span>Better connections, better opportunities.</span>
                </div>
            </footer>
        </main>
    )
}