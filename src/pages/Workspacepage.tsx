import {
    ArrowLeft,
    CheckCircle2,
    Clock3,
    MapPin,
    Users,
    Wrench,
} from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { opportunities } from '../data/opportunities'

const workspaceData = {
    'school-uniforms': {
        feasibility: 91,
        status: 'Ready to build',
        team: [
            {
                name: 'Ama',
                role: 'Production',
                contribution: 'Sewing and garment production',
            },
            {
                name: 'Esi',
                role: 'Sourcing',
                contribution: 'Fabric sourcing',
            },
            {
                name: 'Abena',
                role: 'Finishing',
                contribution: 'Embroidery and finishing',
            },
            {
                name: 'Yaa',
                role: 'Logistics',
                contribution: 'Delivery and distribution',
            },
        ],
        economics: [
            ['Opportunity budget', 'GH₵30,000'],
            ['Materials & sourcing', 'GH₵12,000'],
            ['Production', 'GH₵10,000'],
            ['Finishing & packaging', 'GH₵4,000'],
            ['Logistics', 'GH₵2,000'],
        ],
        timeline: [
            {
                days: 'Days 1–3',
                title: 'Source materials',
                description:
                    'Confirm fabric quantities, pricing and delivery.',
            },
            {
                days: 'Days 2–7',
                title: 'Prepare production',
                description:
                    'Prepare patterns, measurements and production stations.',
            },
            {
                days: 'Days 5–17',
                title: 'Produce uniforms',
                description:
                    'Complete the main sewing and garment production.',
            },
            {
                days: 'Days 15–19',
                title: 'Finish and inspect',
                description:
                    'Complete embroidery, finishing and quality checks.',
            },
            {
                days: 'Days 19–21',
                title: 'Deliver',
                description:
                    'Package and deliver the completed uniforms.',
            },
        ],
        dependencies: [
            '2 additional sewing machines',
            'Fabric quantity and pricing confirmation',
            'Team availability confirmation',
        ],
        actions: [
            'Confirm availability of 2 additional sewing machines',
            'Confirm fabric quantity and supplier pricing',
            'Confirm availability of all team members',
        ],
    },

    'corporate-gift-bags': {
        feasibility: 88,
        status: 'Ready to build',
        team: [
            {
                name: 'Ama',
                role: 'Production',
                contribution: 'Gift bag assembly and production',
            },
            {
                name: 'Akosua',
                role: 'Branding',
                contribution: 'Corporate branding and packaging design',
            },
            {
                name: 'Esi',
                role: 'Sourcing',
                contribution: 'Materials and supplier coordination',
            },
            {
                name: 'Yaa',
                role: 'Logistics',
                contribution: 'Packaging coordination and delivery',
            },
        ],
        economics: [
            ['Opportunity budget', 'GH₵18,000'],
            ['Materials & sourcing', 'GH₵6,500'],
            ['Production', 'GH₵5,000'],
            ['Branding & finishing', 'GH₵3,000'],
            ['Logistics', 'GH₵2,000'],
        ],
        timeline: [
            {
                days: 'Days 1–2',
                title: 'Confirm requirements',
                description:
                    'Confirm quantity, bag specifications, branding and delivery requirements.',
            },
            {
                days: 'Days 2–4',
                title: 'Source materials',
                description:
                    'Confirm suppliers and secure bags, packaging materials and branding supplies.',
            },
            {
                days: 'Days 4–8',
                title: 'Prepare branding',
                description:
                    'Finalize corporate artwork, logos and branding specifications.',
            },
            {
                days: 'Days 7–13',
                title: 'Produce gift bags',
                description:
                    'Assemble, brand and finish the corporate gift bags.',
            },
            {
                days: 'Days 13–15',
                title: 'Inspect and deliver',
                description:
                    'Complete quality checks, package the order and coordinate delivery.',
            },
        ],
        dependencies: [
            'Final quantity and bag specifications',
            'Corporate logo and branding assets',
            'Supplier pricing confirmation',
            'Delivery date confirmation',
        ],
        actions: [
            'Confirm final quantity and bag specifications',
            'Collect corporate branding and logo assets',
            'Confirm supplier pricing and production timeline',
            'Confirm delivery location and date',
        ],
    },

    'event-merchandise': {
        feasibility: 86,
        status: 'Ready to build',
        team: [
            {
                name: 'Akosua',
                role: 'Marketing',
                contribution: 'Event branding and customer coordination',
            },
            {
                name: 'Abena',
                role: 'Creative Production',
                contribution: 'Merchandise design and production',
            },
            {
                name: 'Ama',
                role: 'Production',
                contribution: 'Merchandise preparation and finishing',
            },
            {
                name: 'Yaa',
                role: 'Logistics',
                contribution: 'Packaging and event-day delivery',
            },
        ],
        economics: [
            ['Opportunity budget', 'GH₵22,000'],
            ['Materials & production', 'GH₵10,000'],
            ['Design & branding', 'GH₵4,000'],
            ['Finishing & packaging', 'GH₵3,000'],
            ['Logistics', 'GH₵2,500'],
        ],
        timeline: [
            {
                days: 'Days 1–2',
                title: 'Define merchandise',
                description:
                    'Confirm event requirements, quantities, products and branding direction.',
            },
            {
                days: 'Days 2–5',
                title: 'Create designs',
                description:
                    'Develop merchandise concepts and finalize event branding.',
            },
            {
                days: 'Days 5–10',
                title: 'Produce merchandise',
                description:
                    'Produce the agreed merchandise and complete the main branding work.',
            },
            {
                days: 'Days 10–13',
                title: 'Finish and package',
                description:
                    'Complete quality checks, finishing and event-ready packaging.',
            },
            {
                days: 'Days 13–15',
                title: 'Deliver',
                description:
                    'Coordinate final delivery and ensure the merchandise reaches the event team.',
            },
        ],
        dependencies: [
            'Final merchandise quantity',
            'Event branding and artwork approval',
            'Production supplier confirmation',
            'Event date and delivery location',
        ],
        actions: [
            'Confirm merchandise types and quantities',
            'Approve final event branding and designs',
            'Confirm production supplier and pricing',
            'Confirm event delivery date and location',
        ],
    },
}

export default function WorkspacePage() {
    const navigate = useNavigate()
    const { opportunityId } = useParams()

    const [isStarted, setIsStarted] = useState(false)

    const opportunity = opportunities.find(
        (item) => item.id === opportunityId,
    )

    if (!opportunity) {
        return (
            <main className="min-h-screen bg-[#f8f9fc] px-5 py-8">
                <div className="mx-auto max-w-5xl">
                    <button
                        type="button"
                        onClick={() => navigate('/home')}
                        className="inline-flex items-center text-sm font-semibold text-gray-600 transition hover:text-[#5b3df5]"
                    >
                        <ArrowLeft className="mr-2" size={17} />
                        Back to home
                    </button>

                    <div className="mt-12 rounded-3xl border border-[#e5e7eb] bg-white p-8 text-center shadow-sm">
                        <h1 className="text-2xl font-bold text-[#171725]">
                            Opportunity not found
                        </h1>

                        <p className="mt-2 text-gray-500">
                            We couldn't find this opportunity.
                        </p>
                    </div>
                </div>
            </main>
        )
    }

    const workspace =
        workspaceData[
            opportunity.id as keyof typeof workspaceData
        ]

    if (!workspace) {
        return (
            <main className="min-h-screen bg-[#f8f9fc] px-5 py-8">
                <div className="mx-auto max-w-5xl">
                    <button
                        type="button"
                        onClick={() => navigate('/home')}
                        className="inline-flex items-center text-sm font-semibold text-gray-600 transition hover:text-[#5b3df5]"
                    >
                        <ArrowLeft className="mr-2" size={17} />
                        Back to home
                    </button>

                    <div className="mt-12 rounded-3xl border border-[#e5e7eb] bg-white p-8 text-center shadow-sm">
                        <h1 className="text-2xl font-bold text-[#171725]">
                            Workspace coming soon
                        </h1>

                        <p className="mt-2 text-gray-500">
                            This opportunity does not have a workspace
                            configured yet.
                        </p>
                    </div>
                </div>
            </main>
        )
    }

    function handleStartOpportunity() {
        setIsStarted(true)
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

                    <span className="text-sm font-medium text-gray-400">
                        Opportunity workspace
                    </span>
                </div>
            </header>

            <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
                {/* Back */}
                <button
                    type="button"
                    onClick={() =>
                        navigate(
                            `/opportunities/${opportunity.id}`,
                        )
                    }
                    className="inline-flex items-center text-sm font-semibold text-gray-600 transition hover:text-[#5b3df5]"
                >
                    <ArrowLeft className="mr-2" size={17} />
                    Back to opportunity
                </button>

                {/* Success state */}
                {isStarted && (
                    <section className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-5 sm:p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                                <CheckCircle2 size={23} />
                            </div>

                            <div>
                                <h2 className="font-bold text-green-900">
                                    Opportunity plan started
                                </h2>

                                <p className="mt-1 text-sm leading-6 text-green-800">
                                    Your team plan is ready. The next step is
                                    to confirm the dependencies and align
                                    everyone before production begins.
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Hero */}
                <section className="mt-7 rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm sm:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                                <CheckCircle2 size={14} />
                                {isStarted
                                    ? 'Plan started'
                                    : workspace.status}
                            </div>

                            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                                {opportunity.title}
                            </h1>

                            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                                Your team has the capabilities needed to
                                move this opportunity forward.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
                                <span className="font-semibold text-[#171725]">
                                    {opportunity.budget}
                                </span>

                                <span className="flex items-center gap-1.5">
                                    <Clock3 size={15} />
                                    {opportunity.deadline}
                                </span>

                                <span className="flex items-center gap-1.5">
                                    <MapPin size={15} />
                                    {opportunity.location}
                                </span>
                            </div>
                        </div>

                        {/* Feasibility */}
                        <div className="shrink-0 rounded-2xl bg-[#f8f9fc] p-5 text-center sm:min-w-44">
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                Feasibility
                            </p>

                            <p className="mt-2 text-4xl font-bold text-[#5b3df5]">
                                {workspace.feasibility}%
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                                based on current capabilities
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main grid */}
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    {/* Team */}
                    <section className="rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eeeaff] text-[#5b3df5]">
                                <Users size={20} />
                            </div>

                            <div>
                                <h2 className="font-bold text-[#171725]">
                                    Your team
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Complementary capabilities working
                                    together.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            {workspace.team.map((member) => (
                                <div
                                    key={member.name}
                                    className="flex flex-col gap-3 rounded-2xl border border-[#e5e7eb] p-4 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eeeaff] text-sm font-bold text-[#5b3df5]">
                                            {member.name.charAt(0)}
                                        </div>

                                        <div>
                                            <p className="font-semibold text-[#171725]">
                                                {member.name}
                                            </p>

                                            <p className="mt-0.5 text-xs text-gray-500">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-sm text-gray-600 sm:text-right">
                                        {member.contribution}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Economics */}
                    <section className="rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                        <h2 className="font-bold text-[#171725]">
                            Opportunity economics
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            A starting allocation for the opportunity.
                        </p>

                        <div className="mt-5 space-y-3">
                            {workspace.economics.map(
                                ([label, value]) => (
                                    <div
                                        key={label}
                                        className="flex items-center justify-between gap-3 border-b border-[#f0f0f2] pb-3 last:border-0 last:pb-0"
                                    >
                                        <span className="text-sm text-gray-500">
                                            {label}
                                        </span>

                                        <span className="text-sm font-semibold text-[#171725]">
                                            {value}
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                    </section>
                </div>

                {/* Timeline */}
                <section className="mt-6 rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm sm:p-7">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff8e7] text-[#9a6b00]">
                            <Clock3 size={20} />
                        </div>

                        <div>
                            <h2 className="font-bold text-[#171725]">
                                {opportunity.id === 'school-uniforms'
                                    ? '21-day execution plan'
                                    : '15-day execution plan'}
                            </h2>

                            <p className="text-sm text-gray-500">
                                A suggested sequence for delivering the
                                opportunity.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-3 md:grid-cols-5">
                        {workspace.timeline.map((step, index) => (
                            <div
                                key={step.title}
                                className="relative rounded-2xl bg-[#f8f9fc] p-4"
                            >
                                <span className="text-xs font-semibold text-[#5b3df5]">
                                    {step.days}
                                </span>

                                <h3 className="mt-2 text-sm font-bold text-[#171725]">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-gray-500">
                                    {step.description}
                                </p>

                                {index <
                                    workspace.timeline.length - 1 && (
                                    <div className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-[#e5e7eb] bg-[#f8f9fc] md:block" />
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dependencies + first actions */}
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <section className="rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff8e7] text-[#9a6b00]">
                                <Wrench size={20} />
                            </div>

                            <div>
                                <h2 className="font-bold text-[#171725]">
                                    Dependencies
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Things that need to be confirmed.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 space-y-3">
                            {workspace.dependencies.map(
                                (dependency) => (
                                    <div
                                        key={dependency}
                                        className="flex items-start gap-3 rounded-xl bg-[#f8f9fc] p-3.5"
                                    >
                                        <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full border-2 border-[#5b3df5]" />

                                        <p className="text-sm leading-6 text-gray-700">
                                            {dependency}
                                        </p>
                                    </div>
                                ),
                            )}
                        </div>
                    </section>

                    <section className="rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                        <h2 className="font-bold text-[#171725]">
                            First actions
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Start here to move from plan to execution.
                        </p>

                        <div className="mt-5 space-y-3">
                            {workspace.actions.map(
                                (action, index) => (
                                    <div
                                        key={action}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eeeaff] text-xs font-bold text-[#5b3df5]">
                                            {index + 1}
                                        </div>

                                        <p className="pt-1 text-sm leading-6 text-gray-700">
                                            {action}
                                        </p>
                                    </div>
                                ),
                            )}
                        </div>
                    </section>
                </div>

                {/* CTA */}
                <section className="mt-6 rounded-3xl bg-[#171725] p-6 text-white shadow-sm sm:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold text-[#bdb7ff]">
                                {isStarted
                                    ? 'Your plan is ready'
                                    : 'Ready to move forward?'}
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                {isStarted
                                    ? 'Your team knows what comes next.'
                                    : 'Turn this plan into an opportunity.'}
                            </h2>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-300">
                                {isStarted
                                    ? 'Confirm the dependencies, align the team and begin working through the execution plan.'
                                    : 'Confirm the dependencies, align the team and take the first steps toward delivering the opportunity.'}
                            </p>
                        </div>

                        {!isStarted && (
                            <button
                                type="button"
                                onClick={handleStartOpportunity}
                                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#5b3df5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4728d9]"
                            >
                                Start opportunity
                            </button>
                        )}

                        {isStarted && (
                            <div className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-green-500/10 px-5 py-3.5 text-sm font-semibold text-green-300">
                                <CheckCircle2 size={18} />
                                Opportunity started
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}