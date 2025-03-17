import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const checkInView = () => {
      animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };
    
    window.addEventListener('scroll', checkInView);
    // Trigger once on load
    checkInView();
    
    return () => {
      window.removeEventListener('scroll', checkInView);
    };
  }, []);
};

export default useScrollAnimation;
