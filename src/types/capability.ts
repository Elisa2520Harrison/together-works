export interface Capacity {
    unit: string
    amount: number
    period: string
}

export interface NetworkConnection {
    type: string
    amount?: number
    channel?: string
    description?: string
}

export interface CapabilityExtraction {
    skills: string[]
    products: string[]
    resources: string[]
    capacity: Capacity[]
    network: NetworkConnection[]
    location?: string
}