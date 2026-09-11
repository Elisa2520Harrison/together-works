import type { CapabilityExtraction } from '../types/capability'
import type { Opportunity } from '../data/opportunities'

const capabilityAliases: Record<string, string[]> = {
    'bag making': [
        'bag making',
        'handmade bags',
        'bag production',
        'bags',
    ],

    sewing: [
        'sewing',
        'sew',
        'dressmaking',
        'clothing production',
    ],

    'customer network': [
        'customer network',
        'customers',
        'customer relationships',
    ],

    'fabric sourcing': [
        'fabric sourcing',
        'fabric sourcing access',
        'fabric',
    ],

    branding: [
        'branding',
        'graphic design',
        'design',
    ],

    design: [
        'design',
        'graphic design',
        'branding',
    ],

    'production capacity': [
        'production capacity',
        'production',
        'manufacturing',
    ],

    'food production': [
        'food production',
        'cooking',
        'food preparation',
    ],

    'commercial kitchen': [
        'commercial kitchen',
        'kitchen',
    ],

    delivery: [
        'delivery',
        'transport',
        'logistics',
    ],

    farming: [
        'farming',
        'agriculture',
        'farmer',
    ],

    'produce supply': [
        'produce supply',
        'fresh produce',
        'produce',
    ],

    'restaurant network': [
        'restaurant network',
        'restaurants',
        'restaurant relationships',
    ],

    marketing: [
        'marketing',
        'digital marketing',
        'promotion',
    ],

    'digital skills': [
        'digital skills',
        'web development',
        'software development',
        'technology',
    ],

    'business network': [
        'business network',
        'business relationships',
        'customers',
    ],
}

function normalize(value: string) {
    return value.toLowerCase().trim()
}

function getUserCapabilities(profile: CapabilityExtraction) {
    const capabilities = [
        ...profile.skills,
        ...profile.products,
        ...profile.resources,
        ...profile.network.map((connection) => connection.type),
    ]

    if (profile.capacity.length > 0) {
        capabilities.push('Production capacity')
    }

    return capabilities.map(normalize)
}

function capabilityMatches(
    userCapability: string,
    requiredCapability: string,
) {
    const required = normalize(requiredCapability)
    const user = normalize(userCapability)

    if (user === required) {
        return true
    }

    if (
        user.includes(required) ||
        required.includes(user)
    ) {
        return true
    }

    const aliases = capabilityAliases[required] ?? []

    return aliases.some((alias) => {
        const normalizedAlias = normalize(alias)

        return (
            user.includes(normalizedAlias) ||
            normalizedAlias.includes(user)
        )
    })
}

export function scoreOpportunity(
    profile: CapabilityExtraction,
    opportunity: Opportunity,
) {
    const userCapabilities = getUserCapabilities(profile)

    const matchedCapabilities =
        opportunity.requiredCapabilities.filter(
            (requiredCapability) =>
                userCapabilities.some((userCapability) =>
                    capabilityMatches(
                        userCapability,
                        requiredCapability,
                    ),
                ),
        )

    const score = Math.round(
        (matchedCapabilities.length /
            opportunity.requiredCapabilities.length) *
            100,
    )

    return {
        opportunity,
        score,
        matchedCapabilities,
        missingCapabilities:
            opportunity.requiredCapabilities.filter(
                (requiredCapability) =>
                    !matchedCapabilities.includes(
                        requiredCapability,
                    ),
            ),
    }
}

export function rankOpportunities(
    profile: CapabilityExtraction,
    opportunities: Opportunity[],
) {
    return opportunities
        .map((opportunity) =>
            scoreOpportunity(profile, opportunity),
        )
        .sort((a, b) => b.score - a.score)
}

