
interface WizardLogoProps {
  white?: boolean;
}

const WizardLogo = ({ white = false }: WizardLogoProps) => {
  const fillPrimary = white ? "#FFFFFF" : "#8B5CF6";
  const fillSecondary = white ? "#F0F0F0" : "#F59E0B";

  return (
    <div className="w-10 h-10 relative">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 400 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Circle */}
        <circle 
          cx="200" 
          cy="200" 
          r="150" 
          fill={fillPrimary}
        />
        
        {/* Magic Wand */}
        <path 
          d="M150 150 L250 250 M240 240 L280 280" 
          stroke={fillSecondary}
          strokeWidth="30"
          strokeLinecap="round"
        />
        
        {/* Sparkle */}
        <circle 
          cx="140" 
          cy="140" 
          r="15" 
          fill={fillSecondary}
        />
      </svg>
    </div>
  );
};

export default WizardLogo;
