import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect, useCallback, useRef, memo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface HeaderProps {
  currentPath?: string;
}

export const Header = memo(function Header({ currentPath = '/' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ticking = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Show solid background when scrolled on all pages
  const showSolidBackground = isScrolled;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        showSolidBackground
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-neutral-200/50'
          : 'bg-white/5 backdrop-blur-md border-b border-white/10'
      }`}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className={`text-2xl font-bold transition-colors duration-300 ${
              showSolidBackground
                ? 'text-brand-navy hover:text-brand-blue'
                : 'text-white hover:text-white/80'
            }`}
            aria-label="AG Varmeteknikk - Hjem"
          >
            AG<span className={showSolidBackground ? 'text-brand-blue' : 'text-white/60'} aria-hidden="true">•</span>Varme
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/tjenester"
              className={`transition-colors duration-300 text-sm font-medium ${
                showSolidBackground
                  ? 'text-neutral-700 hover:text-brand-blue'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Tjenester
            </a>
            <a
              href="/om-oss"
              className={`transition-colors duration-300 text-sm font-medium ${
                showSolidBackground
                  ? 'text-neutral-700 hover:text-brand-blue'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Om oss
            </a>
            <a
              href="/kontakt"
              className={`transition-colors duration-300 text-sm font-medium ${
                showSolidBackground
                  ? 'text-neutral-700 hover:text-brand-blue'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Kontakt
            </a>
            <a
              href="tel:40213090"
              className="px-6 py-2.5 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white rounded-full hover:shadow-lg hover:shadow-brand-blue/30 transition-shadow duration-300 flex items-center gap-2 text-sm font-semibold will-change-auto hover:will-change-transform hover:scale-[1.02]"
              aria-label="Ring oss på 40 21 30 90"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>40 21 30 90</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 rounded-lg ${
              showSolidBackground
                ? 'text-brand-navy hover:text-brand-blue hover:bg-neutral-100'
                : 'text-white hover:text-white/80 hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Lukk meny" : "Åpne meny"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              className={`md:hidden pt-6 pb-4 space-y-4 ${
                showSolidBackground ? '' : 'bg-white/10 backdrop-blur-xl -mx-6 px-6 rounded-b-2xl'
              }`}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <a
                href="/tjenester"
                className={`block transition-colors duration-300 py-2 font-medium ${
                  showSolidBackground
                    ? 'text-neutral-700 hover:text-brand-blue'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tjenester
              </a>
              <a
                href="/om-oss"
                className={`block transition-colors duration-300 py-2 font-medium ${
                  showSolidBackground
                    ? 'text-neutral-700 hover:text-brand-blue'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Om oss
              </a>
              <a
                href="/kontakt"
                className={`block transition-colors duration-300 py-2 font-medium ${
                  showSolidBackground
                    ? 'text-neutral-700 hover:text-brand-blue'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
              <a
                href="tel:40213090"
                className="w-full px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white rounded-full hover:shadow-lg hover:shadow-brand-blue/30 transition-shadow duration-300 flex items-center justify-center gap-2 font-semibold"
                aria-label="Ring akutt på 40 21 30 90"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Ring akutt</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
});
