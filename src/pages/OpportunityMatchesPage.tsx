import { useEffect, useState } from 'react'
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Clock3,
    MapPin,
    ShieldCheck,
    Sparkles,
    Star,
    Trophy,
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

interface Match {
    id: number
    name: string
    email: string
    initials: string
    matchScore: number
    capability: string
    location: string
    availability: string
    experience: string
    contribution: string
    matchedReasons: string[]
    partialReason?: string
    verified: boolean

    // Trust signals for MVP
    rating: number
    completedOpportunities: number
    capabilityEvidence: string[]
}

const matches: Match[] = [
    {
        id: 1,
        name: 'Ama Mensah',
        initials: 'AM',
        email: 'elizabethtemi1@gmail.com',
        matchScore: 96,
        capability: 'Hair braiding',
        location: 'Accra',
        availability: 'Available Saturday',
        experience: '5 years experience',
        contribution:
            'Specialises in bridal and event hairstyles and can handle multiple clients with a small team.',
        matchedReasons: [
            'Hair braiding',
            'Accra',
            'Available Saturday',
            'Event experience',
        ],
        verified: true,
        rating: 4.9,
        completedOpportunities: 18,
        capabilityEvidence: [
            'Bridal styling',
            'Event braiding',
            'Large-group styling',
        ],
    },
    {
        id: 2,
        name: 'Akosua Beauty Hub',
        email: 'estherbanga90@gmail.com',
        initials: 'AB',
        matchScore: 92,
        capability: 'Hair braiding & styling',
        location: 'Accra',
        availability: 'Available Saturday',
        experience: '4 years experience',
        contribution:
            'Can provide a team of experienced braiders and coordinate styling for larger events.',
        matchedReasons: [
            'Hair braiding',
            'Accra',
            'Available Saturday',
            'Team capacity',
        ],
        verified: true,
        rating: 4.8,
        completedOpportunities: 14,
        capabilityEvidence: [
            'Team of braiders',
            'Event styling',
            'Client coordination',
        ],
    },
    {
        id: 3,
        name: 'Nana Yaa Styles',
        email: 'jenniferblebu702@gmail.com',
        initials: 'NY',
        matchScore: 87,
        capability: 'Hair braiding',
        location: 'Tema',
        availability: 'Available Saturday',
        experience: '3 years experience',
        contribution:
            'Experienced braider who regularly works on weddings and private events.',
        matchedReasons: [
            'Hair braiding',
            'Available Saturday',
            'Wedding experience',
        ],
        partialReason: 'Based in Tema rather than Accra.',
        verified: true,
        rating: 4.7,
        completedOpportunities: 9,
        capabilityEvidence: [
            'Wedding styling',
            'Private events',
            'Braiding',
        ],
    },
    {
        id: 4,
        name: 'Esi Braids',
        email: 'esibraids@gmail.com',
        initials: 'EB',
        matchScore: 81,
        capability: 'Hair braiding',
        location: 'Accra',
        availability: 'Availability needs confirmation',
        experience: '4 years experience',
        contribution:
            'Experienced in event styling and can contribute to a larger braiding team.',
        matchedReasons: [
            'Hair braiding',
            'Accra',
            'Event experience',
        ],
        partialReason: 'Saturday availability needs confirmation.',
        verified: false,
        rating: 4.6,
        completedOpportunities: 7,
        capabilityEvidence: [
            'Event styling',
            'Hair braiding',
        ],
    },
]

export default function OpportunityMatchesPage() {
    const navigate = useNavigate()

    const [demand, setDemand] = useState<Demand | null>(null)
    const [invitedIds, setInvitedIds] = useState<number[]>([])
    const [invitingId, setInvitingId] = useState<number | null>(null)

    useEffect(() => {
        const savedDemand = sessionStorage.getItem(
            'togetherworks_demand',
        )

        if (!savedDemand) {
            return
        }

        try {
            setDemand(JSON.parse(savedDemand))
        } catch (error) {
            console.error(
                'Failed to load TogetherWorks demand:',
                error,
            )
        }
    }, [])

    async function handleInvite(match: Match) {
        if (invitedIds.includes(match.id) || invitingId === match.id) {
            return
        }

        setInvitingId(match.id)

        try {
            const response = await fetch('/api/invitations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    recipientEmail: match.email,
                    recipientName: match.name,
                    opportunityTitle:
                        demand?.title ?? 'TogetherWorks opportunity',
                    opportunityDescription:
                        demand?.description ?? '',
                    location:
                        demand?.location ?? 'Not specified',
                    deadline:
                        demand?.deadline ?? 'Not specified',
                    matchScore: match.matchScore,
                    matchedReasons: match.matchedReasons,
                }),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(
                    result.error ||
                    'Failed to send invitation',
                )
            }

            setInvitedIds((current) =>
                current.includes(match.id)
                    ? current
                    : [...current, match.id],
            )
        } catch (error) {
            console.error(
                'Failed to send invitation:',
                error,
            )

            window.alert(
                'We could not send the invitation. Please try again.',
            )
        } finally {
            setInvitingId(null)
        }
    }

    return (
        <main className="min-h-screen bg-[#f8f9fc]">
            {/* Header */}
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

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Sparkles
                            size={15}
                            className="text-[#5b3df5]"
                        />
                        AI matching
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
                {/* Back */}
                <button
                    type="button"
                    onClick={() =>
                        navigate('/create-opportunity')
                    }
                    className="inline-flex items-center text-sm font-semibold text-gray-600 transition hover:text-[#5b3df5]"
                >
                    <ArrowLeft className="mr-2" size={17} />
                    Back to request
                </button>

                {/* Heading */}
                <section className="mt-7">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#5b3df5]">
                        <Sparkles size={16} />
                        TogetherWorks matching engine
                    </div>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                        People who could help make this happen
                    </h1>

                    <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                        We matched your request against capabilities,
                        location, availability and experience.
                    </p>
                </section>

                {/* Request summary */}
                <section className="mt-8 rounded-3xl border border-[#e5e7eb] bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                Your opportunity
                            </p>

                            <h2 className="mt-1 text-xl font-bold text-[#171725]">
                                {demand?.title ??
                                    'Your opportunity'}
                            </h2>

                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                                {demand?.description ??
                                    'We are looking for people whose capabilities match your request.'}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:flex">
                            <div className="rounded-xl bg-[#f8f9fc] px-4 py-3">
                                <p className="text-[11px] text-gray-400">
                                    Need
                                </p>

                                <p className="mt-1 text-sm font-semibold text-[#171725]">
                                    {demand?.quantity
                                        ? `${demand.quantity} ${demand.unit}`
                                        : demand?.capability ??
                                        'People'}
                                </p>
                            </div>

                            <div className="rounded-xl bg-[#f8f9fc] px-4 py-3">
                                <p className="text-[11px] text-gray-400">
                                    Location
                                </p>

                                <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-[#171725]">
                                    <MapPin size={13} />
                                    {demand?.location ?? 'Not specified'}
                                </p>
                            </div>

                            <div className="rounded-xl bg-[#f8f9fc] px-4 py-3">
                                <p className="text-[11px] text-gray-400">
                                    Deadline
                                </p>

                                <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-[#171725]">
                                    <Clock3 size={13} />
                                    {demand?.deadline ?? 'Not specified'}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Match summary */}
                <section className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-[#171725]">
                            {matches.length} potential matches
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Ranked by how well their capabilities fit your
                            request.
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#eeeaff] px-4 py-2 text-xs font-semibold text-[#5b3df5]">
                        <Sparkles size={14} />
                        AI-ranked
                    </div>
                </section>

                {/* Matches */}
                <section className="mt-5 space-y-4">
                    {matches.map((match) => {
                        const invited = invitedIds.includes(match.id)

                        return (
                            <article
                                key={match.id}
                                className="rounded-3xl border border-[#e5e7eb] bg-white p-5 shadow-sm sm:p-6"
                            >
                                <div className="flex flex-col gap-5 lg:flex-row">
                                    {/* Person */}
                                    <div className="flex min-w-0 flex-1 gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eeeaff] text-sm font-bold text-[#5b3df5]">
                                            {match.initials}
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h3 className="text-lg font-bold text-[#171725]">
                                                    {match.name}
                                                </h3>

                                                {match.verified && (
                                                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                                                        <ShieldCheck
                                                            size={12}
                                                        />
                                                        Verified profile
                                                    </span>
                                                )}
                                            </div>

                                            <p className="mt-1 text-sm font-medium text-gray-700">
                                                {match.capability}
                                            </p>

                                            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                                                <span className="inline-flex items-center gap-1">
                                                    <MapPin size={13} />
                                                    {match.location}
                                                </span>

                                                <span className="inline-flex items-center gap-1">
                                                    <Clock3 size={13} />
                                                    {match.availability}
                                                </span>

                                                <span>
                                                    {match.experience}
                                                </span>
                                            </div>

                                            {/* Trust signals */}
                                            <div className="mt-3 flex flex-wrap items-center gap-3">
                                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600">
                                                    <Star
                                                        size={13}
                                                        className="fill-current"
                                                    />
                                                    {match.rating.toFixed(1)}
                                                </span>

                                                <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                                                    <Trophy size={13} />
                                                    {match.completedOpportunities}{' '}
                                                    opportunities completed
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Score */}
                                    <div className="flex shrink-0 items-center gap-3 lg:flex-col lg:items-end lg:justify-center">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-green-700">
                                            {match.matchScore}%
                                        </div>

                                        <span className="text-xs font-semibold text-gray-400">
                                            match
                                        </span>
                                    </div>
                                </div>

                                {/* Contribution */}
                                <div className="mt-5 rounded-2xl bg-[#f8f9fc] p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                        What they bring
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-gray-700">
                                        {match.contribution}
                                    </p>
                                </div>

                                {/* Capability evidence */}
                                <div className="mt-5">
                                    <div className="flex items-center gap-2">
                                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                            Capability evidence
                                        </p>

                                        <span className="rounded-full bg-[#eeeaff] px-2 py-0.5 text-[10px] font-semibold text-[#5b3df5]">
                                            Profile evidence
                                        </span>
                                    </div>

                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {match.capabilityEvidence.map(
                                            (evidence) => (
                                                <span
                                                    key={evidence}
                                                    className="inline-flex items-center gap-1.5 rounded-full border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-medium text-gray-600"
                                                >
                                                    <CheckCircle2
                                                        size={13}
                                                        className="text-[#5b3df5]"
                                                    />
                                                    {evidence}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Match reasons */}
                                <div className="mt-5">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                        Why this is a match
                                    </p>

                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {match.matchedReasons.map(
                                            (reason) => (
                                                <span
                                                    key={reason}
                                                    className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700"
                                                >
                                                    <CheckCircle2
                                                        size={13}
                                                    />
                                                    {reason}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {match.partialReason && (
                                    <p className="mt-4 text-xs leading-5 text-gray-500">
                                        <span className="font-semibold text-[#171725]">
                                            Note:
                                        </span>{' '}
                                        {match.partialReason}
                                    </p>
                                )}

                                {/* Trust note */}
                                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#e5e7eb] bg-white p-4">
                                    <ShieldCheck
                                        size={17}
                                        className="mt-0.5 shrink-0 text-[#5b3df5]"
                                    />

                                    <div>
                                        <p className="text-xs font-semibold text-[#171725]">
                                            Trust signals
                                        </p>

                                        <p className="mt-1 text-xs leading-5 text-gray-500">
                                            {match.verified
                                                ? 'This profile includes verification and capability evidence.'
                                                : 'This profile has not completed verification yet.'}
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-6 flex flex-col gap-3 border-t border-[#e5e7eb] pt-5 sm:flex-row sm:items-center sm:justify-between">
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center text-sm font-semibold text-gray-600 transition hover:text-[#5b3df5]"
                                    >
                                        Why this match?
                                        <ArrowRight
                                            className="ml-1.5"
                                            size={15}
                                        />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => handleInvite(match)}
                                        disabled={
                                            invited || invitingId === match.id
                                        }
                                        className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${invited
                                            ? 'cursor-default bg-green-50 text-green-700'
                                            : 'bg-[#5b3df5] text-white hover:bg-[#4728d9]'
                                            }`}
                                    >
                                        {invited ? (
                                            <>
                                                <CheckCircle2
                                                    className="mr-2"
                                                    size={16}
                                                />
                                                Invitation sent
                                            </>
                                        ) : invitingId === match.id ? (
                                            'Sending invitation...'
                                        ) : (
                                            <>
                                                Invite to opportunity
                                                <ArrowRight
                                                    className="ml-2"
                                                    size={16}
                                                />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </article>
                        )
                    })}
                </section>

                {/* Team building */}
                <section className="mt-8 rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm sm:p-7">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff8e7] text-[#9a6b00]">
                                <Users size={21} />
                            </div>

                            <div>
                                <h2 className="font-bold text-[#171725]">
                                    Build the right team
                                </h2>

                                <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500">
                                    You don't need to choose everyone at once.
                                    Invite the people who best fit your
                                    opportunity and build your team together.
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => navigate('/home')}
                            className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[#e5e7eb] px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                        >
                            Back to home
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}

