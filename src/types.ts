export interface PricingTier {
    name: string;
    price: string;
    badge: string;
    spotsLeft: number;
    totalSpots: number; // Added for progress bar
    features: string[];
    bestValue?: boolean;
    exclusive?: boolean;
    emailId: string;
    ctaText?: string; // Added for specific CTA buttons
    priorityLabel?: string; // Added for specific priority access text
}

export interface Testimonial {
    quote: string;
    highlight: string; // The part of the quote to bold
    author: string;
    role: string;
    location: string;
    stats?: string; // e.g. "2:30 PB"
    image: string;
    socialLink?: string;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    preview: string; // Short text shown when closed
    badge?: string; // Optional text badge
    badgeColor?: 'green' | 'blue' | 'yellow'; // Color theme for the badge
}