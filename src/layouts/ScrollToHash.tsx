import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    // Only run if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.replace("#", "");

      // Small delay to ensure page is loaded
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 130; // Your nav height in pixels
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
