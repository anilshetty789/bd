import { useState, useCallback } from "react";
import FloatingParticles from "@/components/FloatingParticles";
import CountdownTimer from "@/components/CountdownTimer";
import BirthdayWishes from "@/components/BirthdayWishes";
import { Gift, Cake, Heart } from "lucide-react";

const Index = () => {
  // Target date: December 27th, 2025 at midnight (12:00 AM)
  const targetDate = new Date(2025, 11, 27, 0, 0, 0); // Month is 0-indexed, so 11 = December
  
  const [showWishes, setShowWishes] = useState(false);

  const handleCountdownComplete = useCallback(() => {
    setShowWishes(true);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingParticles />

      {!showWishes ? (
        // Countdown view
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
          {/* Header section */}
          <div className="text-center mb-16 opacity-0 animate-fadeIn">
            {/* Icons */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8">
              <div className="p-3 bg-card shadow-soft rounded-2xl">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="p-4 bg-gradient-hero rounded-2xl shadow-card">
                <Cake className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
              </div>
              <div className="p-3 bg-card shadow-soft rounded-2xl">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose fill-rose/30" />
              </div>
            </div>
            
            {/* Main title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-3">
              <span className="text-gradient">Something Special</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-foreground/80 mb-6">
              Is Coming Your Way!
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground font-body max-w-md mx-auto">
              Get ready for an amazing surprise... ✨
            </p>
          </div>

          {/* Countdown */}
          <CountdownTimer 
            targetDate={targetDate} 
            onComplete={handleCountdownComplete} 
          />

          {/* Teaser text */}
          <div className="mt-16 text-center opacity-0 animate-fadeIn animation-delay-600">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-card shadow-soft rounded-full border border-primary/10">
              <span className="text-sm sm:text-base text-muted-foreground font-body">
                The magic begins on
              </span>
              <span className="text-sm sm:text-base font-semibold text-primary font-body">
                December 27th
              </span>
              <span className="text-lg">💕</span>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce-soft" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/70 animate-bounce-soft animation-delay-200" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40 animate-bounce-soft animation-delay-400" />
          </div>
        </div>
      ) : (
        // Birthday wishes view
        <BirthdayWishes />
      )}
    </div>
  );
};

export default Index;
