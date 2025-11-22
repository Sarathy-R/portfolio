import React from 'react';
import { Link } from 'lucide-react';

interface Skill {
  name: string;
  iconClass: string;
  color?: string; 
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', iconClass: 'devicon-python-plain colored' },
      { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
      { name: 'Go', iconClass: 'devicon-go-plain colored' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
      { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain colored' },
      { name: 'Terraform', iconClass: 'devicon-terraform-plain colored' },
      { name: 'CI/CD', iconClass: 'devicon-githubactions-plain colored' },
      { name: 'Ansible', iconClass: 'devicon-ansible-plain colored' },
    ],
  },
  {
    title: 'Databases & Storage',
    skills: [
      { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
      { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
      { name: 'Redis', iconClass: 'devicon-redis-plain colored' },
      { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
      { name: 'Firebase', iconClass: 'devicon-firebase-plain text-[#DE3423]' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Django', iconClass: 'devicon-django-plain colored' },
      { name: 'Flask', iconClass: 'devicon-flask-original colored' },
      { name: 'FastAPI', iconClass: 'devicon-fastapi-plain colored' },
      { name: 'React', iconClass: 'devicon-react-original colored' },
      { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
      { name: 'Pandas', iconClass: 'devicon-pandas-plain colored' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative w-full scroll-mt-16 py-20 bg-background-dark">
      <a 
        href="#skills" 
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/50 text-slate-400 backdrop-blur-sm transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark sm:right-8"
        aria-label="Scroll to Skills section"
      >
        <Link className="h-5 w-5" />
      </a>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My Technical Arsenal
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Technologies I leverage to engineer robust, scalable, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-primary tracking-wide">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 rounded-xl border border-border-dark bg-surface-dark p-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1"
                  >
                    <i className={`${skill.iconClass} text-3xl transition-transform group-hover:scale-110`}></i>
                    <span className="font-semibold text-slate-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;