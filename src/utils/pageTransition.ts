/**
 * Utility function to handle page transitions
 * @param callback Function to execute after transition animation
 * @param navigateDelay Time to wait before navigation (should match CSS transition duration)
 * @param cleanupDelay Time to wait before cleaning up transition classes
 */
export const handlePageTransition = (
    callback: () => void,
    navigateDelay = 400,
    cleanupDelay = 50
  ) => {
    // Add fade-out transition
    document.body.classList.add("page-transition-out");
  
    // Wait for the transition to complete before executing callback
    setTimeout(() => {
      // Execute the provided callback (like navigation)
      callback();
  
      // Delay the removal of transition class slightly to ensure smooth transition
      setTimeout(() => {
        document.body.classList.remove("page-transition-out");
      }, cleanupDelay);
    }, navigateDelay);
  };