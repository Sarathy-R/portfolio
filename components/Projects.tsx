import React from 'react';
import { Eye, Github, FileText, Link } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    docs?: string;
  };
}

const projects: Project[] = [
  {
    title: 'Cloud Data Pipeline',
    description: 'A serverless data processing pipeline on AWS using Python, Lambda, and S3 for scalable and efficient data handling.',
    tags: ['Python', 'AWS Lambda', 'S3', 'Serverless'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'A customer service chatbot developed with natural language processing libraries in Python and deployed on AWS EC2.',
    tags: ['Python', 'NLTK', 'Flask', 'AWS EC2'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    title: 'E-commerce Platform API',
    description: 'A robust backend API for an e-commerce site, built with Django Rest Framework and PostgreSQL, containerized with Docker and deployed on AWS Fargate.',
    tags: ['Django', 'PostgreSQL', 'Docker', 'AWS Fargate'],
    links: {
      docs: '#',
      github: '#',
    },
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative w-full scroll-mt-16 py-20 bg-background-dark">
      <a 
        href="#projects" 
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/50 text-slate-400 backdrop-blur-sm transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark sm:right-8"
        aria-label="Scroll to Projects section"
      >
        <Link className="h-5 w-5" />
      </a>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Here are some of the key projects I've worked on, showcasing my expertise in Python, AWS, and modern web technologies.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col gap-6 rounded-xl border border-slate-800 bg-[#16202C] p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                   {project.links.docs && (
                    <a
                      href={project.links.docs}
                      className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      <span>API Docs</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-base text-slate-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;