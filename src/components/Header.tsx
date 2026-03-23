import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, User, LogOut, Settings } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleLocationChange = () => setIsOpen(false);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Order', path: '/order' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tighter text-primary">
              SAVOR<span className="text-destructive">KOREA</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-destructive ${
                  location.pathname === link.path ? 'text-destructive' : 'text-primary/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/order" className="relative p-2 hover:bg-secondary rounded-full transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 bg-destructive text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </Link>

            {user ? (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-destructive/20 hover:border-destructive transition-colors">
                    <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="min-w-[200px] bg-white rounded-2xl p-2 shadow-xl border border-border z-[60] animate-in fade-in zoom-in-95 duration-200">
                    <div className="px-3 py-2 mb-2">
                      <p className="text-sm font-bold text-primary">{user.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                    <DropdownMenu.Item 
                      className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-secondary outline-none"
                      onClick={() => navigate('/profile')}
                    >
                      <User size={16} /> Profile
                    </DropdownMenu.Item>
                    <DropdownMenu.Item 
                      className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer hover:bg-secondary outline-none text-destructive"
                      onClick={logout}
                    >
                      <LogOut size={16} /> Logout
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
              >
                Login
              </button>
            )}
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="my-2" />
                {user ? (
                  <>
                    <Link to="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-lg font-medium">
                      <User size={20} /> Profile
                    </Link>
                    <button onClick={() => { logout(); setIsOpen(false); }} className="flex items-center gap-2 text-lg font-medium text-destructive">
                      <LogOut size={20} /> Logout
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => { setIsAuthModalOpen(true); setIsOpen(false); }}
                    className="bg-destructive text-white text-center py-3 rounded-lg font-bold"
                  >
                    Login
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Header;
