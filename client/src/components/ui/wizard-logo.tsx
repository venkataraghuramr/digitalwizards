
interface WizardLogoProps {
  white?: boolean;
}

const WizardLogo = ({ white = false }: WizardLogoProps) => {
  const fillPrimary = white ? "#FFFFFF" : "#8B5CF6"; // Purple
  const fillSecondary = white ? "#F0F0F0" : "#F59E0B"; // Orange

  return (
    <div className="w-10 h-10 relative">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 400 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main D shape */}
        <path 
          d="M50 50 L50 350 L250 350 C305.228 350 350 305.228 350 250 V150 C350 94.772 305.228 50 250 50 L50 50 Z" 
          fill={fillPrimary}
        />
        
        {/* W shape */}
        <path 
          d="M100 150 L150 250 L200 150 L250 250 L300 150" 
          stroke={fillSecondary}
          strokeWidth="40"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default WizardLogo;
