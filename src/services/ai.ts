import type { CapabilityExtraction } from '../types/capability'

export async function extractCapabilities(
    input: string,
): Promise<CapabilityExtraction> {
    await new Promise((resolve) => setTimeout(resolve, 1200))

    const normalized = input.toLowerCase()

    const result: CapabilityExtraction = {
        skills: [],
        products: [],
        resources: [],
        capacity: [],
        network: [],
        location: undefined,
    }

    // Sewing
    if (
        normalized.includes('sewing') ||
        normalized.includes('sew') ||
        normalized.includes('dressmaking') ||
        normalized.includes('tailor') ||
        normalized.includes('tailoring')
    ) {
        result.skills.push('Sewing')
    }

    // Bag making
    if (
        normalized.includes('bag') ||
        normalized.includes('handmade bag')
    ) {
        result.skills.push('Bag making')

        if (normalized.includes('handmade bag')) {
            result.products.push('Handmade bags')
        }
    }

    // Graphic design / branding
    if (
        normalized.includes('graphic design') ||
        normalized.includes('branding') ||
        normalized.includes('design')
    ) {
        result.skills.push('Graphic design')
    }

    // Marketing
    if (
        normalized.includes('marketing') ||
        normalized.includes('digital marketing')
    ) {
        result.skills.push('Marketing')
    }

    // Web / technology
    if (
        normalized.includes('web development') ||
        normalized.includes('software development') ||
        normalized.includes('developer') ||
        normalized.includes('coding') ||
        normalized.includes('technology')
    ) {
        result.skills.push('Digital skills')
    }

    // Food
    if (
        normalized.includes('food') ||
        normalized.includes('catering') ||
        normalized.includes('cooking') ||
        normalized.includes('cook')
    ) {
        result.skills.push('Food production')
    }

    // Farming
    if (
        normalized.includes('farm') ||
        normalized.includes('farming') ||
        normalized.includes('agriculture') ||
        normalized.includes('farmer')
    ) {
        result.skills.push('Farming')
    }

    // Delivery / logistics
    if (
        normalized.includes('delivery') ||
        normalized.includes('logistics') ||
        normalized.includes('transport')
    ) {
        result.skills.push('Delivery')
    }

    // Customers / network
    if (
        normalized.includes('customer') ||
        normalized.includes('client') ||
        normalized.includes('whatsapp')
    ) {
        const customerMatch = normalized.match(
            /(\d+)\s*(?:regular\s*)?(?:customers?|clients?)/,
        )

        result.network.push({
            type: 'Customer network',
            amount: customerMatch
                ? Number(customerMatch[1])
                : undefined,
            channel: normalized.includes('whatsapp')
                ? 'WhatsApp'
                : undefined,
        })
    }

    // Business network
    if (
        normalized.includes('business network') ||
        normalized.includes('business relationships')
    ) {
        result.network.push({
            type: 'Business network',
        })
    }

    // Production capacity
    const productionMatch = normalized.match(
        /(?:produce|make|create|sew)\s+(?:around\s+|about\s+)?(\d+)\s*(bags?|items?|pieces?|garments?|clothes?|uniforms?)/,
    )

    if (productionMatch) {
        result.capacity.push({
            unit: productionMatch[2],
            amount: Number(productionMatch[1]),
            period: 'week',
        })
    }

    // Sewing machine
    if (
        normalized.includes('sewing machine') ||
        normalized.includes('sewing machines')
    ) {
        result.resources.push('Sewing machine')
    }

    // Fabric
    if (
        normalized.includes('fabric') ||
        normalized.includes('fabric sourcing')
    ) {
        result.resources.push('Fabric sourcing access')
    }

    // Commercial kitchen
    if (
        normalized.includes('commercial kitchen') ||
        normalized.includes('commercial cooking')
    ) {
        result.resources.push('Commercial kitchen')
    }

    // Printing
    if (
        normalized.includes('printing') ||
        normalized.includes('printer')
    ) {
        result.resources.push('Printing access')
    }

    // Location
    if (normalized.includes('accra')) {
        result.location = 'Accra'
    } else if (normalized.includes('kumasi')) {
        result.location = 'Kumasi'
    } else if (normalized.includes('takoradi')) {
        result.location = 'Takoradi'
    } else if (normalized.includes('tema')) {
        result.location = 'Tema'
    }

    return result
}