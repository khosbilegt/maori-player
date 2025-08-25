import React, { useState, useRef, useEffect } from "react";

interface WordTooltipProps {
  word: string;
  description: string;
  children: React.ReactNode;
}

const WordTooltip: React.FC<WordTooltipProps> = ({
  word,
  description,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && tooltipRef.current) {
      const tooltip = tooltipRef.current;
      const rect = tooltip.getBoundingClientRect();

      // Adjust position if tooltip goes off screen
      const viewportWidth = window.innerWidth;
      //   const viewportHeight = window.innerHeight;

      let adjustedX = position.x;
      let adjustedY = position.y;

      // Check right boundary
      if (rect.right > viewportWidth - 10) {
        adjustedX = viewportWidth - rect.width - 10;
      }

      // Check left boundary
      if (rect.left < 10) {
        adjustedX = 10;
      }

      // Check top boundary
      if (rect.top < 10) {
        adjustedY = position.y + 40; // Show below instead
      }

      if (adjustedX !== position.x || adjustedY !== position.y) {
        setPosition({ x: adjustedX, y: adjustedY });
      }
    }
  }, [isVisible, position.x, position.y]);

  return (
    <>
      <span
        ref={containerRef}
        className="word-tooltip-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
      {isVisible && (
        <div
          ref={tooltipRef}
          className="word-tooltip"
          style={{
            position: "fixed",
            left: position.x,
            top: position.y,
            transform: "translateX(-50%) translateY(-100%)",
            zIndex: 1000,
          }}
        >
          <div className="word-tooltip-content">
            <div className="word-tooltip-word">{word}</div>
            <div className="word-tooltip-description">{description}</div>
          </div>
          <div className="word-tooltip-arrow"></div>
        </div>
      )}
    </>
  );
};

export default WordTooltip;
