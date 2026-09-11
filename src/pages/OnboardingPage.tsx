import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { extractCapabilities } from '../services/ai'

export default function OnboardingPage() {
    const navigate = useNavigate()

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

    return (
        <main className="min-h-screen bg-[#f8f9fc] px-6 py-8 sm:px-8">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-10 flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b3df5] text-sm font-bold text-white">
                        T
                    </div>

                    <span className="text-lg font-semibold text-[#171725]">
                        TogetherWorks
                    </span>
                </div>

                {/* Onboarding */}
                {!isAnalyzing && (
                    <section className="rounded-3xl border border-[#e5e7eb] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#5b3df5]">
                                <Sparkles size={27} />
                            </div>

                            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[#5b3df5]">
                                Let's discover your possibilities
                            </p>

                            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                                What can you bring to the table?
                            </h1>

                            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
                                Tell TogetherWorks about your skills,
                                products, resources, connections, or anything
                                else you can contribute. Our AI will look for
                                opportunities you could build with others.
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
                                    What can you bring?
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

                {/* AI Analysis */}
                {isAnalyzing && (
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
                )}
            </div>
        </main>
    )
}