// components/TypedText.tsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText: React.FC = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Web Developer",
        "Generative AI Engineer",
        "Machine Learning Engineer",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up on unmount
    };
  }, []);

  return <span ref={el} />;
};

export default TypedText;
