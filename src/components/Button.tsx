import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'dark';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  variant = 'primary',
                                                  fullWidth = false,
                                                  className = '',
                                                  ...props
                                              }) => {
    const baseStyles = "px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 active:translate-y-0 active:scale-95";

    const variants = {
        // Primary: Blue (Standard)
        primary: "bg-kina-blue text-white hover:bg-[#5A7E9E] hover:shadow-xl hover:shadow-kina-blue/30 shadow-lg border border-transparent",

        // Secondary: Green (Action/CTA) - Made slightly darker on hover for better interaction feedback
        secondary: "bg-kina-green text-white hover:bg-[#88B683] hover:shadow-xl hover:shadow-kina-green/40 shadow-lg border border-transparent ring-2 ring-kina-green/20 ring-offset-2",

        // Outline
        outline: "bg-transparent border-2 border-kina-blue text-kina-blue hover:bg-kina-blue hover:text-white",

        // Dark: Classy/Editorial
        dark: "bg-gray-900 text-white hover:bg-black hover:shadow-xl hover:shadow-gray-900/30 shadow-lg border border-transparent"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};