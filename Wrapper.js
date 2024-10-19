import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import SpeedControls from './src/App.jsx'; // Ensure this path is correct

const Wrapper = ({ speed, increaseSpeed, decreaseSpeed, resetSpeed }) => {
  const shadowHost = useRef(null);

  useEffect(() => {
    if (shadowHost.current) {
      const shadowRoot = shadowHost.current.attachShadow({ mode: 'open' });
      const container = document.createElement('div');
      shadowRoot.appendChild(container);

      ReactDOM.render(
        <SpeedControls
          speed={speed}
          increaseSpeed={increaseSpeed}
          decreaseSpeed={decreaseSpeed}
          resetSpeed={resetSpeed}
        />,
        container
      );

      const style = document.createElement('style');
      style.textContent = `
        /* Include TailwindCSS styles here or load it as you see fit */
        .absolute { position: absolute; }
        .top-6 { top: 1.5rem; }
        .right-20 { right: 5rem; }
        /* ...and so on for the rest of your styles */
      `;
      shadowRoot.appendChild(style);
    }
  }, [speed, increaseSpeed, decreaseSpeed, resetSpeed]);

  return <div ref={shadowHost}></div>;
};

export default Wrapper;
