import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  children: ReactNode;
}

const ScrollToTop = (props: ScrollToTopProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;

