
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
        {/* Tech Hexagon */}
        <path
          d="M200 50 L350 150 L350 250 L200 350 L50 250 L50 150 Z"
          fill={fillPrimary}
          strokeWidth="20"
        />
        
        {/* Digital Lines */}
        <path
          d="M125 175 L275 175 M125 225 L275 225"
          stroke={fillSecondary}
          strokeWidth="25"
          strokeLinecap="round"
        />
        
        {/* Connection Points */}
        <circle cx="125" cy="175" r="12" fill={fillSecondary} />
        <circle cx="275" cy="175" r="12" fill={fillSecondary} />
        <circle cx="125" cy="225" r="12" fill={fillSecondary} />
        <circle cx="275" cy="225" r="12" fill={fillSecondary} />
      </svg>
    </div>
  );
};

export default WizardLogo;
