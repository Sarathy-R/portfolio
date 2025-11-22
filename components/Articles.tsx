import React, { useState } from 'react';
import { ArrowRight, Link } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
}

const articlesData: Article[] = [
  {
    id: 1,
    title: 'Optimizing Python Lambdas for Performance',
    summary: 'A look into cold starts, memory allocation, and best practices for high-performance serverless functions.',
    date: 'Oct 2023',
    category: 'Serverless',
  },
  {
    id: 2,
    title: 'Serverless CI/CD on AWS',
    summary: 'How to automate your deployment pipeline using AWS CodePipeline and CodeBuild for serverless applications.',
    date: 'Aug 2023',
    category: 'DevOps',
  },
  {
    id: 3,
    title: 'Deep Dive into AWS IAM Roles',
    summary: 'Understanding the core concepts of Identity and Access Management to secure your cloud resources.',
    date: 'Jun 2023',
    category: 'AWS',
  },
  {
    id: 4,
    title: 'Building Resilient Systems with Microservices',
    summary: 'Exploring patterns and strategies for designing robust and scalable microservice-based applications.',
    date: 'Apr 2023',
    category: 'Architecture',
  },
  {
    id: 5,
    title: 'Python Type Hinting: A Practical Guide',
    summary: "Leverage Python's static typing system to write cleaner, more maintainable, and bug-free code.",
    date: 'Feb 2023',
    category: 'Python',
  },
  {
    id: 6,
    title: 'Infrastructure as Code with Terraform',
    summary: 'An introductory guide to managing your cloud infrastructure declaratively using Terraform.',
    date: 'Dec 2022',
    category: 'DevOps',
  },
];

const categories = ['All', 'Python', 'AWS', 'DevOps', 'Architecture', 'Serverless'];

const Articles: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredArticles = activeFilter === 'All' 
    ? articlesData 
    : articlesData.filter(article => article.category === activeFilter);

  return (
    <section id="articles" className="relative w-full scroll-mt-16 py-20 bg-[#0d1117]">
      <a 
        href="#articles" 
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/50 text-slate-400 backdrop-blur-sm transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0d1117] sm:right-8"
        aria-label="Scroll to Articles section"
      >
        <Link className="h-5 w-5" />
      </a>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Writings & Articles
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            A collection of my thoughts on cloud architecture, Python development, and software engineering best practices.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-primary text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {filteredArticles.map((article) => (
            <a
              key={article.id}
              href="#"
              className="group block rounded-xl border border-transparent bg-background-dark p-6 transition-all duration-300 hover:border-slate-700 hover:bg-[#1a222d]"
            >
              <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-bold text-white transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {article.summary}
                  </p>
                </div>
                <div className="mt-4 flex shrink-0 items-center gap-4 sm:mt-0">
                  <span className="text-sm font-medium text-slate-500">{article.date}</span>
                  <ArrowRight className="h-5 w-5 text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="rounded-lg bg-slate-800 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-slate-700">
            View More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;