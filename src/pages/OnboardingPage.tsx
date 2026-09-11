import { useState } from 'react'
import {
    ArrowRight,
    BriefcaseBusiness,
    Sparkles,
    Users,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { extractCapabilities } from '../services/ai'

type OnboardingMode = 'choice' | 'capabilities'

export default function OnboardingPage() {
    const navigate = useNavigate()

    const [mode, setMode] = useState<OnboardingMode>('choice')
    const [name, setName] = useState('')
    const [input, setInput] = useState('')
    const [isAnalyzing, setIsAnalyzing] = useState(false)

    async function handleAnalyze() {
        if (!name.trim() || !input.trim()) {
            return
        }

        setIsAnalyzing(true)

        try {
            const result = await extractCapabilities(input)

            sessionStorage.setItem(
                'togetherworks_profile',
                JSON.stringify({
                    name: name.trim(),
                    ...result,
                }),
            )

            navigate('/home')
        } catch (error) {
            console.error('Failed to analyze capabilities:', error)
            setIsAnalyzing(false)
        }
    }

    function handleCreateOpportunity() {
        navigate('/create-opportunity')
    }

    if (isAnalyzing) {
        return (
            <main className="min-h-screen bg-[#f8f9fc] px-6 py-8 sm:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* Header */}
                    <header className="mb-10 flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b3df5] text-sm font-bold text-white">
                            T
                        </div>

                        <span className="text-lg font-semibold text-[#171725]">
                            TogetherWorks
                        </span>
                    </header>

                    {/* AI Analysis */}
                    <section className="rounded-3xl border border-[#e5e7eb] bg-white px-6 py-16 text-center shadow-sm sm:px-10">
                        <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-[#eeeaff] text-[#5b3df5]">
                            <Sparkles size={30} />
                        </div>

                        <h1 className="mt-6 text-2xl font-bold text-[#171725]">
                            Discovering what you could build...
                        </h1>

                        <p className="mx-auto mt-3 max-w-lg leading-7 text-gray-600">
                            TogetherWorks is analyzing what you bring and
                            looking for opportunities that could fit you.
                        </p>

                        <div className="mx-auto mt-8 h-2 max-w-sm overflow-hidden rounded-full bg-gray-100">
                            <div className="h-full w-1/2 animate-pulse rounded-full bg-[#5b3df5]" />
                        </div>
                    </section>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#f8f9fc] px-6 py-8 sm:px-8">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <header className="mb-10 flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b3df5] text-sm font-bold text-white">
                        T
                    </div>

                    <span className="text-lg font-semibold text-[#171725]">
                        TogetherWorks
                    </span>
                </header>

                {mode === 'choice' && (
                    <section className="rounded-3xl border border-[#e5e7eb] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#5b3df5]">
                                <Sparkles size={27} />
                            </div>

                            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[#5b3df5]">
                                Welcome to TogetherWorks
                            </p>

                            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                                What would you like to do?
                            </h1>

                            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
                                TogetherWorks helps connect what people can
                                offer with what others need. Start by telling
                                us what you bring or what you want to make
                                happen.
                            </p>

                            <div className="mt-10 grid gap-5 text-left md:grid-cols-2">
                                {/* Bring something */}
                                <button
                                    type="button"
                                    onClick={() => setMode('capabilities')}
                                    className="group rounded-3xl border-2 border-[#e5e7eb] bg-white p-6 text-left transition hover:-translate-y-0.5 hover:border-[#5b3df5]/40 hover:shadow-lg"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#5b3df5]">
                                        <Users size={23} />
                                    </div>

                                    <h2 className="mt-6 text-xl font-bold text-[#171725]">
                                        What do you bring?
                                    </h2>

                                    <p className="mt-3 leading-7 text-gray-600">
                                      Tell TogetherWorks about your skills, products, resources,
                                       connections, experience, or anything else you can contribute.
                                        We'll help you discover what you could build with others.
                                    </p>

                                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#5b3df5]">
                                        Build my capability profile
                                        <ArrowRight
                                            className="ml-2 transition group-hover:translate-x-1"
                                            size={17}
                                        />
                                    </div>
                                </button>

                                {/* Create opportunity */}
                                <button
                                    type="button"
                                    onClick={handleCreateOpportunity}
                                    className="group rounded-3xl border-2 border-[#e5e7eb] bg-white p-6 text-left transition hover:-translate-y-0.5 hover:border-[#5b3df5]/40 hover:shadow-lg"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff8e7] text-[#9a6b00]">
                                        <BriefcaseBusiness size={23} />
                                    </div>

                                    <h2 className="mt-6 text-xl font-bold text-[#171725]">
                                        Create an opportunity
                                    </h2>

                                    <p className="mt-3 leading-7 text-gray-600">
                                        Tell us what you're trying to
                                        accomplish. TogetherWorks will
                                        understand what you need and help find
                                        the right people.
                                    </p>

                                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#5b3df5]">
                                        Tell us what you need
                                        <ArrowRight
                                            className="ml-2 transition group-hover:translate-x-1"
                                            size={17}
                                        />
                                    </div>
                                </button>
                            </div>

                            <p className="mt-8 text-xs text-gray-400">
                                You can explore both sides of TogetherWorks
                                anytime.
                            </p>
                        </div>
                    </section>
                )}

                {mode === 'capabilities' && (
                    <section className="rounded-3xl border border-[#e5e7eb] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
                        <div className="mx-auto max-w-2xl text-center">
                            <button
                                type="button"
                                onClick={() => setMode('choice')}
                                className="mb-6 text-sm font-medium text-gray-500 transition hover:text-[#5b3df5]"
                            >
                                ← Back
                            </button>

                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#5b3df5]">
                                <Sparkles size={27} />
                            </div>

                            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[#5b3df5]">
                                Your capabilities
                            </p>

                            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                                What can you bring to the table?
                            </h1>

                            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
                                Tell TogetherWorks about your skills,
                                products, resources, connections, or anything
                                else you can contribute. Our AI will help
                                identify where those capabilities could create
                                opportunities.
                            </p>

                            {/* Name */}
                            <div className="mt-8 text-left">
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-semibold text-[#171725]"
                                >
                                    What should we call you?
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                    placeholder="e.g. Ama"
                                    className="w-full rounded-2xl border border-[#e5e7eb] bg-white px-5 py-4 text-base text-[#171725] outline-none transition placeholder:text-gray-400 focus:border-[#5b3df5] focus:ring-4 focus:ring-[#5b3df5]/10"
                                />
                            </div>

                            {/* Capabilities */}
                            <div className="mt-5 text-left">
                                <label
                                    htmlFor="capabilities"
                                    className="mb-2 block text-sm font-semibold text-[#171725]"
                                >
                                    Tell us what you can contribute
                                </label>

                                <textarea
                                    id="capabilities"
                                    value={input}
                                    onChange={(event) =>
                                        setInput(event.target.value)
                                    }
                                    placeholder="For example: I make handmade bags, can produce around 20 bags a week, have 50 regular customers on WhatsApp, and I am based in Accra."
                                    rows={6}
                                    className="w-full resize-none rounded-2xl border border-[#e5e7eb] bg-white px-5 py-4 text-base leading-7 text-[#171725] outline-none transition placeholder:text-gray-400 focus:border-[#5b3df5] focus:ring-4 focus:ring-[#5b3df5]/10"
                                />
                            </div>

                            {/* CTA */}
                            <button
                                type="button"
                                onClick={handleAnalyze}
                                disabled={
                                    !name.trim() ||
                                    !input.trim() ||
                                    isAnalyzing
                                }
                                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#5b3df5] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#5b3df5]/20 transition hover:bg-[#4728d9] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                            >
                                Discover what I can build
                                <ArrowRight className="ml-2" size={18} />
                            </button>

                            <p className="mt-4 text-xs text-gray-400">
                                You can edit your information later.
                            </p>
                        </div>
                    </section>
                )}
            </div>
        </main>
    )
}

