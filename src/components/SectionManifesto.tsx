import React, {useState} from 'react';
import {Button} from './Button';
import {BookOpenCheck, Check, Download, Gift, Lock, Quote, X} from 'lucide-react';
import manifestoCover from '../assets/images/kina-manifesto.png';

export const SectionManifesto: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({name: '', email: '', consent: false});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.consent) return;

        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            console.log('Manifesto Request:', formData);
        }, 1500);
    };

    const resetForm = () => {
        setShowPopup(false);
        setTimeout(() => {
            setStatus('idle');
            setFormData({name: '', email: '', consent: false});
        }, 300);
    }

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-kina-bg relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold text-kina-text mb-6">
                    Are You the Athlete of 2025?
                </h2>
                <p className="text-xl md:text-2xl text-kina-blue font-medium max-w-3xl mx-auto">
                    The Manifesto. Discover the challenges of the new era and the keys to enlightened performance.
                </p>
            </div>

            <div
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col md:flex-row max-w-6xl mx-auto relative z-10">
                {/* Image Side with 3D effect */}
                <div
                    className="md:w-5/12 bg-gray-100 flex items-center justify-center p-8 md:p-12 relative overflow-hidden group min-h-[450px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-kina-blue/10 to-transparent"></div>
                    <img
                        src={manifestoCover}
                        alt="The Athlete of 2025 Manifesto Cover"
                        className="max-w-[260px] md:max-w-[280px] w-full h-auto shadow-2xl rounded-lg transform md:-rotate-3 md:translate-x-4 transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-3xl z-10"
                    />
                </div>

                {/* Content Side */}
                <div className="md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div
                        className="flex items-center gap-2 text-kina-subtext font-bold uppercase tracking-widest text-xs mb-6">
                        <BookOpenCheck size={16}/> Exclusive Content
                    </div>

                    <h3 className="text-2xl font-bold text-kina-text mb-6">Inside the Manifesto:</h3>

                    {/* Distinct Quote Card */}
                    <div className="bg-gray-50 p-6 rounded-xl mb-6 relative border border-gray-100">
                        <Quote className="absolute top-4 left-4 text-kina-blue/20 w-8 h-8 rotate-180"
                               fill="currentColor"/>
                        <p className="text-lg text-kina-text leading-relaxed italic relative z-10 pl-4 pt-2">
                            "Data addiction, algorithmic judgment, social pressure... The modern athlete is facing
                            invisible walls. We wrote this manifesto to explore these challenges and propose a new
                            path."
                        </p>
                    </div>

                    {/* Distinct Gift Card */}
                    <div
                        className="bg-kina-green/5 p-5 rounded-xl mb-8 border border-kina-green/20 flex gap-4 items-start">
                        <div className="bg-white p-2.5 rounded-lg text-kina-green shadow-sm shrink-0 mt-0.5">
                            <Gift size={24}/>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-kina-green uppercase tracking-wide mb-1">Free
                                Gift</h4>
                            <p className="text-sm font-medium text-kina-text/80 leading-snug">
                                Included for all waitlist members: A self-diagnostic quiz to see where you stand.
                            </p>
                        </div>
                    </div>

                    <Button onClick={() => setShowPopup(true)} fullWidth variant="dark"
                            className="shadow-lg hover:shadow-xl mt-auto">
                        Get the Manifesto Now <Download size={20}/>
                    </Button>
                </div>
            </div>

            {/* Advanced Lead Gen Modal */}
            {showPopup && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
                    <div
                        className="bg-white rounded-2xl max-w-lg w-full relative shadow-2xl transform transition-all scale-100 overflow-hidden my-8">

                        {/* Close Button */}
                        <button
                            onClick={resetForm}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 z-20"
                        >
                            <X size={20}/>
                        </button>

                        {status === 'success' ? (
                            <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                                <div
                                    className="w-20 h-20 bg-kina-green/10 text-kina-green rounded-full flex items-center justify-center mb-6 animate-bounce">
                                    <Check size={40} strokeWidth={3}/>
                                </div>
                                <h3 className="text-2xl font-bold text-kina-text mb-2">It's on the way!</h3>
                                <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                                    Check your inbox. We've sent the Manifesto to <strong>{formData.email}</strong>.
                                </p>
                                <Button onClick={resetForm} variant="secondary">
                                    Close Window
                                </Button>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                {/* Modal Header with Visual */}
                                <div className="bg-gray-50 p-6 sm:p-8 border-b border-gray-100 flex items-center gap-6">
                                    <img
                                        src="https://placehold.co/100x140/ffffff/333333?text=Manifesto&font=playfair"
                                        alt="Manifesto Thumbnail"
                                        className="w-16 h-auto shadow-md rounded -rotate-3 hidden sm:block"
                                    />
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-kina-text leading-tight mb-1">
                                            Where should we send your Manifesto?
                                        </h3>
                                        <p className="text-sm text-kina-subtext">
                                            Enter your details to receive the PDF instantly.
                                        </p>
                                    </div>
                                </div>

                                {/* Modal Body / Form */}
                                <div className="p-6 sm:p-8">
                                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                                        {/* Name Field */}
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">First
                                                Name</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Alex"
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-kina-blue focus:ring-4 focus:ring-kina-blue/10 outline-none transition-all"
                                                required
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">Email
                                                Address</label>
                                            <input
                                                type="email"
                                                placeholder="e.g. alex@runner.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 focus:bg-white focus:border-kina-blue focus:ring-4 focus:ring-kina-blue/10 outline-none transition-all"
                                                required
                                            />
                                        </div>

                                        {/* GDPR Consent */}
                                        <label
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-100">
                                            <div className="relative flex items-center mt-1">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.consent}
                                                    onChange={(e) => setFormData({
                                                        ...formData,
                                                        consent: e.target.checked
                                                    })}
                                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-gray-300 transition-all checked:border-kina-green checked:bg-kina-green bg-gray-50"
                                                    required
                                                />
                                                <Check
                                                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100"
                                                    size={14} strokeWidth={3}/>
                                            </div>
                                            <span className="text-sm text-gray-500 leading-snug select-none">
                          I agree to receive the Manifesto and updates about KINA's launch. Unsubscribe anytime.
                        </span>
                                        </label>

                                        {/* CTA Button */}
                                        <Button
                                            type="submit"
                                            variant="secondary"
                                            fullWidth
                                            disabled={!formData.consent || status === 'submitting'}
                                            className="mt-2"
                                        >
                                            {status === 'submitting' ? 'Sending...' : 'Send me the PDF'}
                                        </Button>

                                        {/* Reassurance Footer */}
                                        <div
                                            className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-2">
                                            <Lock size={12}/>
                                            <span>Your data is safe. Zero spam. Powered by KINA privacy standards.</span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};