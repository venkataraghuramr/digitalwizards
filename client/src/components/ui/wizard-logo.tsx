
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
        {/* Wizard Hat Base */}
        <path 
          d="M200 50 L50 300 L350 300 Z" 
          fill={fillPrimary}
        />
        
        {/* Magic Band */}
        <path 
          d="M85 250 L315 250" 
          stroke={fillSecondary}
          strokeWidth="30"
          strokeLinecap="round"
        />
        
        {/* Stars */}
        <circle cx="150" cy="180" r="15" fill={fillSecondary} />
        <circle cx="250" cy="180" r="15" fill={fillSecondary} />
        <circle cx="200" cy="150" r="15" fill={fillSecondary} />
      </svg>
    </div>
  );
};

export default WizardLogo;
