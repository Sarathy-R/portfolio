import React, { useState, useEffect, useRef } from 'react';
import { Layers, CloudUpload, Code, Users, Link } from 'lucide-react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative w-full scroll-mt-16 py-20 bg-[#0d1117]">
      <a 
        href="#experience" 
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/50 text-slate-400 backdrop-blur-sm transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0d1117] sm:right-8"
        aria-label="Scroll to Experience section"
      >
        <Link className="h-5 w-5" />
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 text-center lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-sm font-bold uppercase tracking-wider text-primary">About Me</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Professional Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Timeline Column */}
          <div className={`order-2 lg:order-1 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="mb-8 text-2xl font-bold text-white">Work Experience</h3>
            <div className="relative space-y-12 border-l-2 border-slate-800 pl-8 ml-3">
              
              {/* Item 1 */}
              <div className={`relative group transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary ring-8 ring-[#0d1117] transition-all duration-300 group-hover:ring-primary/20 group-hover:scale-110"></div>
                <div>
                  <span className="text-sm font-medium text-slate-400">2020 - Present</span>
                  <h4 className="mt-1 text-lg font-bold text-white group-hover:text-primary transition-colors">Senior Software Developer, Tech Solutions Inc.</h4>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    Led the design and implementation of scalable, serverless applications on AWS. Architected and deployed microservices using Python, AWS Lambda, API Gateway, and DynamoDB. Championed Infrastructure as Code (IaC) with Terraform, improving deployment efficiency by 40%.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className={`relative group transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary ring-8 ring-[#0d1117] transition-all duration-300 group-hover:ring-primary/20 group-hover:scale-110"></div>
                <div>
                  <span className="text-sm font-medium text-slate-400">2017 - 2020</span>
                  <h4 className="mt-1 text-lg font-bold text-white group-hover:text-primary transition-colors">Software Developer, Cloud Innovations</h4>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    Developed and maintained core backend services for a high-traffic SaaS platform. Utilized Docker and Kubernetes for container orchestration, and established CI/CD pipelines to automate testing and deployment, significantly reducing release cycles.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className={`relative group transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary ring-8 ring-[#0d1117] transition-all duration-300 group-hover:ring-primary/20 group-hover:scale-110"></div>
                <div>
                  <span className="text-sm font-medium text-slate-400">2014 - 2017</span>
                  <h4 className="mt-1 text-lg font-bold text-white group-hover:text-primary transition-colors">Junior Developer, Data Corp</h4>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    Contributed to the development of data processing pipelines using Python and SQL. Gained foundational experience in cloud computing with AWS EC2 and S3, and practiced agile methodologies in a collaborative team environment.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bio Column */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="rounded-2xl border border-slate-800 bg-card-dark p-8 shadow-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_50px_-12px_rgba(18,105,226,0.25)] hover:-translate-y-2">
              <h3 className="mb-4 text-2xl font-bold text-white">Crafting Scalable Cloud Solutions</h3>
              <div className="space-y-4 text-slate-400 text-base leading-relaxed">
                <p>
                  With over a decade of experience, I specialize in building robust, high-performance backend systems and cloud infrastructure. My passion lies in solving complex problems through clean, efficient Python code and leveraging the power of the AWS ecosystem.
                </p>
                <p>
                  As a senior developer, I lead projects from concept to deployment, focusing on serverless architectures, containerization, and Infrastructure as Code to create resilient and scalable solutions.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold text-white">What I Offer</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 group">
                    <Layers className="mt-1 h-5 w-5 text-primary transition-transform group-hover:scale-125" />
                    <span className="text-slate-300 group-hover:text-white transition-colors">Scalable Backend Architecture with Python</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <CloudUpload className="mt-1 h-5 w-5 text-primary transition-transform group-hover:scale-125" />
                    <span className="text-slate-300 group-hover:text-white transition-colors">AWS Cloud Infrastructure & Automation</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <Code className="mt-1 h-5 w-5 text-primary transition-transform group-hover:scale-125" />
                    <span className="text-slate-300 group-hover:text-white transition-colors">CI/CD Pipeline Design & Implementation</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <Users className="mt-1 h-5 w-5 text-primary transition-transform group-hover:scale-125" />
                    <span className="text-slate-300 group-hover:text-white transition-colors">Technical Leadership & Mentorship</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 border-t border-slate-800 pt-6">
                <button className="w-full rounded-lg bg-primary py-3 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;