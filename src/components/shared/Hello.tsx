
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const Hello = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Delay the animation slightly for a better effect
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={cn(
      "flex flex-col items-center justify-center min-h-screen transition-opacity duration-1000",
      visible ? "opacity-100" : "opacity-0"
    )}>
      <div className="hello-container p-8 rounded-full">
        <h1 
          className={cn(
            "hello-text text-8xl md:text-9xl animate-fade-up opacity-0 text-foreground", 
            visible && "opacity-100"
          )}
          style={{ 
            animationDelay: "300ms",
            animationFillMode: "forwards"
          }}
        >
          Hello
        </h1>
      </div>
    </div>
  );
};

export default Hello;
