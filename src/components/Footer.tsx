import { Shield, Mail, Linkedin, Facebook, Github } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
  onLinkClick: (id: string) => void;
}

export default function Footer({ theme, onLinkClick }: FooterProps) {
  const productLinks = [
    { label: 'Proctor Suite', id: 'features' },
    { label: 'Client Enforcer App', id: 'download' },
    { label: 'Pilot Sandbox', id: 'contact' },
    { label: 'Pricing Tiers', id: 'pricing' },
  ];

  const companyLinks = [
    { label: 'About Us', id: 'about' },
    { label: 'Vision & Mission', id: 'mission' },
    { label: 'NextZen Team', id: 'team' },
    { label: 'Client Matrix Review', id: 'comparison' },
  ];

  const resourceLinks = [
    { label: 'LTI Integration Spec', id: 'features' },
    { label: 'Canvas/Moodle Plugin', id: 'features' },
    { label: 'Support SLA Documentation', id: 'pricing' },
    { label: 'Sandbox Admin Demo', id: 'contact' },
  ];

  const legalLinks = [
    { label: 'GDPR Compliance', id: 'home' },
    { label: 'Privacy Safeguards', id: 'home' },
    { label: 'Terms & Conditions', id: 'home' },
    { label: 'LMS Key Authentication Keys', id: 'home' },
  ];

  const currentYear = 2026;

  return (
    <footer
      id="footer"
      className={`border-t py-16 transition-colors duration-500 relative ${theme === 'dark'
          ? 'bg-[#050816] border-slate-850 text-slate-400'
          : 'bg-white border-slate-200 text-slate-600'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
          {/* Logo Brand / Credit details */}
          <div className="md:col-span-4 space-y-5 text-left md:pr-4">
            <div
              onClick={() => onLinkClick('home')}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="relative flex items-center justify-center">
                <img src="/logo.png" alt="CheatLock Logo" className="h-8 w-auto object-contain transform group-hover:scale-105 group-hover:brightness-110 transition-all duration-300 drop-shadow-[0_0_6px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white-important">
                <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                  CheatLock
                </span>
              </span>
            </div>
            <p className="text-xs leading-relaxed">
              Lock out shortcuts. Unlock true integrity. CheatLock secures online examinations through advanced face gaze, voice scanning, and system lockdown shell sandboxes.
            </p>

            {/* Social channels icons array container */}
            <div className="flex space-x-3.5 pt-1">
              {[
                { label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com' },
                { label: 'Facebook', icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com' },
                { label: 'GitHub', icon: <Github className="w-4 h-4" />, href: 'https://github.com/aitijya-atibo' },
                { label: 'Email', icon: <Mail className="w-4 h-4" />, href: 'mailto:aitijya03@gmail.com' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  title={social.label}
                  className={`p-2 rounded-full border transition-all duration-300 ${theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-blue-500 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-slate-500">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onLinkClick(link.id)}
                    className="hover:text-blue-500 hover:underline transition-colors opacity-85 hover:opacity-100 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-slate-500">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onLinkClick(link.id)}
                    className="hover:text-blue-500 hover:underline transition-colors opacity-85 hover:opacity-100 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource links */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-slate-500">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onLinkClick(link.id)}
                    className="hover:text-blue-500 hover:underline transition-colors opacity-85 hover:opacity-100 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono font-bold text-slate-500">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onLinkClick(link.id)}
                    className="hover:text-blue-500 hover:underline transition-colors opacity-85 hover:opacity-100 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom footer credit panel */}
        <div className="border-t pt-8 mt-12 border-slate-550/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-550">
          <div className="text-slate-500 text-center sm:text-left">
            <span>© {currentYear} CheatLock. All rights reserved. </span>
            <span className="block sm:inline sm:ml-2 text-[10px] uppercase font-mono tracking-wider opacity-60">
              GDPR Core Audited • SOC-2 Type II
            </span>
          </div>

          <div className="font-display font-medium text-slate-500 text-center sm:text-right">
            <span>Built with innovation by <strong>Aitijya Sarker fromTeam NextZen</strong> — creators of CheatLock.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
