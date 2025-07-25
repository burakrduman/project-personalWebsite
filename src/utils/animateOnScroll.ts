/**
 * Utility function to animate elements when they scroll into view
 */
export const setupScrollAnimation = () => {
  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .stagger-children');
    
    // Helper function to check if an element is in viewport
    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
      );
    };
    
    // Function to handle scroll animations
    const handleScrollAnimation = () => {
      animatedElements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add('animate-active');
        }
      });
    };
    
    // Initial check on page load
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation, { passive: true });
  });
};

export default setupScrollAnimation;