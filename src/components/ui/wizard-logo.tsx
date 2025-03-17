interface WizardLogoProps {
  white?: boolean;
}

const WizardLogo = ({ white = false }: WizardLogoProps) => {
  const fillColor = white ? "#FFFFFF" : "#4F46E5";
  
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wizard Hat */}
      <path 
        d="M20 3C12 3 10 12 10 14C10 15 10.6 16 12 16C13.5 16 14.4 15 15 14C15.6 13 16.5 12 18 12C19.5 12 20.5 13 21 14C21.5 15 22.5 16 24 16C25.5 16 26 15 26 14C26 12 23 3 20 3Z" 
        fill={fillColor}
      />
      
      {/* Stars */}
      <path 
        d="M7 19L9 21L7 23L5 21L7 19Z" 
        fill={fillColor}
      />
      <path 
        d="M33 19L35 21L33 23L31 21L33 19Z" 
        fill={fillColor}
      />
      <path 
        d="M27 27L29 29L27 31L25 29L27 27Z" 
        fill={fillColor}
      />
      
      {/* Face */}
      <path 
        d="M20 18C14.5 18 10 22.5 10 28C10 33.5 14.5 38 20 38C25.5 38 30 33.5 30 28C30 22.5 25.5 18 20 18ZM16 25C16.8 25 17.5 25.7 17.5 26.5C17.5 27.3 16.8 28 16 28C15.2 28 14.5 27.3 14.5 26.5C14.5 25.7 15.2 25 16 25ZM24 25C24.8 25 25.5 25.7 25.5 26.5C25.5 27.3 24.8 28 24 28C23.2 28 22.5 27.3 22.5 26.5C22.5 25.7 23.2 25 24 25ZM20 34C17.2 34 15 31.8 15 31C15 30.8 15.2 30.6 15.4 30.6C15.6 30.6 15.7 30.7 15.8 30.8C17 32 18.5 32.8 20 32.8C21.5 32.8 23 32 24.2 30.8C24.3 30.7 24.5 30.6 24.6 30.6C24.8 30.6 25 30.8 25 31C25 31.8 22.8 34 20 34Z" 
        fill={fillColor}
      />
    </svg>
  );
};

export default WizardLogo;