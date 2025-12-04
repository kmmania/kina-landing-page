import {SectionHero} from './components/SectionHero';
import {SectionProblem} from './components/SectionProblem';
import {SectionSolution} from './components/SectionSolution';
import {SectionPrototype} from './components/SectionPrototype';
import {SectionManifesto} from './components/SectionManifesto';
import {SectionTiers} from './components/SectionTiers';
import {SectionTestimonials} from './components/SectionTestimonials';
import {SectionTrust} from './components/SectionTrust';
import {SectionFAQ} from './components/SectionFAQ';
import {SectionFinalCTA} from './components/SectionFinalCTA';
import {Footer} from './components/Footer';

function App() {
    return (
        <main className="w-full overflow-hidden">
            <SectionHero/>
            <SectionProblem/>
            <SectionSolution/>
            <SectionPrototype/>
            <SectionManifesto/>
            <SectionTiers/>
            <SectionTestimonials/>
            <SectionTrust/>
            <SectionFAQ/>
            <SectionFinalCTA/>
            <Footer/>
        </main>
    );
}

export default App;