import React, { useEffect } from 'react';
import "./eyesShape.css";

const EyesShape = () => {

  useEffect(() => {
    const handleMouseMove = (event) => {
      const balls = document.querySelectorAll('.ball');

      balls.forEach(ball => {
        const x = (event.clientX * 100) / window.innerWidth + '%';
        const y = (event.clientY * 100) / window.innerHeight + '%';

        if (ball && ball.style) {
          ball.style.left = x;
          ball.style.top = y;
          ball.style.transform = 'translate(-' + x + ', -' + y + ')';
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

  }, []);

  return (
    <div>
      <div className="eyes">

<div className="eye">
  <div className="ball"></div>
</div>

<div className="eye">
  <div className="ball"></div>
</div>
    </div>
    </div>
  )
}

export default EyesShape
