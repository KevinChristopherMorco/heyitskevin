import React, { useState, useEffect, useRef } from "react";

const useActiveList = () => {
  const [screen, setScreen] = useState(false);
  const [activeState, setActiveState] = useState({
    hamburger: false,
    list: null,
  });

  const setActive = (type, value) => {
    setActiveState((prev) => ({ ...prev, [type]: value }));
  };
  const clearActive = (type) => {
    setActiveState((prev) => ({ ...prev, [type]: false }));
  };

  useEffect(() => {
    const { hamburger } = activeState;
    hamburger
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [activeState]);
  return { activeState, setActive, clearActive };
};

export default useActiveList;
