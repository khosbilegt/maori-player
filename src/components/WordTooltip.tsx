import React from "react";
import type { VocabEntry } from "../utils/vocabLoader";

interface WordTooltipProps {
  vocabEntry: VocabEntry;
  children: React.ReactNode;
}

const WordTooltip: React.FC<WordTooltipProps> = ({ vocabEntry, children }) => {
  return (
    <span className="word-tooltip-container">
      {children}
      <div className="word-tooltip-popup">
        <div className="word-tooltip-content">
          <div className="word-tooltip-word">{vocabEntry.maori}</div>
          <div className="word-tooltip-english">{vocabEntry.english}</div>
          {vocabEntry.pronunciation && (
            <div className="word-tooltip-pronunciation">
              [{vocabEntry.pronunciation}]
            </div>
          )}
          {vocabEntry.description && (
            <div className="word-tooltip-description">
              {vocabEntry.description}
            </div>
          )}
        </div>
        <div className="word-tooltip-arrow"></div>
      </div>
    </span>
  );
};

export default WordTooltip;
