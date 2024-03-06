import React, { useEffect, useRef } from 'react';

const ScrollRevealContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ScrollReveal = require('scrollreveal').default;
      ScrollReveal().reveal(containerRef.current, {
        // Opções de configuração do ScrollReveal
        // Consulte a documentação para mais opções: https://scrollrevealjs.org/api/reveal.html
      });
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollRevealContainer;
