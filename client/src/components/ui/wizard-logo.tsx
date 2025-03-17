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
          d="M50 0H300C355.228 0 400 44.7715 400 100V300C400 355.228 355.228 400 300 400H50V0Z" 
          fill={fillPrimary}
        />

        {/* Inner Arrow */}
        <path 
          d="M150 100L250 200L150 300" 
          stroke={fillSecondary}
          strokeWidth="50"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default WizardLogo;