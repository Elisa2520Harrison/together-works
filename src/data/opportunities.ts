export interface Opportunity {
    id: string
    title: string
    description: string
    requiredCapabilities: string[]
    tags: string[]
    budget: string
    deadline: string
    location: string
}

export const opportunities: Opportunity[] = [
    {
        id: 'corporate-gift-bags',
        title: 'Corporate gift bags',
        description:
            'A company needs locally produced branded gift bags for an upcoming event.',
        requiredCapabilities: [
            'bag making',
            'production capacity',
            'customer relationships',
            'design',
        ],
        tags: ['Corporate', 'Production', 'Merchandise'],
        budget: 'GH₵8,000',
        deadline: '14 days',
        location: 'Accra',
    },

    {
        id: 'school-uniforms',
        title: 'School uniform production',
        description:
            'A school needs 300 uniforms delivered within 21 days. This opportunity needs local production, sourcing, finishing and delivery capabilities.',
        requiredCapabilities: [
            'tailoring',
            'fabric sourcing',
            'production capacity',
            'packaging',
            'delivery',
        ],
        tags: ['Uniforms', 'School supply', 'Fast delivery'],
        budget: 'GH₵30,000',
        deadline: '21 days',
        location: 'Accra',
    },

    {
        id: 'event-merchandise',
        title: 'Event merchandise',
        description:
            'An event organizer needs locally produced merchandise for attendees.',
        requiredCapabilities: [
            'handmade products',
            'design',
            'production capacity',
            'marketing',
        ],
        tags: ['Events', 'Merchandise', 'Creative'],
        budget: 'GH₵12,000',
        deadline: '18 days',
        location: 'Accra',
    },

    {
        id: 'food-packaging',
        title: 'Food packaging and distribution',
        description:
            'A local food business needs a reliable packaging and route planning setup to supply schools and market stalls with consistent weekly orders.',
        requiredCapabilities: [
            'packaging',
            'logistics',
            'sales',
            'storage',
            'quality control',
        ],
        tags: ['Food', 'Distribution', 'Weekly supply'],
        budget: 'GH₵18,000',
        deadline: '2 weeks',
        location: 'Kumasi',
    },

    {
        id: 'community-arts',
        title: 'Community arts and craft supply',
        description:
            'A cultural group wants handmade items for events and gift markets. The opportunity needs creative production, local sourcing and repeat customer support.',
        requiredCapabilities: [
            'craftmaking',
            'handmade products',
            'marketing',
            'customer relationships',
            'design',
        ],
        tags: ['Crafts', 'Events', 'Gift market'],
        budget: 'GH₵12,500',
        deadline: '1 month',
        location: 'Cape Coast',
    },
]