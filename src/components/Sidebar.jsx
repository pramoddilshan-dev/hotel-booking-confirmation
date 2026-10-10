export default function Sidebar({ isOpen, onClose }) {
  const navItems = [
    { label: 'Your stay', badge: '1', active: true },
    { label: 'The house', active: false },
    { label: 'Around town', active: false },
    { label: 'Breakfast', active: false },
    { label: 'Messages', active: false },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-xs"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 h-full w-[280px] bg-neutral-50 border-r border-neutral-200 
        flex flex-col justify-between p-6 z-50 transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div>
          {/* Top Header & Close Button for Mobile */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              {/* Sun Logo Icon */}
              <svg className="w-6 h-6 text-sun-500" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col">
                <span className="font-serif italic text-lg text-terracotta-600 leading-none">Maison</span>
                <span className="font-serif font-bold text-lg text-neutral-900 tracking-wide">Soleil</span>
              </div>
            </div>

            {/* Mobile Close Button */}
            {isOpen && (
              <button 
                onClick={onClose}
                className="lg:hidden p-2 text-neutral-700 hover:bg-neutral-200 rounded-full transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition ${
                  item.active 
                    ? 'bg-neutral-0 text-neutral-900 shadow-xs font-semibold' 
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <span className="flex items-center gap-3">
                  {/* Icon placeholder or custom svgs can go here */}
                  {item.label}
                </span>
                {item.badge && (
                  <span className="bg-terracotta-700 text-neutral-0 text-xs px-2 py-0.5 rounded-full font-mono">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section (Weather Card & Footer info) */}
        <div className="space-y-6 pt-6 border-t border-dashed border-neutral-300">
          {/* Weather Widget */}
          <div className="bg-sun-300/60 p-4 rounded-2xl flex items-center justify-between text-neutral-900">
            <div>
              <p className="text-[10px] tracking-wider uppercase font-mono text-neutral-700">Today in Cassis</p>
              <h4 className="font-serif text-2xl font-bold mt-0.5">27°</h4>
              <p className="text-xs text-neutral-700 mt-0.5">Sunny · light breeze</p>
            </div>
            <div className="w-10 h-10 bg-sun-500 rounded-full shadow-inner flex items-center justify-center">
              {/* Sun icon */}
              <div className="w-6 h-6 bg-sun-200 rounded-full"></div>
            </div>
          </div>

          {/* Hotel Footer Details */}
          <div className="text-[11px] text-neutral-600 font-mono space-y-1">
            <p>EST. 1987</p>
            <p>MAISON SOLEIL · 12 RUE DES OLIVIERS · CASSIS</p>
            <p className="pt-2 text-neutral-500">© 2026 MAISON SOLEIL</p>
          </div>
        </div>
      </aside>
    </>
  );
}