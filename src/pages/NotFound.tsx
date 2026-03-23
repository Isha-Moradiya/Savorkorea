import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-9xl font-bold text-destructive mb-4">404</h1>
        <h2 className="text-3xl font-bold text-primary mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-10 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}