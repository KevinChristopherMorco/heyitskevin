import { useRef, useEffect } from "react";

const useScrollEffect = (animation) => {
  const targetRef = useRef([]);
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle(animation, entry.isIntersecting)
      );
    });
  }, []);

  useEffect(() => {
    targetRef.current.forEach((ref) => observerRef.current.observe(ref));

    return () => {
      observerRef.current.disconnect();
    };
  }, [targetRef]);

  const ref = (refs) => targetRef.current.push(refs);

  return { ref };
};

export default useScrollEffect;
