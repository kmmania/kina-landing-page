import React from 'react';
import type {PricingTier} from '../types';
import {AlertTriangle, Bell, Check, Crown, Medal, Sparkles, Star, Zap} from 'lucide-react';
import {EmailCapture} from './EmailCapture';

const tiers: PricingTier[] = [
    {
        name: "CO-CREATOR",
        price: "$149 one-time",
        badge: "Badge #501-1000",
        spotsLeft: 500,
        totalSpots: 500,
        features: [
            "3 years ALL services",
            "Badge #501-1000",
            "Hall of Fame"
        ],
        emailId: "tier-1",
        ctaText: "Secure Co-Creator Access",
        priorityLabel: "[ RESERVE YOUR CO-CREATOR SPOT ]",
        source: "waitlist_tier_cocreator"
    },
    {
        name: "VISIONARY",
        price: "$249 one-time",
        badge: "Badge #101-500",
        spotsLeft: 400,
        totalSpots: 400,
        features: [
            "5 years ALL services",
            "Badge #101-500",
            "Hall of Fame"
        ],
        bestValue: true,
        emailId: "tier-2",
        ctaText: "Secure Visionary Access",
        priorityLabel: "[ CLAIM YOUR VISIONARY ACCESS ]",
        source: "waitlist_tier_visionary"
    },
    {
        name: "LEGEND",
        price: "$399 one-time",
        badge: "Badge #1-100",
        spotsLeft: 100,
        totalSpots: 100,
        features: [
            "Lifetime ALL services",
            "Badge #1-100",
            "Hall of Fame"
        ],
        exclusive: true,
        emailId: "tier-3",
        ctaText: "Secure Legend Spot",
        priorityLabel: "[ SECURE YOUR EXCLUSIVE LEGEND SPOT ]",
        source: "waitlist_tier_legend"
    }
];

export const SectionTiers: React.FC = () => {
    return (
        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold text-kina-text mb-6">
                        Choose Your Founding Tier
                    </h2>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                        Exclusive Lifetime Benefits. 1,000 Spots. First Come, First Served.
                    </p>

                    <div
                        className="bg-yellow-50 border border-yellow-200 p-6 max-w-3xl mx-auto text-left rounded-2xl shadow-sm flex gap-4">
                        <div className="bg-yellow-100 p-3 rounded-full h-fit text-yellow-600 shrink-0">
                            <AlertTriangle className="shrink-0" size={24}/>
                        </div>
                        <div>
                            <p className="font-bold text-yellow-800 text-lg mb-2">Warning : There are only 100 Lifetime
                                spots available worldwide.</p>
                            <p className="text-yellow-800/80 leading-relaxed">
                                Based on our current waitlist growth, we expect them to sell out in the first hour.
                                By joining the waitlist, you get the <span
                                className="font-bold bg-yellow-200 px-1 rounded">Secret Kickstarter Link 24 hours before the public launch</span>.
                                This is your <em>only</em> guarantee to secure a Legend spot.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-end">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl flex flex-col relative transition-all duration-300 transform group overflow-hidden ${
                                tier.exclusive
                                    ? 'border-4 border-yellow-400 shadow-2xl scale-105 hover:scale-110 z-10 hover:z-20 bg-white order-first md:order-none'
                                    : tier.bestValue
                                        ? 'border border-kina-blue shadow-xl bg-white hover:scale-105 hover:shadow-2xl hover:z-20'
                                        : 'border border-gray-200 shadow-lg bg-gray-50 hover:scale-105 hover:shadow-xl hover:z-20'
                            }`}
                        >
                            {/* Header Badge */}
                            {tier.bestValue && (
                                <div
                                    className="bg-kina-blue text-white text-center py-2 font-bold text-sm flex justify-center items-center gap-1">
                                    <Star size={14} fill="currentColor"/> BEST VALUE
                                </div>
                            )}
                            {tier.exclusive && (
                                <div
                                    className="bg-yellow-400 text-yellow-900 text-center py-3 font-bold text-sm flex justify-center items-center gap-2 tracking-wider">
                                    <Crown size={18} fill="currentColor"/> EXCLUSIVE LEGEND STATUS
                                </div>
                            )}

                            {/* Card Header Content - Added subtle bg for Visionary to distinguish it */}
                            <div
                                className={`p-8 text-center border-b border-gray-100/50 ${tier.bestValue && !tier.exclusive ? 'bg-slate-50' : ''}`}>
                                <h3 className={`text-xl font-bold mb-4 tracking-widest uppercase ${tier.bestValue ? 'text-kina-blue' : 'text-kina-text'}`}>
                                    {tier.name}
                                </h3>
                                <p className={`font-bold text-kina-text ${tier.exclusive ? 'text-5xl' : 'text-4xl'}`}>
                                    {tier.price.split(' ')[0]}
                                </p>
                                <p className="text-sm text-gray-500 mt-2 font-medium">{tier.price.split(' ').slice(1).join(' ')}</p>
                            </div>

                            <div className="p-8 flex-1">
                                <ul className="space-y-4 mb-8">
                                    {tier.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <div
                                                className={`mt-1 rounded-full p-0.5 ${tier.exclusive ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                                                <Check size={14} strokeWidth={4}/>
                                            </div>
                                            <span className="text-kina-text font-medium text-left">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Visual Scarcity Indicator */}
                                <div className="mb-6">
                                    <div
                                        className={`text-center py-1.5 rounded-t-lg text-sm font-bold flex items-center justify-center gap-2 ${tier.spotsLeft <= 100 ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                                        <Sparkles size={14}/> Only {tier.spotsLeft} spots left
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-b-full overflow-hidden">
                                        <div
                                            className={`h-full ${tier.spotsLeft <= 100 ? 'bg-red-500' : 'bg-kina-green'}`}
                                            style={{width: '85%'}} // Simulated "mostly full" to create urgency
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 pt-0">
                                <div className="flex flex-col gap-3">
                                    <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-wider">
                                        {tier.priorityLabel}
                                    </p>
                                    {/* Vertical Layout enforced for better form display */}
                                    <EmailCapture
                                        id={tier.emailId}
                                        buttonText={tier.ctaText}
                                        variant={tier.exclusive ? "dark" : "secondary"}
                                        vertical={true}
                                        source={tier.source}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Comparison Section */}
                <div
                    className="max-w-5xl mx-auto bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200 relative overflow-hidden">
                    <div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-kina-blue to-kina-green"></div>

                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-lg text-gray-600 mb-4">
                                After Kickstarter ends, these prices and benefits will never return.
                            </p>
                            <div
                                className="inline-block bg-white border-2 border-kina-blue/10 rounded-xl px-6 py-3 shadow-sm transform rotate-1">
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-1">Regular
                                    pricing after launch</p>
                                <p className="text-3xl font-bold text-kina-text">$99<span
                                    className="text-lg text-gray-400 font-normal">/year ongoing</span></p>
                            </div>
                        </div>

                        <div
                            className="flex-1 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-16">
                            <h4 className="font-bold text-kina-text mb-6 flex items-center justify-center md:justify-start gap-2 text-lg">
                                <Sparkles size={20} className="text-kina-blue"/> All tiers include:
                            </h4>
                            <div className="space-y-4">
                                <div
                                    className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                    <div className="bg-kina-green/10 p-2 rounded-full text-kina-green"><Zap size={18}/>
                                    </div>
                                    <span className="font-medium text-gray-700">Instant prototype access</span>
                                </div>
                                <div
                                    className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                    <div className="bg-kina-blue/10 p-2 rounded-full text-kina-blue"><Bell size={18}/>
                                    </div>
                                    <span className="font-medium text-gray-700">Priority Kickstarter notification</span>
                                </div>
                                <div
                                    className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                    <div className="bg-yellow-100 p-2 rounded-full text-yellow-600"><Medal size={18}/>
                                    </div>
                                    <span className="font-medium text-gray-700">Founding member recognition</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};