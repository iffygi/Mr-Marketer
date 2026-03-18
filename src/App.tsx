import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Play, 
  ChevronDown,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  Globe
} from 'lucide-react';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (p: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Case Studies', id: 'cases' },
    { name: 'About', id: 'about' },
    { name: 'Blog', id: 'blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => setActivePage('home')}
        >
          <span className="text-emerald-400">Mr</span>
          <span className="text-white">Marketer</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-sm font-medium transition-colors hover:text-emerald-400 ${activePage === link.id ? 'text-emerald-400' : 'text-white/70'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => setActivePage('contact')}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-2 rounded-full transition-all transform hover:scale-105 active:scale-95"
          >
            Book Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-lg font-medium text-left ${activePage === link.id ? 'text-emerald-400' : 'text-white/70'}`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                setActivePage('contact');
                setIsMobileMenuOpen(false);
              }}
              className="bg-emerald-500 text-black font-bold px-6 py-3 rounded-xl text-center"
            >
              Book Strategy Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background elements */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Zap size={14} />
          ROI Focused Agency
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
          We Turn Your Social Media Into a <span className="text-emerald-400">Revenue Machine.</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
          Stop posting for likes. Start posting for profit. We help e-commerce brands and startups scale to 7-figures through data-driven social strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onCtaClick}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-extrabold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Book Free Strategy Call <ArrowRight size={20} />
          </button>
          <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold px-8 py-4 rounded-xl text-lg transition-all">
            View Case Studies
          </button>
        </div>

        <div className="mt-12 flex items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Trusted By</span>
          <div className="flex gap-8 items-center">
            <div className="font-bold text-xl">BRAND.A</div>
            <div className="font-bold text-xl">TECH-X</div>
            <div className="font-bold text-xl">GLOW-UP</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
            alt="Marketing Dashboard" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        
        {/* Floating Stats Card */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-2xl z-20"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-tighter">Average ROAS</p>
              <p className="text-2xl font-black text-white">4.8x</p>
            </div>
          </div>
          <div className="w-32 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-emerald-500" />
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-6 -right-6 bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-2xl z-20"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-tighter">Growth</p>
              <p className="text-2xl font-black text-white">+124%</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Results = () => {
  const stats = [
    { label: 'Revenue Generated', value: '$12M+', icon: <BarChart3 className="text-emerald-400" /> },
    { label: 'Average ROAS', value: '4.5x', icon: <TrendingUp className="text-blue-400" /> },
    { label: 'Active Clients', value: '50+', icon: <Users className="text-purple-400" /> },
    { label: 'Ad Spend Managed', value: '$2M+', icon: <Zap className="text-yellow-400" /> },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.3em] mb-4">Our Track Record</h2>
          <p className="text-4xl md:text-5xl font-black text-white mb-6">Numbers Don't Lie.</p>
          <p className="text-zinc-400 max-w-2xl mx-auto">We focus on the only metric that matters: Your Bottom Line. Here's what we've achieved for our partners.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 text-center hover:border-emerald-500/30 transition-all group"
            >
              <div className="inline-flex p-4 bg-white/5 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-white mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Study Preview */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="relative group cursor-pointer overflow-hidden rounded-3xl border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2426" 
              alt="Case Study 1" 
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
                <TrendingUp size={16} /> E-commerce Scaling
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">How we took a skincare brand from $10k to $150k/mo in 90 days.</h4>
              <p className="text-zinc-400 text-sm mb-6">Strategy: Paid Ads + Content Funnel</p>
              <button className="flex items-center gap-2 text-white font-bold group-hover:text-emerald-400 transition-colors">
                Read Case Study <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-3xl border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2426" 
              alt="Case Study 2" 
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-2">
                <Users size={16} /> Lead Generation
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Generating 500+ high-quality B2B leads for a SaaS startup.</h4>
              <p className="text-zinc-400 text-sm mb-6">Strategy: LinkedIn Growth + Funnel Optimization</p>
              <button className="flex items-center gap-2 text-white font-bold group-hover:text-blue-400 transition-colors">
                Read Case Study <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Paid Ads Management',
      desc: 'Meta, TikTok, and Google ads designed for maximum ROAS. We don\'t just run ads; we build profitable ecosystems.',
      icon: <Zap className="text-emerald-400" />,
      features: ['Creative Strategy', 'A/B Testing', 'Scaling Systems']
    },
    {
      title: 'Content Creation',
      desc: 'High-converting UGC and brand content that stops the scroll and builds desire for your products.',
      icon: <Play className="text-blue-400" />,
      features: ['UGC Production', 'Video Editing', 'Script Writing']
    },
    {
      title: 'Social Media Growth',
      desc: 'Organic strategies to build a loyal community that buys from you without needing ad spend.',
      icon: <TrendingUp className="text-purple-400" />,
      features: ['Community Mgmt', 'Viral Strategy', 'Influencer Outreach']
    },
    {
      title: 'Funnel Strategy',
      desc: 'Optimizing your entire customer journey from first click to repeat purchase.',
      icon: <BarChart3 className="text-yellow-400" />,
      features: ['CRO', 'Email Marketing', 'Landing Pages']
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
            <p className="text-4xl md:text-5xl font-black text-white">We Make You Money, Not Just Content.</p>
          </div>
          <p className="text-zinc-400 max-w-sm">Full-funnel marketing solutions tailored for brands that want to dominate their niche.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-emerald-500/50 transition-all flex flex-col h-full"
            >
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-zinc-400 text-sm mb-8 flex-grow">{service.desc}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    <CheckCircle2 size={14} className="text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className="text-white font-bold flex items-center gap-2 group">
                Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: 'Audit', desc: 'We analyze your current data, ads, and content to find the leaks in your funnel.' },
    { title: 'Strategy', desc: 'We build a custom roadmap focused on your specific ROI goals.' },
    { title: 'Execution', desc: 'Our team takes over the heavy lifting—creative, management, and tech.' },
    { title: 'Scaling', desc: 'Once we find the winners, we pour fuel on the fire to maximize growth.' },
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">The Road to 7-Figures.</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">A proven, systematic approach to scaling your brand without the guesswork.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-800 hidden lg:block -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-emerald-500 text-black text-2xl font-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-24 bg-black overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.3em] mb-4">Client Love</h2>
        <p className="text-4xl md:text-5xl font-black text-white">Don't Take Our Word For It.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-8 rounded-3xl bg-zinc-900 border border-white/5 relative">
            <div className="flex gap-1 text-emerald-400 mb-6">
              {[...Array(5)].map((_, star) => <Zap key={star} size={16} fill="currentColor" />)}
            </div>
            <p className="text-zinc-300 italic mb-8 leading-relaxed">
              "Mr Marketer completely transformed our approach to social media. We went from struggling to get engagement to having a consistent flow of high-quality leads every single day. The ROI has been insane."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800" />
              <div>
                <p className="text-white font-bold">John Doe</p>
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">CEO, Brandly</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Testimonials */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Sarah Jenkins', company: 'Luxe Beauty', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800' },
          { name: 'Michael Chen', company: 'TechFlow', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' },
          { name: 'Emma Wilson', company: 'EcoStyle', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800' }
        ].map((video, idx) => (
          <div key={idx} className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[9/16] cursor-pointer">
            <img 
              src={video.img} 
              alt={video.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-emerald-500/90 text-black rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                <Play size={32} fill="currentColor" />
              </div>
            </div>

            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-lg">{video.name}</p>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{video.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactForm = () => (
  <section id="contact" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl font-black text-white mb-8 leading-tight">Ready to Scale Your Brand?</h2>
          <p className="text-xl text-zinc-400 mb-12">Book a free 30-minute strategy call where we'll audit your current social media and show you exactly how we can help you grow.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <CheckCircle2 />
              </div>
              <p className="text-white font-medium">Free Social Media Audit</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <CheckCircle2 />
              </div>
              <p className="text-white font-medium">Custom Scaling Roadmap</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <CheckCircle2 />
              </div>
              <p className="text-white font-medium">No-Obligation Consultation</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-10 rounded-3xl border border-white/10 shadow-2xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Full Name</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-all" placeholder="John Smith" />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-all" placeholder="john@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Website / Social URL</label>
              <input type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-all" placeholder="www.yourbrand.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Monthly Ad Spend</label>
              <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-all">
                <option>$0 - $5k</option>
                <option>$5k - $20k</option>
                <option>$20k - $50k</option>
                <option>$50k+</option>
              </select>
            </div>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-black py-4 rounded-xl text-lg transition-all transform active:scale-95">
              Book My Strategy Call
            </button>
            <p className="text-center text-zinc-500 text-xs">Limited slots available for this month. We only work with 3 new clients per month to ensure maximum results.</p>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="text-2xl font-bold tracking-tighter mb-6">
            <span className="text-emerald-400">Mr</span>
            <span className="text-white">Marketer</span>
          </div>
          <p className="text-zinc-500 max-w-sm mb-8">
            We are a data-driven social media marketing agency focused on one thing: ROI. We help brands scale through strategic content and paid ads.
          </p>
          <div className="flex gap-4">
            <div className="p-2 bg-white/5 rounded-lg text-zinc-400 hover:text-emerald-400 cursor-pointer transition-colors"><Instagram size={20} /></div>
            <div className="p-2 bg-white/5 rounded-lg text-zinc-400 hover:text-emerald-400 cursor-pointer transition-colors"><Twitter size={20} /></div>
            <div className="p-2 bg-white/5 rounded-lg text-zinc-400 hover:text-emerald-400 cursor-pointer transition-colors"><Linkedin size={20} /></div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Services</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Case Studies</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-emerald-400 cursor-pointer transition-colors">Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} /> hello@mrmarketer.com</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +1 (555) 000-0000</li>
            <li className="flex items-center gap-2"><Globe size={16} /> New York, NY</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs font-bold uppercase tracking-widest">
        <p>© 2026 Mr Marketer. All Rights Reserved.</p>
        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

const ExitIntentPopup = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-[2rem] max-w-2xl w-full shadow-[0_0_50px_rgba(16,185,129,0.2)] overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500" />

        {!isSubmitted ? (
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              Limited Time Offer
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Wait! Get Your <span className="text-emerald-400">Free</span> Social Media Audit.
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Before you go, let our experts analyze your current strategy and give you a custom roadmap to 2x your engagement. **Value: $497** - Yours for free.
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  required
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:border-emerald-500 outline-none transition-all"
                />
                <input 
                  required
                  type="email" 
                  placeholder="Work Email" 
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:border-emerald-500 outline-none transition-all"
                />
              </div>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-black py-4 rounded-xl text-lg transition-all transform active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                Claim My Free Audit Now
              </button>
              <p className="text-center text-zinc-500 text-xs">
                No spam. Just pure value. We respect your privacy.
              </p>
            </form>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">You're on the List!</h2>
            <p className="text-zinc-400 mb-8">
              Our strategy team will reach out within 24 hours to schedule your audit. Get ready to scale.
            </p>
            <button 
              onClick={onClose}
              className="text-emerald-400 font-bold hover:underline"
            >
              Back to Website
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownPopup]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActivePage('contact');
    }
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        {activePage === 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero onCtaClick={scrollToContact} />
            <Results />
            <Services />
            <HowItWorks />
            <Testimonials />
            <ContactForm />
          </motion.div>
        )}

        {activePage === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
          >
            <h1 className="text-6xl font-black mb-12">Our Services</h1>
            <Services />
            <ContactForm />
          </motion.div>
        )}

        {activePage === 'cases' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
          >
            <h1 className="text-6xl font-black mb-12">Case Studies</h1>
            <Results />
            <ContactForm />
          </motion.div>
        )}

        {activePage === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h1 className="text-6xl font-black mb-8">The Mr Marketer Story</h1>
                <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                  We didn't start as an agency. We started as brand owners who were tired of agencies that promised "reach" but delivered zero sales.
                </p>
                <p className="text-zinc-500 mb-12 leading-relaxed">
                  After scaling our own brands to 7-figures, we decided to help others do the same. Our approach is simple: Data over opinions. ROI over vanity metrics. Results over fluff.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-black text-emerald-400 mb-2">100%</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Focus on ROI</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-blue-400 mb-2">24/7</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Optimization</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2426" 
                  alt="Team" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        )}

        {activePage === 'blog' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
          >
            <h1 className="text-6xl font-black mb-12">Insights & Strategies</h1>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="group cursor-pointer">
                  <div className="rounded-2xl overflow-hidden mb-6 border border-white/10">
                    <img 
                      src={`https://picsum.photos/seed/marketing${i}/800/600`} 
                      alt="Blog" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Paid Ads</p>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">5 Meta Ad Strategies to Double Your ROAS in 2026</h3>
                  <p className="text-zinc-500 text-sm mb-6">Learn the exact framework we use to scale brands from $1k to $10k daily spend...</p>
                  <button className="text-white font-bold flex items-center gap-2">Read More <ArrowRight size={16} /></button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activePage === 'contact' && (
          <div className="pt-20">
            <ContactForm />
          </div>
        )}
      </main>

      <Footer />
      <AnimatePresence>
        {showExitPopup && (
          <ExitIntentPopup 
            isOpen={showExitPopup} 
            onClose={() => setShowExitPopup(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
