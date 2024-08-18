import { useRef, useEffect } from "react";

const useScrollEffect = (animation) => {
  const ref = useRef([]);

  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle(animation, entry.isIntersecting)
      );
    });
    ref.current.forEach((ref) => observe.observe(ref));
  }, [ref]);
  const addRef = (refs) => ref.current.push(refs);

  return { addRef };
};

export default useScrollEffect;
