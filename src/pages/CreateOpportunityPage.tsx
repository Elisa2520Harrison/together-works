import { useState } from 'react'
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    MapPin,
    Sparkles,
    Users,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface Demand {
    title: string
    description: string
    quantity: number | null
    unit: string
    capability: string
    location: string
    deadline: string
    context: string
}

function analyzeDemand(input: string): Demand {
    const normalized = input.toLowerCase()

    let quantity: number | null = null

    const quantityMatch = normalized.match(
        /(\d+)\s+(?:people|persons|workers|professionals|braiders|sellers|suppliers|designers|seamstresses|tailors|drivers|cooks|bakers)/,
    )

    if (quantityMatch) {
        quantity = Number(quantityMatch[1])
    }

    let capability = 'Skilled professionals'
    let unit = 'people'
    let title = 'Team needed'

    if (
        normalized.includes('hair braider') ||
        normalized.includes('hair braiders') ||
        normalized.includes('braiding')
    ) {
        capability = 'Hair braiding'
        unit = 'hair braiders'
        title = 'Hair braiding team'
    } else if (
        normalized.includes('tomato seller') ||
        normalized.includes('tomato sellers') ||
        normalized.includes('tomatoes')
    ) {
        capability = 'Tomato supply'
        unit = 'tomato suppliers'
        title = 'Tomato supply team'
    } else if (
        normalized.includes('seamstress') ||
        normalized.includes('seamstresses') ||
        normalized.includes('tailor') ||
        normalized.includes('tailors')
    ) {
        capability = 'Tailoring and garment production'
        unit = 'tailors'
        title = 'Tailoring team'
    } else if (
        normalized.includes('makeup artist') ||
        normalized.includes('makeup artists')
    ) {
        capability = 'Makeup artistry'
        unit = 'makeup artists'
        title = 'Makeup artist team'
    } else if (
        normalized.includes('caterer') ||
        normalized.includes('caterers') ||
        normalized.includes('catering')
    ) {
        capability = 'Catering'
        unit = 'caterers'
        title = 'Catering team'
    } else if (
        normalized.includes('delivery') ||
        normalized.includes('drivers') ||
        normalized.includes('driver')
    ) {
        capability = 'Delivery and logistics'
        unit = 'delivery professionals'
        title = 'Delivery team'
    } else if (
        normalized.includes('developer') ||
        normalized.includes('developers')
    ) {
        capability = 'Software development'
        unit = 'developers'
        title = 'Development team'
    } else if (
        normalized.includes('designer') ||
        normalized.includes('designers')
    ) {
        capability = 'Design'
        unit = 'designers'
        title = 'Design team'
    }

    let location = 'Location not specified'

    if (normalized.includes('accra')) {
        location = 'Accra'
    } else if (normalized.includes('kumasi')) {
        location = 'Kumasi'
    } else if (normalized.includes('tema')) {
        location = 'Tema'
    } else if (normalized.includes('cape coast')) {
        location = 'Cape Coast'
    } else if (normalized.includes('takoradi')) {
        location = 'Takoradi'
    }

    let deadline = 'Deadline not specified'

    if (normalized.includes('saturday')) {
        deadline = 'Saturday'
    } else if (normalized.includes('sunday')) {
        deadline = 'Sunday'
    } else if (normalized.includes('monday')) {
        deadline = 'Monday'
    } else if (normalized.includes('tomorrow')) {
        deadline = 'Tomorrow'
    } else if (normalized.includes('next week')) {
        deadline = 'Next week'
    }

    let context = 'General business opportunity'

    if (normalized.includes('wedding')) {
        context = 'Wedding event'
    } else if (normalized.includes('event')) {
        context = 'Event'
    } else if (normalized.includes('restaurant')) {
        context = 'Restaurant supply'
    } else if (normalized.includes('school')) {
        context = 'School supply'
    } else if (normalized.includes('corporate')) {
        context = 'Corporate requirement'
    }

    return {
        title,
        description: input.trim(),
        quantity,
        unit,
        capability,
        location,
        deadline,
        context,
    }
}

export default function CreateOpportunityPage() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [input, setInput] = useState('')
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [demand, setDemand] = useState<Demand | null>(null)

    async function handleAnalyze() {
        if (!name.trim() || !input.trim()) {
            return
        }

        setIsAnalyzing(true)

        await new Promise((resolve) =>
            setTimeout(resolve, 1200),
        )

        const result = analyzeDemand(input)

        const savedProfile = sessionStorage.getItem(
            'togetherworks_profile',
        )

        let existingProfile: Record<string, any> = {}

        if (savedProfile) {
            try {
                existingProfile = JSON.parse(savedProfile)
            } catch (error) {
                console.error(
                    'Failed to load existing TogetherWorks profile:',
                    error,
                )
            }
        }

        sessionStorage.setItem(
            'togetherworks_profile',
            JSON.stringify({
                ...existingProfile,
                name: name.trim(),
                skills: existingProfile.skills ?? [],
                products: existingProfile.products ?? [],
                resources: existingProfile.resources ?? [],
                capacity: existingProfile.capacity ?? [],
                location: existingProfile.location ?? '',
            }),
        )

        sessionStorage.setItem(
            'togetherworks_demand',
            JSON.stringify(result),
        )

        setDemand(result)
        setIsAnalyzing(false)
    }

    function handleReset() {
        setDemand(null)
        setInput('')
        sessionStorage.removeItem('togetherworks_demand')
    }

    if (demand) {
        return (
            <main className="min-h-screen bg-[#f8f9fc]">
                <header className="border-b border-[#e5e7eb] bg-white">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b3df5] text-sm font-bold text-white">
                                T
                            </div>

                            <span className="text-lg font-semibold text-[#171725]">
                                TogetherWorks
                            </span>
                        </div>

                        <span className="text-sm font-medium text-gray-400">
                            Create opportunity
                        </span>
                    </div>
                </header>

                <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center text-sm font-semibold text-gray-600 transition hover:text-[#5b3df5]"
                    >
                        <ArrowLeft
                            className="mr-2"
                            size={17}
                        />
                        Edit request
                    </button>

                    <section className="mt-7">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#5b3df5]">
                            <Sparkles size={16} />
                            AI demand analysis
                        </div>

                        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                            Here's what TogetherWorks understood.
                        </h1>

                        <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                            We've structured your request so we can
                            find the right capabilities to help fulfill
                            it.
                        </p>
                    </section>

                    <section className="mt-8 rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#5b3df5]">
                                <Sparkles size={23} />
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-[#5b3df5]">
                                    Opportunity
                                </p>

                                <h2 className="mt-1 text-2xl font-bold text-[#171725]">
                                    {demand.title}
                                </h2>

                                <p className="mt-2 leading-7 text-gray-600">
                                    {demand.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl bg-[#f8f9fc] p-4">
                                <p className="text-xs text-gray-400">
                                    What you need
                                </p>

                                <p className="mt-1 font-semibold text-[#171725]">
                                    {demand.capability}
                                </p>
                            </div>

                            <div className="rounded-2xl bg-[#f8f9fc] p-4">
                                <p className="text-xs text-gray-400">
                                    Quantity
                                </p>

                                <p className="mt-1 font-semibold text-[#171725]">
                                    {demand.quantity
                                        ? `${demand.quantity} ${demand.unit}`
                                        : 'Not specified'}
                                </p>
                            </div>

                            <div className="rounded-2xl bg-[#f8f9fc] p-4">
                                <p className="text-xs text-gray-400">
                                    Location
                                </p>

                                <p className="mt-1 flex items-center gap-1.5 font-semibold text-[#171725]">
                                    <MapPin size={15} />
                                    {demand.location}
                                </p>
                            </div>

                            <div className="rounded-2xl bg-[#f8f9fc] p-4">
                                <p className="text-xs text-gray-400">
                                    Deadline
                                </p>

                                <p className="mt-1 flex items-center gap-1.5 font-semibold text-[#171725]">
                                    <CalendarDays size={15} />
                                    {demand.deadline}
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 rounded-2xl border border-[#eeeaff] bg-[#faf9ff] p-4">
                            <p className="text-xs text-gray-400">
                                Context
                            </p>

                            <p className="mt-1 font-semibold text-[#171725]">
                                {demand.context}
                            </p>
                        </div>
                    </section>

                    <section className="mt-6 rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm sm:p-7">
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff8e7] text-[#9a6b00]">
                                <Users size={21} />
                            </div>

                            <div>
                                <h2 className="font-bold text-[#171725]">
                                    Next, we'll find the right people
                                </h2>

                                <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500">
                                    TogetherWorks will look for people
                                    whose capabilities, availability and
                                    location can help fulfill this
                                    demand.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="rounded-xl border border-[#e5e7eb] px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-white"
                        >
                            Edit request
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                navigate(
                                    '/create-opportunity/matches',
                                )
                            }
                            className="inline-flex items-center justify-center rounded-xl bg-[#5b3df5] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#5b3df5]/20 transition hover:bg-[#4728d9]"
                        >
                            Find people
                            <ArrowRight
                                className="ml-2"
                                size={16}
                            />
                        </button>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#f8f9fc]">
            <header className="border-b border-[#e5e7eb] bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => navigate('/onboarding')}
                            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b3df5] text-sm font-bold text-white transition hover:bg-[#4728d9]"
                            aria-label="Go to onboarding"
                        >
                            T
                        </button>

                        <span className="text-lg font-semibold text-[#171725]">
                            TogetherWorks
                        </span>
                    </div>

                    <span className="text-sm font-medium text-gray-400">
                        Create opportunity
                    </span>
                </div>
            </header>

            <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12">
                <button
                    type="button"
                    onClick={() => navigate('/home')}
                    className="inline-flex items-center text-sm font-semibold text-gray-600 transition hover:text-[#5b3df5]"
                >
                    <ArrowLeft
                        className="mr-2"
                        size={17}
                    />
                    Back to home
                </button>

                {!isAnalyzing && (
                    <section className="mt-7 rounded-3xl border border-[#e5e7eb] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-14">
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eeeaff] text-[#5b3df5]">
                                <Sparkles size={27} />
                            </div>

                            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[#5b3df5]">
                                Create something bigger
                            </p>

                            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                                What do you need?
                            </h1>

                            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
                                Describe what you're trying to accomplish
                                in your own words. Tell us what you need,
                                how many people or resources you need,
                                where and when you need them.
                            </p>

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

                            <div className="mt-5 text-left">
                                <label
                                    htmlFor="demand"
                                    className="mb-2 block text-sm font-semibold text-[#171725]"
                                >
                                    Describe your opportunity
                                </label>

                                <textarea
                                    id="demand"
                                    value={input}
                                    onChange={(event) =>
                                        setInput(event.target.value)
                                    }
                                    placeholder="For example: I have a wedding in Accra on Saturday and I need 12 experienced hair braiders to handle the guests. I can handle booking and customer communication."
                                    rows={7}
                                    className="w-full resize-none rounded-2xl border border-[#e5e7eb] bg-white px-5 py-4 text-base leading-7 text-[#171725] outline-none transition placeholder:text-gray-400 focus:border-[#5b3df5] focus:ring-4 focus:ring-[#5b3df5]/10"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={handleAnalyze}
                                disabled={
                                    !name.trim() || !input.trim()
                                }
                                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#5b3df5] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#5b3df5]/20 transition hover:bg-[#4728d9] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                            >
                                Analyze my opportunity
                                <ArrowRight
                                    className="ml-2"
                                    size={18}
                                />
                            </button>

                            <p className="mt-4 text-xs text-gray-400">
                                You don't need to know the right business
                                terms. Just describe what you need
                                naturally.
                            </p>
                        </div>
                    </section>
                )}

                {isAnalyzing && (
                    <section className="mt-7 rounded-3xl border border-[#e5e7eb] bg-white px-6 py-16 text-center shadow-sm sm:px-10">
                        <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-[#eeeaff] text-[#5b3df5]">
                            <Sparkles size={30} />
                        </div>

                        <h1 className="mt-6 text-2xl font-bold text-[#171725]">
                            Understanding what you need...
                        </h1>

                        <p className="mx-auto mt-3 max-w-lg leading-7 text-gray-600">
                            TogetherWorks is turning your request into
                            structured demand so it can find the right
                            capabilities.
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