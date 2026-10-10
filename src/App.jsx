import { useState } from 'react';
import Sidebar from './components/Sidebar';
import StackedCards from './components/StackedCards';
import InfoGrid from './components/InfoGrid';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-neutral-100 font-sans">
      
      {/* Mobile Top Header */}
      <div className="lg:hidden flex items-center justify-between p-6 bg-neutral-50 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <span className="font-serif italic text-lg text-terracotta-600 leading-none">Maison</span>
          <span className="font-serif font-bold text-lg text-neutral-900 tracking-wide">Soleil</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 text-neutral-800 hover:bg-neutral-200 rounded-lg transition"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar Component */}
      <Sidebar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header Title Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-neutral-600 mb-1">
                Booking · Confirmed
              </p>
              <h1 className="font-serif italic text-4xl lg:text-5xl text-neutral-900 font-normal">
                Bienvenue, <span className="text-terracotta-700 not-italic font-serif">Lucia.</span>
              </h1>
            </div>

            {/* Top Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 rounded-full border border-neutral-300 text-sm font-medium text-neutral-800 hover:bg-neutral-200 transition">
                Print receipt
              </button>
              <button className="px-5 py-2.5 rounded-full bg-neutral-900 text-neutral-0 text-sm font-medium hover:bg-neutral-800 transition shadow-sm">
                Add to calendar
              </button>
            </div>
          </div>

          {/* Stacked Cards Section */}
          <StackedCards />

          {/* Bottom Info Grid Cards */}
          <InfoGrid />
        </div>
      </main>
    </div>
  );
}