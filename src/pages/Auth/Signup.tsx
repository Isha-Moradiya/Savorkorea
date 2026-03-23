import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

export default function Signup() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-40 pb-24 max-w-md mx-auto px-6">
        <div className="bg-white p-10 rounded-3xl border border-border shadow-sm">
          <h1 className="font-serif text-3xl font-bold text-primary mb-2">Create Account</h1>
          <p className="text-muted-foreground mb-8">Join the Savor Club today.</p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none" placeholder="name@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Password</label>
              <input type="password" className="w-full px-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none" placeholder="••••••••" />
            </div>
            <button className="w-full bg-destructive text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform mt-4">
              Sign Up
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm">
            <p className="text-muted-foreground">
              Already have an account? <Link to="/login" className="text-destructive font-bold">Sign In</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}