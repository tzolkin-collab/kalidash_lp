import React from 'react';
import ShinyText from '../effects/ShinyText';

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  icon?: React.ReactNode;
}

export function ShinyButton({ 
  text, 
  href,
  icon,
  className = "", 
  ...props 
}: ShinyButtonProps) {
  const content = (
    <>
      <ShinyText 
        text={text} 
        disabled={false} 
        speed={3} 
        className="font-bold text-[15px]" 
        color="#f0f0f0" // Cor base do texto (escura para contrastar com o fundo amarelo)
        shineColor="#000000" // Cor do brilho (branco)
      />
      {icon && icon}
    </>
  );

  const baseClasses = `inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#f59e0b] hover:bg-[#fbbf24] transition-colors duration-150 ${className}`;
  const style = { animation: "pulse-gold 2.4s cubic-bezier(0.4,0,0.6,1) infinite" };

  if (href) {
    return (
      <a href={href} className={baseClasses} style={style}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} style={style} {...props}>
      {content}
    </button>
  );
}
