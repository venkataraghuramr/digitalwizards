
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
        {/* Abstract D */}
        <path 
          d="M100 50 L100 350 A150 150 0 0 0 250 200 L250 200 A150 150 0 0 0 100 50"
          fill={fillPrimary}
        />
        
        {/* Abstract W */}
        <path 
          d="M180 100 L220 300 L260 100 L300 300"
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
