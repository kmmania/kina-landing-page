import React from 'react';
import {MessageSquareQuote} from 'lucide-react';

const ProblemCard: React.FC<{ text: string }> = ({text}) => (
    <div
        className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center relative hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group border-b-4 border-b-transparent hover:border-b-kina-green">
        <div
            className="absolute -top-6 bg-white text-kina-blue p-3 rounded-2xl shadow-lg border border-gray-100 group-hover:scale-110 transition-transform duration-300 group-hover:text-kina-green">
            <MessageSquareQuote size={28} strokeWidth={1.5}/>
        </div>
        <div className="mt-4">
            <p className="text-xl font-semibold text-gray-800 italic leading-relaxed">
                "{text}"
            </p>
        </div>
    </div>
);

export const SectionProblem: React.FC = () => {
    return (
        <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-5xl font-bold text-kina-text mb-6">
                        Does this sound familiar?
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        The inner monologue of the modern runner.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 px-2">
                    <ProblemCard text="My watch gives me 87 metrics but I don't know what matters today."/>
                    <ProblemCard text="It says 'recovery' but I feel ready to run hard."/>
                    <ProblemCard text="Everyone's PRing and I'm just maintaining."/>
                </div>

                {/* Improved Conclusion Block with visual punch */}
                <div
                    className="bg-kina-blue/5 rounded-r-3xl rounded-l-lg border-l-8 border-kina-green p-10 md:p-14 text-center max-w-4xl mx-auto shadow-sm transform transition-all hover:shadow-md">
                    <p className="text-xl md:text-3xl text-gray-800 font-medium leading-relaxed">
                        These moments happen to every runner.<br className="hidden md:block"/> <span
                        className="md:hidden block h-2"></span>
                        The question is: <span className="text-kina-blue font-bold">what if your technology <span
                        className="font-extrabold text-kina-green border-b-4 border-kina-green/20 inline-block leading-tight">helped you</span> navigate them?</span>
                    </p>
                </div>
            </div>
        </section>
    );
};