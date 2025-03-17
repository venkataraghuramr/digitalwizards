interface WizardLogoProps {
  white?: boolean;
}

const WizardLogo = ({ white = false }: WizardLogoProps) => {
  const fillPrimary = white ? "#FFFFFF" : "#4F46E5";
  const fillSecondary = white ? "#F0F0F0" : "#F59E0B";
  
  return (
    <div className="w-10 h-10 relative">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle cx="20" cy="20" r="20" fill={fillPrimary} />
        
        {/* Wizard Hat */}
        <path 
          d="M20 5.5L8 18H32L20 5.5Z" 
          fill={fillSecondary} 
        />
        
        {/* Hat Brim */}
        <path 
          d="M7 19.5C7 19.5 15 22 20 22C25 22 33 19.5 33 19.5V23C33 23 25 25.5 20 25.5C15 25.5 7 23 7 23V19.5Z" 
          fill={white ? "#DDDDDD" : "#FBBF24"} 
        />
        
        {/* Magic Wand */}
        <path 
          d="M16 24L24 33" 
          stroke={white ? "#FFFFFF" : "#4F46E5"} 
          strokeWidth="2" 
          strokeLinecap="round" 
        />
        
        {/* Wand Star */}
        <path 
          d="M24 33L26 35M24 33L22 35M24 33L26 31M24 33L22 31" 
          stroke={fillSecondary} 
          strokeWidth="2" 
          strokeLinecap="round" 
        />
        
        {/* Stars */}
        <circle cx="11" cy="14" r="1" fill={white ? "#FFFFFF" : "#FBBF24"} />
        <circle cx="29" cy="14" r="1" fill={white ? "#FFFFFF" : "#FBBF24"} />
        <circle cx="14" cy="10" r="1" fill={white ? "#FFFFFF" : "#FBBF24"} />
        <circle cx="26" cy="10" r="1" fill={white ? "#FFFFFF" : "#FBBF24"} />
      </svg>
    </div>
  );
};

export default WizardLogo;