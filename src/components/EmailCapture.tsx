import React, {useState} from 'react';
import {Button} from './Button';
import {ArrowRight, Check} from 'lucide-react';

interface EmailCaptureProps {
    buttonText?: string;
    placeholder?: string;
    id?: string;
    onSuccess?: () => void;
    variant?: 'primary' | 'secondary' | 'dark';
    vertical?: boolean; // New prop for layout control
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({
                                                              buttonText = "Join the Waitlist",
                                                              placeholder = "Email Address",
                                                              id,
                                                              onSuccess,
                                                              variant = 'primary',
                                                              vertical = false
                                                          }) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            if (onSuccess) onSuccess();
            console.log(`Email captured for ${id}: ${email}`);
        }, 600);
    };

    if (submitted) {
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
        <form onSubmit={handleSubmit} className={`flex gap-4 w-full ${vertical ? 'flex-col' : 'flex-col sm:flex-row'}`}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className={`px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-kina-blue focus:ring-4 focus:ring-kina-blue/10 text-kina-text bg-gray-50 focus:bg-white text-lg transition-all shadow-inner min-w-0 ${vertical ? 'w-full' : 'flex-1'}`}
                required
            />
            <Button type="submit" variant={variant} fullWidth={vertical}>
                {buttonText}
                {!vertical && <ArrowRight size={20}/>}
            </Button>
        </form>
    );
};