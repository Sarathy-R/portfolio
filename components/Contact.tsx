import React from 'react';
import { Download, Linkedin, Github, Send, Link } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative w-full scroll-mt-16 py-20 bg-background-dark">
      <a 
        href="#contact" 
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/50 text-slate-400 backdrop-blur-sm transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark sm:right-8"
        aria-label="Scroll to Contact section"
      >
        <Link className="h-5 w-5" />
      </a>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#16202C]/50 p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            
            {/* Left Side Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's Connect
              </h2>
              <p className="mt-4 max-w-md text-base text-slate-400 leading-relaxed">
                I'm actively seeking new opportunities in Python and AWS development. If you have a project in mind or just want to chat, feel free to reach out.
              </p>
              
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Resume</span>
                </a>
              </div>

              <div className="mt-10 border-t border-slate-800 pt-8">
                <h3 className="text-lg font-semibold text-slate-200">Find me on</h3>
                <div className="mt-4 flex gap-5">
                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-primary"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-7 w-7" />
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 transition-colors hover:text-primary"
                    aria-label="GitHub"
                  >
                    <Github className="h-7 w-7" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-base font-medium text-slate-200">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="rounded-lg border border-slate-600 bg-[#101822]/50 p-3 text-white placeholder-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-base font-medium text-slate-200">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="rounded-lg border border-slate-600 bg-[#101822]/50 p-3 text-white placeholder-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-base font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message here..."
                  className="resize-y rounded-lg border border-slate-600 bg-[#101822]/50 p-3 text-white placeholder-slate-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-800 py-3 text-base font-bold text-white transition-colors hover:bg-slate-700"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;