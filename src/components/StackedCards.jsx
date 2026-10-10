export default function StackedCards() {
  return (
    <div className="relative my-8 lg:my-12 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 min-h-[420px]">
      
      {/* 1. RECEIPT TICKET CARD */}
      <div className="w-full max-w-[360px] bg-neutral-0 rounded-3xl p-6 shadow-xl border border-neutral-200/60 z-10 transform lg:-rotate-3 lg:translate-x-6 hover:rotate-0 transition-transform duration-300">
        
        {/* Receipt Header */}
        <div className="flex justify-between items-start pb-4 border-b border-dashed border-neutral-300">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">Receipt</p>
            <h3 className="font-serif font-bold text-xl text-neutral-900 mt-0.5">Your stay</h3>
          </div>
          <div className="text-right font-mono text-[11px] text-neutral-600">
            <p>№ MS-2026</p>
            <p>0421-AH</p>
          </div>
        </div>

        {/* Check-in / Check-out Dates */}
        <div className="grid grid-cols-2 gap-4 py-5 border-b border-dashed border-neutral-300">
          <div>
            <p className="text-[10px] font-mono uppercase text-neutral-600">Check in</p>
            <p className="font-serif text-2xl font-bold text-neutral-900 mt-1">25 Apr</p>
            <p className="text-xs text-neutral-600 mt-0.5">Saturday · 15:00</p>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase text-neutral-600">Check out</p>
            <p className="font-serif text-2xl font-bold text-neutral-900 mt-1">29 Apr</p>
            <p className="text-xs text-neutral-600 mt-0.5">Wednesday · 11:00</p>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="py-4 space-y-2 text-xs font-sans border-b border-neutral-300">
          <div className="flex justify-between text-neutral-800">
            <span>Room · La Garrigue × 4 nights</span>
            <span className="font-mono">€ 620.00</span>
          </div>
          <div className="flex justify-between text-neutral-800">
            <span>Breakfast × 2 guests</span>
            <span className="font-mono">€ 96.00</span>
          </div>
          <div className="flex justify-between text-neutral-800">
            <span>Tourist tax</span>
            <span className="font-mono">€ 14.40</span>
          </div>
        </div>

        {/* Total Price */}
        <div className="py-4 flex justify-between items-baseline">
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-600">Total Paid</span>
          <span className="font-serif text-3xl font-bold text-neutral-900">€ 730.40</span>
        </div>

        {/* Payment Tag & Barcode */}
        <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-neutral-600">
          <span>PAID · WISE · GBP</span>
          {/* Simple Decorative Barcode SVG */}
          <div className="flex gap-0.5 h-6 items-center">
            <div className="w-0.5 h-full bg-neutral-900"></div>
            <div className="w-1 h-full bg-neutral-900"></div>
            <div className="w-0.5 h-full bg-neutral-900"></div>
            <div className="w-1.5 h-full bg-neutral-900"></div>
            <div className="w-0.5 h-full bg-neutral-900"></div>
            <div className="w-1 h-full bg-neutral-900"></div>
            <div className="w-2 h-full bg-neutral-900"></div>
            <div className="w-0.5 h-full bg-neutral-900"></div>
          </div>
        </div>

      </div>

      {/* 2. WELCOME CARD (HOST NOTE) */}
      <div className="w-full max-w-[360px] bg-gradient-to-br from-terracotta-500 to-terracotta-700 text-neutral-0 rounded-3xl p-6 shadow-2xl z-20 transform lg:rotate-3 lg:-translate-x-6 hover:rotate-0 transition-transform duration-300 flex flex-col justify-between min-h-[380px]">
        
        <div>
          {/* Card Top Label & Sun Icon */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-50/80">
              Welcome Card
            </span>
            <svg className="w-6 h-6 text-sun-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
            </svg>
          </div>

          {/* Host Note Header */}
          <p className="font-serif italic text-sm text-sun-200">A note from your host,</p>
          <h2 className="font-serif text-4xl font-normal mt-1 mb-4">Margaux.</h2>

          {/* Note Body */}
          <p className="text-xs text-neutral-50/90 leading-relaxed font-sans">
            We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you.
          </p>
        </div>

        {/* Room Info Footer */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-50/70">Room</p>
          <p className="font-serif text-lg font-medium mt-0.5">La Garrigue</p>
        </div>

      </div>

    </div>
  );
}