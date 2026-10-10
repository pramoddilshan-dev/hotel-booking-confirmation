import { useState } from 'react';

export default function InfoGrid() {
  const [copied, setCopied] = useState(false);
  const wifiPassword = 'soleil-2026';

  const handleCopy = () => {
    navigator.clipboard.writeText(wifiPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      
      {/* 1. ARRIVAL CARD */}
      <div className="bg-neutral-0 rounded-3xl p-6 border border-neutral-200/80 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-terracotta-600 text-neutral-0 flex items-center justify-center">
                {/* Key Icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 0121 9z" />
                </svg>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta-700 font-semibold">
                Arrival
              </span>
            </div>
            <span className="font-serif text-2xl text-terracotta-700 font-normal">01</span>
          </div>

          <h3 className="font-serif text-xl text-neutral-900 font-bold mb-1">
            Check-in from 15:00
          </h3>
          <p className="text-xs text-neutral-600 mb-4 font-medium">Sat, 25 April</p>
          <p className="text-xs text-neutral-600 leading-relaxed font-sans">
            Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.
          </p>
        </div>
      </div>

      {/* 2. WIFI CARD WITH COPY LOGIC */}
      <div className="bg-neutral-0 rounded-3xl p-6 border border-neutral-200/80 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-500 text-neutral-0 flex items-center justify-center">
                {/* Wifi Icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-semibold">
                Wifi
              </span>
            </div>
            <span className="font-serif text-2xl text-blue-500 font-normal">02</span>
          </div>

          <h3 className="font-serif text-xl text-neutral-900 font-bold mb-1">
            Le Soleil · Guest
          </h3>
          <p className="text-xs text-neutral-600 mb-4 font-medium">Password below</p>

          {/* Credentials Box */}
          <div className="bg-neutral-100 rounded-2xl p-3 space-y-2 font-mono text-xs text-neutral-800">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase text-neutral-600">Network</span>
              <span className="font-medium text-neutral-900">Le Soleil · Guest</span>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-neutral-200">
              <span className="text-[10px] uppercase text-neutral-600">Password</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-neutral-900">{wifiPassword}</span>
                <button 
                  onClick={handleCopy}
                  className={`px-2 py-0.5 text-[10px] uppercase rounded-lg transition font-mono ${
                    copied 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800'
                  }`}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BREAKFAST CARD */}
      <div className="bg-neutral-0 rounded-3xl p-6 border border-neutral-200/80 shadow-xs flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-rose-500 text-neutral-0 flex items-center justify-center">
                {/* Coffee/Breakfast Icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-rose-500 font-semibold">
                Breakfast
              </span>
            </div>
            <span className="font-serif text-2xl text-rose-500 font-normal">03</span>
          </div>

          <h3 className="font-serif text-xl text-neutral-900 font-bold mb-1">
            Served 8 – 10:30
          </h3>
          <p className="text-xs text-neutral-600 mb-4 font-medium">On the terrace</p>
          <p className="text-xs text-neutral-600 leading-relaxed font-sans">
            Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.
          </p>
        </div>
      </div>

    </div>
  );
}