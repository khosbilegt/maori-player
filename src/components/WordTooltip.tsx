import React from "react";

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
  return (
    <span className="word-tooltip-container">
      {children}
      <div className="word-tooltip-popup">
        <div className="word-tooltip-content">
          <div className="word-tooltip-word">{word}</div>
          <div className="word-tooltip-description">{description}</div>
        </div>
        <div className="word-tooltip-arrow"></div>
      </div>
    </span>
  );
};

export default WordTooltip;
