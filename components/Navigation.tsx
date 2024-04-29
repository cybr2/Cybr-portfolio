import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Navigation() {
    const [currentSection, setCurrentSection] = useState('about');

    const scrollToSection = (sectionId: string) => {
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
            window.scrollTo({
                top: sectionEl.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sectionEls = document.querySelectorAll('.section');
            let newCurrentSection = currentSection;

            sectionEls.forEach(sectionEl => {
                const element = sectionEl as HTMLElement;
                if (window.scrollY + 100 >= element.offsetTop) {
                    newCurrentSection = element.id;
                }
            });

            if (newCurrentSection !== currentSection) {
                setCurrentSection(newCurrentSection);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentSection]);

    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                <li>
                    <Link className={`group flex items-center py-3 ${currentSection === 'about' ? 'active' : ''}`} href="#about" onClick={() => { setCurrentSection('about'); scrollToSection('about'); }}>
                        <span className={`nav-indicator mr-4 h-px w-8  transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${currentSection === 'about' ? 'bg-slate-200 w-16' : 'bg-slate-600  w-8'}`}>
                        </span>
                        <span className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 text-slate ${currentSection === 'about' ? 'text-slate-200' : 'text-slate-500'}`}>
                            About
                        </span>
                    </Link>
                </li>
                <li>
                    <Link className={`group flex items-center py-3 ${currentSection === 'experience' ? 'active' : ''}`} href="#experience" onClick={() => { setCurrentSection('experience'); scrollToSection('experience'); }}>
                        <span className={`nav-indicator mr-4 h-px w-8  transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${currentSection === 'experience' ? 'bg-slate-200 w-16' : 'bg-slate-600  w-8'}`}>
                        </span>
                        <span className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 text-slate ${currentSection === 'experience' ? 'text-slate-200' : 'text-slate-500'}`}>
                            Experience
                        </span>
                    </Link>
                </li>
                <li>
                    <Link className={`group flex items-center py-3 ${currentSection === 'projects' ? 'active' : ''}`} href="#projects" onClick={() => { setCurrentSection('projects'); scrollToSection('projects'); }}>
                        <span className={`nav-indicator mr-4 h-px w-8  transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${currentSection === 'projects' ? 'bg-slate-200 w-16' : 'bg-slate-600  w-8'}`}>
                        </span>
                        <span className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200 text-slate ${currentSection === 'projects' ? 'text-slate-200' : 'text-slate-500'}`}>
                            Projects
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation