import React, { useEffect, useRef, useState } from "react";
import WordTooltip from "./WordTooltip";

export interface TranscriptItem {
  id: string;
  startTime: number;
  endTime: number;
  text: string;
}

interface TranscriptViewerProps {
  transcript: TranscriptItem[];
  currentTime: number;
  onSeek?: (time: number) => void;
  className?: string;
}

const TranscriptViewer: React.FC<TranscriptViewerProps> = ({
  transcript,
  currentTime,
  onSeek,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  useEffect(() => {
    const activeItem = transcript
      .slice()
      .reverse()
      .find(
        (item) => currentTime >= item.startTime && currentTime <= item.endTime
      );
    setActiveItemId(activeItem?.id || null);
  }, [currentTime, transcript]);

  useEffect(() => {
    if (activeItemId && containerRef.current) {
      const activeElement = containerRef.current.querySelector(
        `[data-id="${activeItemId}"]`
      ) as HTMLElement;

      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [activeItemId]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleItemClick = (event: React.MouseEvent, startTime: number) => {
    // Check if the click was on a hoverable word or its container
    const target = event.target as HTMLElement;
    const isWordClick =
      target.closest(".hoverable-word") ||
      target.classList.contains("hoverable-word");

    // Only seek if it's not a word click
    if (!isWordClick) {
      onSeek?.(startTime);
    }
  };

  // Function to render text with hoverable words
  const renderTextWithTooltips = (text: string) => {
    // Split text into words while preserving punctuation
    const words = text.split(/(\s+)/);

    return words.map((segment, index) => {
      // If it's whitespace, return as is
      if (segment.match(/^\s+$/)) {
        return segment;
      }

      // If it's a word (potentially with punctuation)
      if (segment.trim()) {
        // Extract the actual word without punctuation
        const wordMatch = segment.match(/^(\W*)(.*?)(\W*)$/);
        const [, leadingPunct, word, trailingPunct] = wordMatch || [
          "",
          "",
          segment,
          "",
        ];

        if (word) {
          return (
            <React.Fragment key={index}>
              {leadingPunct}
              <WordTooltip
                word={word}
                description="This is a sample description for this Māori word. In a real application, this would contain the actual meaning, pronunciation guide, and cultural context."
              >
                <span className="hoverable-word">{word}</span>
              </WordTooltip>
              {trailingPunct}
            </React.Fragment>
          );
        }
      }

      return segment;
    });
  };

  return (
    <div className={`transcript-viewer ${className}`} ref={containerRef}>
      <h3 className="transcript-title">Transcript</h3>
      <div className="transcript-content">
        {transcript.map((item) => (
          <div
            key={item.id}
            data-id={item.id}
            className={`transcript-item ${
              activeItemId === item.id ? "active" : ""
            }`}
            onClick={(event) => handleItemClick(event, item.startTime)}
          >
            <span className="transcript-time">
              {formatTime(item.startTime)}
            </span>
            <span className="transcript-text">
              {renderTextWithTooltips(item.text)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranscriptViewer;
