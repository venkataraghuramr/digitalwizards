interface WizardLogoProps {
  white?: boolean;
}

const WizardLogo = ({ white = false }: WizardLogoProps) => {
  const bgColor = white ? "bg-primary-700" : "bg-primary-700";
  const textColor = white ? "text-white" : "text-white";
  
  return (
    <div className={`${bgColor} ${textColor} p-2 rounded`}>
      <i className="fas fa-hat-wizard text-xl"></i>
    </div>
  );
};

export default WizardLogo;
