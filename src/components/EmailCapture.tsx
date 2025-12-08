import React, {useState} from 'react';
import {Button} from './Button';
import {AlertCircle, ArrowRight, Check, Loader2} from 'lucide-react';

interface EmailCaptureProps {
    buttonText?: string;
    placeholder?: string;
    id?: string;
    source?: string; // New prop for Tag Brevo (ex: 'waitlist', 'manifesto')
    onSuccess?: () => void;
    variant?: 'primary' | 'secondary' | 'dark';
    vertical?: boolean;
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({
                                                              buttonText = "Join the Waitlist",
                                                              placeholder = "Email Address",
                                                              id,
                                                              source = "waitlist", // Default value
                                                              onSuccess,
                                                              variant = 'primary',
                                                              vertical = false
                                                          }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    source: source
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus('error');
                setErrorMessage(data.error || "Something went wrong.");
                return;
            }

            setStatus('success');
            if (onSuccess) onSuccess();
            console.log(`Email captured for ${source}: ${email}`);

        } catch (error) {
            setStatus('error');
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("An unexpected network error occurred.");
            }
        }
    };

    if (status === 'success') {
        return (
            <div
                className="w-full p-4 bg-kina-green/10 text-kina-green rounded-xl flex items-center justify-center gap-3 border border-kina-green/20 animate-fade-in">
                <div className="bg-kina-green text-white p-1 rounded-full">
                    <Check size={16} strokeWidth={3}/>
                </div>
                <span className="font-bold">You're on the list! Watch your inbox.</span>
            </div>
        );
    }

    return (
        <div className="w-full">
            <form id={id} onSubmit={handleSubmit}
                  className={`flex gap-4 w-full ${vertical ? 'flex-col' : 'flex-col sm:flex-row'}`}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    disabled={status === 'loading'}
                    className={`px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-kina-blue focus:ring-4 focus:ring-kina-blue/10 text-kina-text bg-gray-50 focus:bg-white text-lg transition-all shadow-inner min-w-0 ${vertical ? 'w-full' : 'flex-1'} ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    required
                />
                <Button
                    type="submit"
                    variant={variant}
                    fullWidth={vertical}
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? (
                        <span className="flex items-center gap-2">
                            <Loader2 size={20} className="animate-spin"/>
                            Sending...
                        </span>
                    ) : (
                        <>
                            {buttonText}
                            {!vertical && <ArrowRight size={20}/>}
                        </>
                    )}
                </Button>
            </form>

            {/* Affichage du message d'erreur si besoin */}
            {status === 'error' && (
                <div className="mt-3 flex items-center gap-2 text-red-600 text-sm animate-fade-in">
                    <AlertCircle size={16}/>
                    <span>{errorMessage}</span>
                </div>
            )}
        </div>
    );
};