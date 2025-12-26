import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Heart, Sparkles, Star } from "lucide-react";

// Images from root folder
const photos = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
];

const BirthdayWishes = () => {
  useEffect(() => {
    const duration = 4000;
    const end = Date.now() + duration;

    const colors = ['#f472b6', '#fb7185', '#fda4af', '#fecdd3', '#fff1f2'];

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.5 },
      colors: colors,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 relative z-10">
      {/* Main heading */}
      <div className="text-center mb-12 opacity-0 animate-scaleIn">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          <Heart className="w-10 h-10 text-rose fill-rose animate-heartbeat" />
          <Sparkles className="w-8 h-8 text-primary animate-pulse animation-delay-400" />
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold text-gradient mb-6">
          Happy Birthday!
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
          🎂 Wishing you the most amazing day filled with love, joy, and all your heart desires! 🎂
        </p>
      </div>

      {/* Photo gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto px-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative group opacity-0 animate-fadeIn"
            style={{ animationDelay: `${(index + 1) * 0.15}s` }}
          >
            <div className="absolute -inset-2 bg-gradient-hero rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
            
            <div className="relative overflow-hidden rounded-2xl aspect-square shadow-card border-2 border-primary/20">
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <Heart className="w-8 h-8 text-card fill-card animate-heartbeat" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Personal message */}
      <div className="max-w-3xl mx-auto text-center opacity-0 animate-fadeIn animation-delay-800 px-4">
        <div className="relative bg-card shadow-card rounded-3xl p-8 sm:p-12 border border-primary/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-hero opacity-10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-hero opacity-10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full blur-xl" />
            </div>
            <Heart className="w-12 h-12 text-primary mx-auto fill-primary/30 relative" />
          </div>
          
          <p className="relative text-lg sm:text-xl md:text-2xl text-foreground font-body leading-relaxed mb-8">
            To the most wonderful person I know – today we celebrate YOU! 
            Your kindness, laughter, and beautiful soul make the world a better place. 
            May this year bring you endless happiness, incredible adventures, 
            and all the dreams your heart holds.
          </p>
          
          <p className="relative text-xl sm:text-2xl font-display italic text-primary">
            With all my love and warmest wishes 💖
          </p>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="absolute bottom-10 left-10 text-5xl sm:text-6xl animate-float hidden sm:block">🎈</div>
      <div className="absolute top-20 right-10 text-4xl sm:text-5xl animate-float animation-delay-400 hidden sm:block">🎁</div>
      <div className="absolute bottom-20 right-20 text-3xl sm:text-4xl animate-float animation-delay-600 hidden sm:block">🎉</div>
      <div className="absolute top-1/3 left-5 text-2xl sm:text-3xl animate-float animation-delay-200 hidden sm:block">✨</div>
    </div>
  );
};

export default BirthdayWishes;
