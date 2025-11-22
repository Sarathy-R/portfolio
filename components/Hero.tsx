import React from 'react';
import { Github, Linkedin, Link } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center scroll-mt-16 px-4 py-12 sm:px-6 lg:px-8">
      <a 
        href="#about" 
        className="absolute right-4 top-24 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/50 text-slate-400 backdrop-blur-sm transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark sm:right-8 sm:top-28"
        aria-label="Scroll to About section"
      >
        <Link className="h-5 w-5" />
      </a>

      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="animate-fade-in-up space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Jane Doe
            </h1>
            <h2 className="text-lg font-medium text-primary sm:text-xl lg:text-2xl">
              Senior Software Developer | Python & AWS Cloud Solutions
            </h2>
          </div>
          
          <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
            I build robust, scalable cloud infrastructures and high-performance backend systems. 
            Passionate about clean code, serverless architectures, and solving complex engineering challenges.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#projects" className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105">
              View My Work
            </a>
            <a href="/resume.pdf" className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-slate-800 px-6 text-base font-bold text-white shadow-lg shadow-black/20 transition-all hover:bg-slate-700 hover:scale-105">
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-primary transform hover:scale-110 duration-200">
              <span className="sr-only">GitHub</span>
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-primary transform hover:scale-110 duration-200">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
    </section>
  );
};

export default Hero;