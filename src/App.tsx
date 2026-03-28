/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Send, 
  ExternalLink, 
  BadgeCheck, 
  Terminal, 
  BarChart3, 
  ShieldCheck, 
  Star,
  Database,
  Github,
  Linkedin
} from 'lucide-react';

// --- Types ---

type Screen = 'home' | 'projects' | 'certificates' | 'contact';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  year: string;
  featured?: boolean;
  repoLink?: string;
}

interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  year: string;
  icon: any;
  color: string;
  image: string;
  link?: string;
}

// --- Mock Data ---

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'VoltVerge',
    description: 'A one-stop solution for managing and booking EV Charging stations.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoYO_Lui2G4EA3D8OGVApktGFej0rCfqHjvw319SzO-LqObzh2dh_YrTbkVnHDTMDOJKp8nItzc0XzQMS6R7F7gAhRzG52JBrp9Iys3oq_VR_LGanaU0odKNkl7n9wUZXSETq9lM75mm52PFNkL6YOGHWUyAF4DNZv9S_UIwBF3_AQMDjPohnJQszSf6G1tVMeZYKTvpfanCISZPC1AeNrBZaqYiG0Jt8mufOqYdCVKYn8NTjwbpHvfi2b8AoOjPZNSj_DoUSEo-AH',
    tags: ['Python', 'Django'],
    category: 'Power Solution',
    year: '2025',
    featured: true,
    repoLink: 'https://github.com/Soham2805/VoltVerge'
  },
];

const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Programming in C',
    organization: 'IIT, Bombay',
    date: 'Dec 12',
    year: '2024',
    icon: BadgeCheck,
    color: 'text-primary',
    image: 'http://googleusercontent.com/profile/picture/6',
    link: 'https://skillbuilder.aws/learn/FU5WCYVGKY/aws-cloud-quest-cloud-practitioner/JF9TKU68GT'
  },
  {
    id: '2',
    title: 'Introduction to Programming in Java',
    organization: 'IIT, Bombay',
    date: 'June 05',
    year: '2025',
    icon: Terminal,
    color: 'text-tertiary',
    image: 'http://googleusercontent.com/profile/picture/7',
    link: 'https://spoken-tutorial.org/tutorial-search/?search_foss=Java&search_language=English'
  },
  {
    id: '3',
    title: 'AWS Cloud Practitioner Essentials',
    organization: 'Amazon Web Services',
    date: 'Nov 22',
    year: '2025',
    icon: BarChart3,
    color: 'text-primary-container',
    image: 'http://googleusercontent.com/profile/picture/8',
    link: 'https://skillbuilder.aws/learn/FU5WCYVGKY/aws-cloud-quest-cloud-practitioner/JF9TKU68GT'
  },
  {
    id: '4',
    title: 'Android Developer Virtual Internship',
    organization: 'AICTE',
    date: 'Aug 10',
    year: '2024',
    icon: ShieldCheck,
    color: 'text-secondary',
    image: 'http://googleusercontent.com/profile/picture/9',
    link: 'https://eduskillsfoundation.org/'
  },
  {
    id: '5',
    title: 'Networking Basics',
    organization: 'Cisco',
    date: 'Oct 15',
    year: '2025',
    icon: Database,
    color: 'text-primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoYO_Lui2G4EA3D8OGVApktGFej0rCfqHjvw319SzO-LqObzh2dh_YrTbkVnHDTMDOJKp8nItzc0XzQMS6R7F7gAhRzG52JBrp9Iys3oq_VR_LGanaU0odKNkl7n9wUZXSETq9lM75mm52PFNkL6YOGHWUyAF4DNZv9S_UIwBF3_AQMDjPohnJQszSf6G1tVMeZYKTvpfanCISZPC1AeNrBZaqYiG0Jt8mufOqYdCVKYn8NTjwbpHvfi2b8AoOjPZNSj_DoUSEo-AH0',
    link: 'https://www.cisco.com/'
  }
];

// --- Components ---

const Navbar = ({ activeScreen, setScreen }: { activeScreen: Screen, setScreen: (s: Screen) => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center">
    <div className="bg-slate-900/70 backdrop-blur-xl rounded-full mt-10 mx-auto w-max px-6 py-3 shadow-2xl shadow-slate-950/50 flex items-center gap-8">
      <div className="text-xl font-bold tracking-tighter text-slate-100 font-headline uppercase">Soham Phulare</div>
      <div className="hidden md:flex items-center gap-6 font-manrope tracking-tight font-bold">
        {(['home', 'projects', 'certificates', 'contact'] as Screen[]).map((s) => (
          <button
            key={s}
            onClick={() => setScreen(s)}
            className={`capitalize transition-all duration-200 hover:scale-105 ${
              activeScreen === s ? 'text-primary' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <a 
        href="https://drive.google.com/file/d/1eO6ll_FhQc90ThC27CRaH36VaaCpMGxx/view?usp=drive_link" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-5 py-1.5 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200 active:scale-95"
      >
        Resume
      </a>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-950 border-t border-outline-variant/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 w-full py-12 px-8">
      <div className="flex flex-col items-center md:items-start gap-2">
        <span className="text-lg font-black text-slate-200 font-headline uppercase tracking-widest">SOHAM PHULARE</span>
        <span className="font-body text-sm text-slate-500">© 2026. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-10">
        <a href="https://www.linkedin.com/in/soham-phulare-3a14122a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors"><Linkedin size={20} /></a>
        <a href="https://github.com/Soham2805" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors"><Github size={20} /></a>
      </div>
    </div>
  </footer>
);

// --- Screens ---

const HomeScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="relative min-h-screen overflow-hidden bg-hero-mesh flex flex-col items-center justify-center px-6"
  >
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tertiary/10 blur-[150px] rounded-full"></div>
    </div>
    
    <section className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-center">
      <div className="lg:col-span-7 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-label text-sm uppercase tracking-[0.3em]">FULL-STACK ARCHITECT</span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-surface">
            Curating <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-tertiary">Digital</span> Experiences.
          </h1>
        </div>
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
          Sculpting high-performance applications with a focus on editorial aesthetics and functional precision. Specializing in the <span className="text-on-surface font-semibold">React & Node.js</span> ecosystem.
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          <button 
            onClick={() => setScreen('projects')}
            className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold rounded-full text-lg shadow-lg shadow-primary-container/20 hover:scale-105 transition-transform active:scale-95"
          >
            View Exhibition
          </button>
          <button 
            onClick={() => setScreen('contact')}
            className="px-8 py-4 bg-surface-container-high text-primary font-headline font-bold rounded-full text-lg hover:bg-surface-container-highest transition-colors flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight size={20} />
          </button>
        </div>
        <div className="flex items-center gap-12 mt-4">
          {[
            // Add your stats here, e.g., { label: 'Projects', value: '10+' }
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl font-headline font-extrabold text-on-surface">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-outline">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 hidden lg:grid grid-cols-2 gap-4">
        <div className="space-y-4 pt-12">
          <div className="bg-surface-container-high p-4 rounded-xl editorial-shadow border border-outline-variant/5">
            <img 
              alt="Code interface" 
              className="w-full h-48 object-cover rounded-lg mb-4" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsnPpk9lmaC7TWq4UAnKJHPnRYBL6IfwU1OtikKyKnEh1D086AB0D02nU3n9_89YlKgggcyAcbgHebjIx5P_3ExeKxsDCwgVIT38RXppIMiHyaiErnZxT21LU-y87g3kp3cpEHKgucwrG8zV5NjL14sYIx8mQJooAavvgN5p_KHIHnhBq8NYlmIkwFOkGVl3LDCyM3K_KnH1EIO_DLU1ORHJuO3Z8Kzrs7qUPwAz9xZ9FABSwWiVC1EEYp2C2qDPpTaNaa0RlpeoH2"
              referrerPolicy="no-referrer"
            />
            <span className="text-xs font-label text-tertiary uppercase tracking-widest">Performance</span>
            <h3 className="text-lg font-headline font-bold mt-1">Optimization Engine</h3>
          </div>
          <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
            <div className="flex gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-error"></span>
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="w-2 h-2 rounded-full bg-primary"></span>
            </div>
            <p className="text-sm text-on-surface-variant font-mono">system.initialize({'{'} stack: 'MERN' {'}'});</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-surface-container-highest p-4 rounded-xl border border-outline-variant/5 editorial-shadow">
            <img 
              alt="Abstract Art" 
              className="w-full h-64 object-cover rounded-lg mb-4" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpUAciy7maecoSdQ38dkHGx3kPyuok4P9a1CEVXOGqdHOjLTvy3TW11p3N61gL5tkxhZrz_tXU_hRuvKuDQp8FIqd7qTkJ2QPeZWBOIUSYggScb_IYUWjS82CfP0Pj0iwindgILt1C_hPTKIzjJvMV1aCpL-s_hiOwmcN0kqMsP4Z-CkSScZyU7hceCUkpBUPmzom2qqrlvj8lscfmvWXXWilmo7tgj01Z2nI6SpiL5oPOiEDucDc1KygltduMQBwOFmZJqCPROa29"
              referrerPolicy="no-referrer"
            />
            <span className="text-xs font-label text-primary uppercase tracking-widest">Aesthetics</span>
            <h3 className="text-lg font-headline font-bold mt-1">Visual Identity</h3>
          </div>
          <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 flex flex-col items-center justify-center text-center">
            <Database className="text-4xl text-primary mb-2" />
            <span className="text-sm font-bold">PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const ProjectsScreen = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto"
  >
    <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div className="max-w-2xl">
        <span className="text-primary font-label text-sm uppercase tracking-widest mb-4 block">Portfolio Archive</span>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-none text-on-surface">
          Selected <br/> Works.
        </h1>
      </div>
      <div className="max-w-xs">
        <p className="text-on-surface-variant body-md leading-relaxed">
          A collection of digital experiences focused on intentionality, performance, and aesthetic precision.
        </p>
      </div>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
      {PROJECTS.map((project, idx) => (
        <div 
          key={project.id}
          className={`${idx % 2 === 0 ? 'md:col-span-8' : 'md:col-span-4 mt-0 md:mt-24'} group`}
        >
          <div className={`bg-surface-container-high rounded-xl overflow-hidden ${idx % 2 === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'} mb-6 relative`}>
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={project.image} 
              alt={project.title}
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="bg-surface-container-highest/80 backdrop-blur-md text-secondary text-xs px-3 py-1 rounded-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">{project.title}</h3>
              <p className="text-on-surface-variant max-w-lg mb-4">{project.description}</p>
              <div className="flex gap-3">
                <span className="text-primary font-label text-xs tracking-widest uppercase">{project.category}</span>
                <span className="text-primary font-label text-xs tracking-widest uppercase">{project.year}</span>
              </div>
            </div>
            {project.repoLink ? (
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-label text-md uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                View Code <ArrowRight size={18} />
              </a>
            ) : (
              <button className="flex items-center gap-2 text-primary font-label text-md uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                View Project <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const CertificatesScreen = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-40 pb-24 px-6 max-w-7xl mx-auto"
  >
    <header className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-primary font-label text-sm uppercase tracking-[0.2em] mb-4 block">Validation & Growth</span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface mb-6 leading-none">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Expertise.</span>
          </h1>
          <p className="text-on-surface-variant text-lg font-body leading-relaxed">
            A curated collection of certifications and specialized courses that define my technical expertise and commitment to continuous learning.
          </p>
        </div>
      </div>
    </header>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {CERTIFICATES.map((cert) => (
        <article 
          key={cert.id}
          className="group bg-surface-container-high rounded-xl overflow-hidden hover:bg-surface-container-highest transition-all duration-300 flex flex-col relative"
        >
          <div className="w-full h-48 overflow-hidden relative">
            <div className={`absolute inset-0 opacity-20 mix-blend-overlay z-10 bg-current ${cert.color}`}></div>
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="p-6 flex flex-col justify-between flex-grow relative z-10">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-surface-container-lowest flex items-center justify-center rounded-lg shadow-sm">
                  <cert.icon className={`${cert.color}`} size={24} />
                </div>
                <span className="bg-surface-container-highest px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest text-secondary uppercase">{cert.year}</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface leading-snug mb-2">{cert.title}</h3>
              <p className={`${cert.color} text-sm font-label font-medium mb-4`}>{cert.organization}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/10">
              <div className="text-xs text-on-surface-variant font-label">
                Issued: <span className="text-on-surface">{cert.date}</span>
              </div>
              <a 
                href={cert.link || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-primary font-label text-xs font-bold uppercase tracking-widest group/btn"
              >
                View Course
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>

    <section className="mt-32 p-12 bg-surface-container-low rounded-3xl flex flex-col md:flex-row items-center justify-around gap-12 text-center">
      {[
        { label: 'Industry Certifications', value: '12+' },
        { label: 'Learning Hours', value: '450' },
        { label: 'Ongoing Courses', value: '04' }
      ].map((stat, idx) => (
        <div key={stat.label} className="flex flex-col items-center">
          <span className="text-5xl font-headline font-black text-on-surface mb-2">{stat.value}</span>
          <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">{stat.label}</span>
        </div>
      ))}
    </section>
  </motion.div>
);

const ContactScreen = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen pt-40 pb-20 px-6"
  >
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3 flex flex-col justify-start">
          <span className="text-primary font-label text-xs uppercase tracking-widest mb-4">Get in touch</span>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-8 leading-tight">
            Let's start a <span className="text-primary">conversation.</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-label text-outline uppercase tracking-widest">Email</p>
                <p className="text-on-surface font-semibold">sohamphulare05@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-label text-outline uppercase tracking-widest">Location</p>
                <p className="text-on-surface font-semibold">Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="bg-surface-container-low rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-label text-on-surface-variant ml-1" htmlFor="name">Name</label>
                  <input 
                    className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-xl px-4 py-4 text-on-surface placeholder:text-outline/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" 
                    id="name" 
                    placeholder="Your Name" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-label text-on-surface-variant ml-1" htmlFor="email">Email</label>
                  <input 
                    className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-xl px-4 py-4 text-on-surface placeholder:text-outline/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" 
                    id="email" 
                    placeholder="your@email.com" 
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-label text-on-surface-variant ml-1" htmlFor="message">Message</label>
                <textarea 
                  className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-xl px-4 py-4 text-on-surface placeholder:text-outline/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none" 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  rows={5}
                ></textarea>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/soham-phulare-3a14122a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary hover:scale-110 transition-all"><Linkedin size={20} /></a>
                  <a href="https://github.com/Soham2805" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary hover:scale-110 transition-all"><Github size={20} /></a>
                </div>
                <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary w-full md:w-auto px-10 py-4 rounded-full font-bold tracking-tight hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <section className="w-full h-[400px] mt-20 relative grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10"></div>
      <img 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBJaOCAzl1ghOWklNuOO-2kX4Tb5tpBKfW5MEe8a3qqRQs7R33N2PkZfh3Vt5L3RBmvIwYyKQ-APspOXRFeTd9Igscw3YZJOcFXAxYij5vtUkjhCRM6wHoMbCiDwBB4p58HibPo4ZokrM5aOkw2xFfnlcLvpQQsCJAl-TXjiV5hHxBXWTctHH5nvpWrXpXhNZgzP0LleGufnhuWsgeWSbolNKhvez6OuzkM0s8hDljb8p_u4XtwHxsQUUNt9LNwWAK0CizxTNIRhBF"
        alt="Map"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="bg-surface-container-high/80 backdrop-blur-md px-6 py-3 rounded-full border border-outline-variant/20 shadow-2xl">
          <span className="text-on-surface font-label text-sm tracking-widest flex items-center gap-2">
            <MapPin size={16} className="text-primary" /> CURRENTLY IN MUMBAI, INDIA
          </span>
        </div>
      </div>
    </section>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeScreen={screen} setScreen={setScreen} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {screen === 'home' && <HomeScreen setScreen={setScreen} />}
          {screen === 'projects' && <ProjectsScreen />}
          {screen === 'certificates' && <CertificatesScreen />}
          {screen === 'contact' && <ContactScreen />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
