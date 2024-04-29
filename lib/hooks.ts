import { useEffect, useState } from "react";

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}