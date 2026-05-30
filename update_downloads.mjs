import fs from 'fs';
import path from 'path';

const dir = 'f:/CheatLock/src/components';

try {
  // 1. Hero.tsx
  let p = path.join(dir, 'Hero.tsx');
  let c = fs.readFileSync(p, 'utf-8');
  c = c.replace(
    /<button\s+id="hero-cta-download"\s+onClick=\{[^}]+\}\s+(className="[^"]+")\s*>/g,
    '<a\n                id="hero-cta-download"\n                href="/cheatlockdownload.apk"\n                download="cheatlockdownload.apk"\n                $1\n              >'
  );
  c = c.replace(
    /<span className="relative z-10 text-white">\{t\('hero\.cta1'\)\}<\/span>\s*<\/button>/g,
    '<span className="relative z-10 text-white">{t(\'hero.cta1\')}</span>\n              </a>'
  );
  fs.writeFileSync(p, c);

  // 2. Navbar.tsx
  p = path.join(dir, 'Navbar.tsx');
  c = fs.readFileSync(p, 'utf-8');
  // desktop
  c = c.replace(
    /<button\s+onClick=\{[^}]+\}\s+className="relative group overflow-hidden px-4\.5 py-2 rounded-full text-sm font-semibold cursor-pointer text-white shadow-xl transition-all duration-300 transform active:scale-95"\s*>/g,
    '<a\n              href="/cheatlockdownload.apk"\n              download="cheatlockdownload.apk"\n              className="relative group overflow-hidden px-4.5 py-2 rounded-full text-sm font-semibold cursor-pointer text-white shadow-xl transition-all duration-300 transform active:scale-95"\n            >'
  );
  c = c.replace(
    /<span>\{t\('nav\.download'\)\}<\/span>\s*<\/span>\s*<\/button>/g,
    '<span>{t(\'nav.download\')}</span>\n              </span>\n            </a>'
  );
  // mobile
  c = c.replace(
    /<button\s+onClick=\{[^}]+\}\s+className="py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl cursor-pointer shadow-lg active:scale-95"\s*>/g,
    '<a\n                href="/cheatlockdownload.apk"\n                download="cheatlockdownload.apk"\n                className="py-3 text-center block text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl cursor-pointer shadow-lg active:scale-95"\n              >'
  );
  c = c.replace(
    /\{t\('nav\.download'\)\}\s*<\/button>/g,
    '{t(\'nav.download\')}\n              </a>'
  );
  fs.writeFileSync(p, c);

  // 3. DownloadCTA.tsx
  p = path.join(dir, 'DownloadCTA.tsx');
  c = fs.readFileSync(p, 'utf-8');
  c = c.replace(
    /<button\s+id="download-btn-mobile"\s+onClick=\{[^}]+\}\s+(className="[^"]+")\s*>/g,
    '<a\n                id="download-btn-mobile"\n                href="/cheatlockdownload.apk"\n                download="cheatlockdownload.apk"\n                $1\n              >'
  );
  c = c.replace(
    /<span>Download App<\/span>\s*<\/button>/g,
    '<span>Download App</span>\n              </a>'
  );
  fs.writeFileSync(p, c);

  console.log('Update completed');
} catch (e) {
  console.error(e);
}
