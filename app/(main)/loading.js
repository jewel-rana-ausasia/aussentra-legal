export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]">
      {/* Background radial depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#451a03_0%,_transparent_65%)] opacity-20"></div>

      <div className="relative flex flex-col items-center">
        
        {/* The Animated Insignia */}
        <div className="relative flex h-36 w-36 items-center justify-center">
          
          {/* Outer Slow Orbit (The Protection) */}
          <div className="absolute h-full w-full rounded-full border-[0.5px] border-amber-900/40"></div>
          <div className="absolute h-full w-full rounded-full border-t border-amber-500/60 animate-[spin_4s_linear_infinite]"></div>
          
          {/* Middle Hexagon (The Structure) */}
          <div className="absolute h-24 w-24 border-[1px] border-amber-200/30 rotate-[30deg] animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute h-24 w-24 border-[1px] border-amber-200/30 -rotate-[30deg] animate-[spin_10s_linear_infinite] [animation-direction:reverse]"></div>
          
          {/* Inner Core (The Pillar) */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Pulsing Golden Core */}
            <div className="h-10 w-1 bg-gradient-to-b from-amber-200 via-amber-500 to-amber-800 shadow-[0_0_15px_#fbbf24] animate-pulse"></div>
            <div className="absolute h-3 w-8 border-t border-amber-400 -top-1"></div>
            <div className="absolute h-3 w-8 border-b border-amber-400 -bottom-1"></div>
          </div>
        </div>

        {/* Branding Section */}
        <div className="mt-10 flex flex-col items-center">
          {/* Brand Name */}
          <h1 className="text-2xl font-serif tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 font-medium uppercase">
            Ausentra Legal
          </h1>
          
          {/* Elegant Divider */}
          <div className="mt-4 flex items-center gap-4 w-full">
            <div className="h-[0.5px] w-16 bg-gradient-to-r from-transparent to-amber-600/50"></div>
            <div className="h-1 w-1 rotate-45 bg-amber-500 shadow-[0_0_8px_#fbbf24]"></div>
            <div className="h-[0.5px] w-16 bg-gradient-to-l from-transparent to-amber-600/50"></div>
          </div>

          {/* Tagline */}
          <p className="mt-3 text-[9px] font-light tracking-[0.5em] text-amber-600/70 uppercase">
            Securing Your Excellence
          </p>
        </div>

        {/* Subtle Progress Indicator */}
        <div className="mt-8 flex gap-1.5">
          <div className="h-1 w-1 rounded-full bg-amber-800 animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-1 w-1 rounded-full bg-amber-600 animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-1 w-1 rounded-full bg-amber-400 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}