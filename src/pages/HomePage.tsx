import { useEffect, useState } from 'react'
import {
    ArrowRight,
    CheckCircle2,
    MapPin,
    Plus,
    Sparkles,
    Users,
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import type { CapabilityExtraction } from '../types/capability'
import { opportunities } from '../data/opportunities'
import { rankOpportunities } from '../services/matching'

interface UserProfile extends CapabilityExtraction {
    name: string
}

export default function HomePage() {
    const navigate = useNavigate()

    const [profile, setProfile] = useState<UserProfile | null>(null)

    useEffect(() => {
        const savedProfile = sessionStorage.getItem(
            'togetherworks_profile',
        )

        if (!savedProfile) {
            return
        }

        try {
            setProfile(JSON.parse(savedProfile))
        } catch (error) {
            console.error(
                'Failed to load TogetherWorks profile:',
                error,
            )
        }
    }, [])

    if (!profile) {
        return (
            <main className="min-h-screen bg-[#f8f9fc] px-6 py-8">
                <div className="mx-auto max-w-5xl">
                    <header className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b3df5] text-sm font-bold text-white">
                            T
                        </div>

                        <span className="text-lg font-semibold text-[#171725]">
                            TogetherWorks
                        </span>
                    </header>

                    <section className="mt-16 rounded-3xl border border-[#e5e7eb] bg-white p-8 text-center shadow-sm sm:p-12">
                        <Sparkles
                            size={30}
                            className="mx-auto text-[#5b3df5]"
                        />

                        <h1 className="mt-5 text-2xl font-bold text-[#171725]">
                            Welcome to TogetherWorks
                        </h1>

                        <p className="mx-auto mt-3 max-w-lg leading-7 text-gray-600">
                            Tell us what you can bring or what you want to
                            make happen, and we'll help connect the right
                            capabilities.
                        </p>

                        <Link
                            to="/onboarding"
                            className="mt-7 inline-flex items-center rounded-xl bg-[#5b3df5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4728d9]"
                        >
                            Get started
                            <ArrowRight className="ml-2" size={17} />
                        </Link>
                    </section>
                </div>
            </main>
        )
    }

    const rankedOpportunities = rankOpportunities(
        profile,
        opportunities,
    )

    const topOpportunities = rankedOpportunities.slice(0, 3)

    const userCapabilities = [
        ...profile.skills,
        ...profile.products,
        ...profile.resources,
    ]

    if (profile.capacity.length > 0) {
        userCapabilities.push('Production capacity')
    }

    return (
        <main className="min-h-screen bg-[#f8f9fc]">
            {/* Header */}
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

                    <Link
                        to="/onboarding"
                        className="text-sm font-medium text-gray-500 transition hover:text-[#5b3df5]"
                    >
                        Update profile
                    </Link>
                </div>
            </header>

            <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
                {/* Greeting */}
                <section>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#5b3df5]">
                        <Sparkles size={16} />
                        Better connections, better opportunities
                    </div>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#171725] sm:text-4xl">
                        Hi, {profile.name} 👋
                    </h1>

                    <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        What would you like to make happen today?
                    </p>
                </section>

                

                {/* My capabilities */}
                <section className="mt-8 rounded-3xl border border-[#e5e7eb] bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eeeaff] text-[#5b3df5]">
                                <Sparkles size={21} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-[#171725]">
                                    Your capability profile
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    This is what TogetherWorks uses to find
                                    opportunities that fit you.
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {userCapabilities.length > 0 ? (
                                        userCapabilities.map((capability) => (
                                            <span
                                                key={capability}
                                                className="rounded-full bg-[#f8f9fc] px-3 py-1.5 text-xs font-medium text-gray-700"
                                            >
                                                {capability}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-sm text-gray-400">
                                            No capabilities added yet.
                                        </span>
                                    )}
                                </div>

                                {profile.location && (
                                    <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-500">
                                        <MapPin size={14} />
                                        {profile.location}
                                    </div>
                                )}
                            </div>
                        </div>

                        <Link
                            to="/onboarding"
                            className="shrink-0 text-sm font-semibold text-[#5b3df5] hover:text-[#4728d9]"
                        >
                            Edit profile
                        </Link>
                    </div>
                </section>

                {/* My opportunities */}
                <section className="mt-10">
                    <div>
                        <h2 className="text-2xl font-bold text-[#171725]">
                            My opportunities
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Opportunities you've created and are working on.
                        </p>
                    </div>

                    <div className="mt-5 rounded-3xl border border-dashed border-[#d9dbe3] bg-white p-8 text-center sm:p-10">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8f9fc] text-gray-400">
                            <Plus size={22} />
                        </div>

                        <h3 className="mt-4 font-semibold text-[#171725]">
                            No opportunities yet
                        </h3>

                        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                            Have something you're trying to make happen?
                            Create an opportunity and let TogetherWorks help
                            you find the right capabilities.
                        </p>

                        <button
                            type="button"
                            onClick={() => navigate('/create-opportunity')}
                            className="mt-5 inline-flex items-center rounded-xl bg-[#171725] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2a2a3a]"
                        >
                            Create an opportunity
                            <ArrowRight className="ml-2" size={16} />
                        </button>
                    </div>
                </section>

                {/* Opportunities for you */}
                <section className="mt-10">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-[#171725]">
                                Opportunities for you
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Things other people need that could use what
                                you bring.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 grid gap-5 lg:grid-cols-3">
                        {topOpportunities.map(
                            ({
                                opportunity,
                                score,
                                matchedCapabilities,
                                missingCapabilities,
                            }) => (
                                <article
                                    key={opportunity.id}
                                    className="flex flex-col rounded-3xl border border-[#e5e7eb] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    {/* Match */}
                                    <div className="flex items-start justify-between gap-3">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                                            <CheckCircle2 size={13} />
                                            {score}% match
                                        </span>

                                        <span className="text-xs text-gray-400">
                                            {opportunity.deadline}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-4 text-xl font-bold text-[#171725]">
                                        {opportunity.title}
                                    </h3>

                                    <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
                                        {opportunity.description}
                                    </p>

                                    {/* Opportunity info */}
                                    <div className="mt-5 grid grid-cols-2 gap-2">
                                        <div className="rounded-xl bg-[#f8f9fc] p-3">
                                            <p className="text-[11px] text-gray-400">
                                                Budget
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-[#171725]">
                                                {opportunity.budget}
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-[#f8f9fc] p-3">
                                            <p className="text-[11px] text-gray-400">
                                                Location
                                            </p>

                                            <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-[#171725]">
                                                <MapPin size={13} />
                                                {opportunity.location}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Matching capabilities */}
                                    {matchedCapabilities.length > 0 && (
                                        <div className="mt-5">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                                You bring
                                            </p>

                                            <div className="mt-2 flex flex-wrap gap-1.5">
                                                {matchedCapabilities
                                                    .slice(0, 3)
                                                    .map((capability) => (
                                                        <span
                                                            key={capability}
                                                            className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700"
                                                        >
                                                            {capability}
                                                        </span>
                                                    ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Missing */}
                                    {missingCapabilities.length > 0 && (
                                        <div className="mt-4">
                                            <p className="text-xs text-gray-500">
                                                May still need{' '}
                                                <span className="font-semibold text-[#171725]">
                                                    {
                                                        missingCapabilities[0]
                                                    }
                                                    {missingCapabilities.length >
                                                    1
                                                        ? ` +${
                                                              missingCapabilities.length -
                                                              1
                                                          } more`
                                                        : ''}
                                                </span>
                                            </p>
                                        </div>
                                    )}

                                    {/* Build */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            navigate(
                                                `/opportunities/${opportunity.id}`,
                                            )
                                        }
                                        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#5b3df5] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#4728d9]"
                                    >
                                        View opportunity
                                        <ArrowRight
                                            className="ml-2"
                                            size={16}
                                        />
                                    </button>
                                </article>
                            ),
                        )}
                    </div>
                </section>

                {/* Network */}
                <section className="mt-10 rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm sm:p-7">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff8e7] text-[#9a6b00]">
                                <Users size={21} />
                            </div>

                            <div>
                                <h2 className="font-bold text-[#171725]">
                                    You don't have to build it alone
                                </h2>

                                <p className="mt-1 max-w-xl text-sm leading-6 text-gray-500">
                                    TogetherWorks connects your capabilities
                                    with people who have what you're missing.
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[#e5e7eb] px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                        >
                            Explore network
                            <ArrowRight
                                className="ml-2"
                                size={16}
                            />
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}
