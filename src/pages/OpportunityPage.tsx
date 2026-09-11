import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Clock3,
    MapPin,
    ShieldCheck,
    Sparkles,
    Users,
    Wrench,
} from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { opportunities } from '../data/opportunities'

interface TeamMember {
    name: string
    role: string
    capability: string
    reason: string
    status: 'Established' | 'Verified' | 'New'
}

const teamMembers: Record<string, TeamMember[]> = {
    'school-uniforms': [
        {
            name: 'Esi',
            role: 'Sourcing',
            capability: 'Fabric sourcing',
            reason:
                'Her supplier relationships can provide the required fabric within the 21-day timeline.',
            status: 'Established',
        },
        {
            name: 'Abena',
            role: 'Finishing',
            capability: 'Embroidery',
            reason:
                'She has embroidery equipment that can handle the school branding requirements.',
            status: 'Verified',
        },
        {
            name: 'Yaa',
            role: 'Logistics',
            capability: 'Delivery',
            reason:
                'Her local delivery capacity can support distribution across Accra.',
            status: 'Established',
        },
    ],
    'corporate-gift-bags': [
        {
            name: 'Akosua',
            role: 'Branding',
            capability: 'Design and branding',
            reason:
                'Her branding experience can turn the bags into a consistent corporate product.',
            status: 'Verified',
        },
        {
            name: 'Esi',
            role: 'Sourcing',
            capability: 'Material sourcing',
            reason:
                'Her supplier relationships can support the required materials.',
            status: 'Established',
        },
    ],
    'event-merchandise': [
        {
            name: 'Akosua',
            role: 'Marketing',
            capability: 'Marketing',
            reason:
                'Her community and event relationships can support promotion and distribution.',
            status: 'Verified',
        },
        {
            name: 'Abena',
            role: 'Finishing',
            capability: 'Creative production',
            reason:
                'Her production skills complement the manufacturing requirements.',
            status: 'Established',
        },
    ],
    'food-packaging': [
        {
            name: 'Yaa',
            role: 'Logistics',
            capability: 'Delivery',
            reason:
                'Her delivery capacity can support recurring routes.',
            status: 'Established',
        },
        {
            name: 'Akosua',
            role: 'Sales',
            capability: 'Customer relationships',
            reason:
                'Her customer network can support weekly distribution.',
            status: 'Verified',
        },
    ],
    'community-arts': [
        {
            name: 'Akosua',
            role: 'Marketing',
            capability: 'Marketing',
            reason:
                'Her community network can help reach event and gift-market customers.',
            status: 'Verified',
        },
        {
            name: 'Esi',
            role: 'Sourcing',
            capability: 'Local sourcing',
            reason:
                'Her relationships can support consistent material sourcing.',
            status: 'Established',
        },
    ],
}

export default function OpportunityPage() {
    const navigate = useNavigate()
    const { opportunityId } = useParams()

    const opportunity = opportunities.find(
        (item) => item.id === opportunityId,
    )

    if (!opportunity) {
        return (
            <main className="min-h-screen bg-[#f8f9fc] px-5 py-8 sm:px-8">
                <div className="mx-auto max-w-4xl">
                    <button
                        type="button"
                        onClick={() => navigate('/home')}
                        className="inline-flex items-center text-sm font-semibold text-gray-600 transition hover:text-[#5b3df5]"
                    >
                        <ArrowLeft className="mr-2" size={17} />
                        Back to opportunities
                    </button>

                    <section className="mt-10 rounded-3xl border border-[#e5e7eb] bg-white p-8 text-center shadow-sm sm:p-12">
                        <Sparkles
                            size={32}
                            className="mx-auto text-[#5b3df5]"
                        />

                        <h1 className="mt-5 text-2xl font-bold text-[#171725]">
                            Opportunity not found
                        </h1>

                        <p className="mt-3 text-gray-600">
                            We couldn't find the opportunity you're looking
                            for.
                        </p>
                    </section>
                </div>
            </main>
        )
    }

    const members = teamMembers[opportunity.id] ?? []

    const isSchoolUniforms =
        opportunity.id === 'school-uniforms'

    const feasibilityScore = isSchoolUniforms ? 91 : 82

    const userCapabilities =
        opportunity.id === 'school-uniforms'
            ? [
                'Production capacity',
                'Sewing',
                'Sewing machines',
            ]
            : ['Relevant capabilities']

    const missingCapabilities =
        opportunity.id === 'school-uniforms'
            ? ['Fabric sourcing', 'Embroidery', 'Delivery']
            : opportunity.requiredCapabilities.slice(0, 3)

    return (
        <main className="min-h-screen bg-[#f8f9fc]">
            {/* Header */}
            <header className="border-b border-[#e5e7eb] bg-white">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
                    <button
                        type="button"
                        onClick={() => navigate('/home')}
                        className="inline-flex items-center text-sm font-semibold text-gray-600 transition hover:text-[#5b3df5]"
                    >
                        <ArrowLeft className="mr-2" size={17} />
                        Back
                    </button>

                    <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b3df5] text-sm font-bold text-white">
                            T
                        </div>

                        <span className="hidden text-lg font-semibold text-[#171725] sm:inline">
                            TogetherWorks
                        </span>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
                {/* Intro */}
                <section>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#5b3df5]">
                        <Sparkles size={16} />
                        Opportunity analysis
                    </div>

                    <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                        {opportunity.title}
                    </h1>

                    <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
                        {opportunity.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-gray-600 shadow-sm ring-1 ring-[#e5e7eb]">
                            {opportunity.budget}
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-gray-600 shadow-sm ring-1 ring-[#e5e7eb]">
                            <Clock3 size={14} />
                            {opportunity.deadline}
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-gray-600 shadow-sm ring-1 ring-[#e5e7eb]">
                            <MapPin size={14} />
                            {opportunity.location}
                        </span>
                    </div>
                </section>

                {/* Feasibility */}
                <section className="mt-8 rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                                    <CheckCircle2 size={22} />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-gray-500">
                                        Team feasibility
                                    </p>

                                    <h2 className="text-2xl font-bold text-[#171725]">
                                        {feasibilityScore}% feasible
                                    </h2>
                                </div>
                            </div>

                            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600">
                                TogetherWorks found a combination of
                                capabilities that could realistically fulfill
                                this opportunity.
                            </p>
                        </div>

                        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[#f0edff]">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-[#5b3df5]">
                                    {feasibilityScore}%
                                </p>

                                <p className="text-[11px] font-medium text-gray-500">
                                    feasible
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            'Skills',
                            'Capacity',
                            'Resources',
                            'Timeline',
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3"
                            >
                                <CheckCircle2
                                    size={16}
                                    className="shrink-0 text-green-600"
                                />

                                <span className="text-sm font-medium text-green-800">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* User contribution */}
                <section className="mt-6 rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eeeaff] text-[#5b3df5]">
                            <Sparkles size={21} />
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-lg font-bold text-[#171725]">
                                What you bring
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Your capabilities already cover part of this
                                opportunity.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {userCapabilities.map((capability) => (
                                    <span
                                        key={capability}
                                        className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-700"
                                    >
                                        <CheckCircle2 size={13} />
                                        {capability}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-[#e5e7eb] pt-6">
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                            Still needed
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {missingCapabilities.map((capability) => (
                                <span
                                    key={capability}
                                    className="rounded-full bg-[#f8f9fc] px-3 py-2 text-xs font-medium text-gray-600"
                                >
                                    + {capability}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="mt-6">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-[#5b3df5]">
                                <Users size={16} />
                                Team discovery
                            </div>

                            <h2 className="mt-2 text-2xl font-bold text-[#171725]">
                                People who could complete the team
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                TogetherWorks found complementary capabilities
                                in the network.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {members.map((member) => (
                            <article
                                key={member.name}
                                className="rounded-3xl border border-[#e5e7eb] bg-white p-5 shadow-sm"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eeeaff] text-sm font-bold text-[#5b3df5]">
                                        {member.name.charAt(0)}
                                    </div>

                                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                                        <ShieldCheck size={12} />
                                        {member.status}
                                    </span>
                                </div>

                                <h3 className="mt-4 font-bold text-[#171725]">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-xs font-medium text-[#5b3df5]">
                                    {member.role}
                                </p>

                                <div className="mt-4 rounded-xl bg-[#f8f9fc] p-3">
                                    <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                                        Capability
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#171725]">
                                        {member.capability}
                                    </p>
                                </div>

                                <p className="mt-4 text-sm leading-6 text-gray-600">
                                    {member.reason}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Constraint */}
                <section className="mt-6 rounded-3xl border border-[#f1dfb4] bg-[#fffaf0] p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0c9] text-[#9a6b00]">
                            <Wrench size={21} />
                        </div>

                        <div>
                            <h2 className="font-bold text-[#171725]">
                                One constraint to solve
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                {isSchoolUniforms
                                    ? 'The team may need 2 additional sewing machines to comfortably meet the 21-day deadline.'
                                    : 'The team may need one additional resource to comfortably meet the opportunity requirements.'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why this team */}
                <section className="mt-6 rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eeeaff] text-[#5b3df5]">
                            <Sparkles size={21} />
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-[#171725]">
                                Why this team?
                            </h2>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                                Each person was selected because their
                                capability fills a specific requirement that
                                would otherwise be missing from the
                                opportunity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="mt-8 rounded-3xl bg-[#171725] p-6 text-white shadow-lg sm:p-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-[#c9c0ff]">
                                Ready to move forward?
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                Build this opportunity together.
                            </h2>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-300">
                                Turn this team recommendation into a clear
                                plan with roles, responsibilities and next
                                actions.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                navigate(
                                    `/opportunities/${opportunity.id}/workspace`,
                                )
                            }
                            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#5b3df5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4728d9]"
                        >
                            Build opportunity
                            <ArrowRight className="ml-2" size={17} />
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}