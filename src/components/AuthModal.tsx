import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

type AuthView = 'login' | 'signup' | 'otp';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [view, setView] = useState<AuthView>('login');
  const [formData, setFormData] = useState({ name: '', email: '', password: '', otp: '' });
  const { login, signup } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (view === 'login') {
      login(formData.email);
      toast.success('Welcome back!');
      onClose();
    } else if (view === 'signup') {
      setView('otp');
    } else if (view === 'otp') {
      signup(formData.name, formData.email);
      toast.success('Account created successfully!');
      onClose();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-[2rem] shadow-2xl z-[70] overflow-hidden outline-none">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <Dialog.Title className="font-serif text-2xl font-bold text-primary">
                {view === 'login' ? 'Welcome Back' : view === 'signup' ? 'Create Account' : 'Verify OTP'}
              </Dialog.Title>
              <Dialog.Close className="p-2 hover:bg-secondary rounded-full transition-colors">
                <X size={20} />
              </Dialog.Close>
            </div>

            <AnimatePresence mode="wait">
              <motion.form
                key={view}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {view === 'signup' && (
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary flex items-center gap-2">
                      <User size={16} className="text-destructive" /> Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                )}

                {view !== 'otp' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary flex items-center gap-2">
                        <Mail size={16} className="text-destructive" /> Email or Phone
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary flex items-center gap-2">
                        <Lock size={16} className="text-destructive" /> Password
                      </label>
                      <input
                        required
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                    </div>
                  </>
                )}

                {view === 'otp' && (
                  <div className="space-y-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      We've sent a 4-digit code to <strong>{formData.email}</strong>
                    </p>
                    <div className="flex justify-center gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength={1}
                          className="w-12 h-14 text-center text-2xl font-bold rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none"
                        />
                      ))}
                    </div>
                    <button type="button" className="text-destructive text-sm font-bold hover:underline">
                      Resend OTP
                    </button>
                  </div>
                )}

                <button className="w-full bg-destructive text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                  {view === 'login' ? 'Sign In' : view === 'signup' ? 'Sign Up' : 'Verify & Login'}
                  <ArrowRight size={18} />
                </button>

                <div className="text-center text-sm">
                  {view === 'login' ? (
                    <p className="text-muted-foreground">
                      Don't have an account?{' '}
                      <button type="button" onClick={() => setView('signup')} className="text-destructive font-bold hover:underline">
                        Sign Up
                      </button>
                    </p>
                  ) : view === 'signup' ? (
                    <p className="text-muted-foreground">
                      Already have an account?{' '}
                      <button type="button" onClick={() => setView('login')} className="text-destructive font-bold hover:underline">
                        Sign In
                      </button>
                    </p>
                  ) : null}
                </div>
              </motion.form>
            </AnimatePresence>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}