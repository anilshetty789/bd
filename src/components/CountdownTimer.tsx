import { useEffect, useState, useRef } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  onComplete: () => void;
}

const CountdownTimer = ({ targetDate, onComplete }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        onComplete();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const FlipCard = ({ value }: { value: number }) => {
    const [flip, setFlip] = useState(false);
    const prevValue = useRef(value);
    const displayValue = String(value).padStart(2, '0');

    useEffect(() => {
      if (prevValue.current !== value) {
        setFlip(true);
        const timeout = setTimeout(() => {
          setFlip(false);
          prevValue.current = value;
        }, 300);
        return () => clearTimeout(timeout);
      }
    }, [value]);

    return (
      <div className="relative w-full h-full perspective-1000">
        <div 
          className={`relative w-full h-full transition-transform duration-300 transform-style-3d ${
            flip ? 'flip-animate' : ''
          }`}
        >
          <span className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gradient">
            {displayValue}
          </span>
        </div>
      </div>
    );
  };

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative group">
        {/* Glow effect behind card */}
        <div className="absolute -inset-2 bg-gradient-hero rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
        
        {/* Main card */}
        <div className="relative bg-card shadow-card rounded-2xl p-1 overflow-hidden">
          {/* Inner gradient border */}
          <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl" />
          
          {/* Content container */}
          <div className="relative bg-card rounded-xl px-5 py-6 sm:px-8 sm:py-8 min-w-[85px] sm:min-w-[110px] flex flex-col items-center justify-center">
            {/* Top highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            
            {/* Number with flip effect */}
            <FlipCard value={value} />
            
            {/* Label */}
            <span className="mt-2 text-xs sm:text-sm font-body font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const Separator = () => (
    <div className="flex flex-col items-center justify-center gap-2 px-1 sm:px-2 self-center mb-6">
      <div className="w-2 h-2 rounded-full bg-primary animate-bounce-soft" />
      <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce-soft animation-delay-200" />
    </div>
  );

  return (
    <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4">
      <TimeBlock value={timeLeft.days} label="Days" />
      <Separator />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <Separator />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <Separator />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
