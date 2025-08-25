import React from "react";
import type { TranscriptItem } from "./TranscriptViewer";

interface SubtitleOverlayProps {
  transcript: TranscriptItem[];
  currentTime: number;
  className?: string;
}

const SubtitleOverlay: React.FC<SubtitleOverlayProps> = ({
  transcript,
  currentTime,
  className = "",
}) => {
  // Find the current active subtitle
  const currentSubtitle = transcript
    .slice()
    .reverse()
    .find(
      (item) => currentTime >= item.startTime && currentTime <= item.endTime
    );

  if (!currentSubtitle) {
    return null;
  }

  return (
    <div className={`subtitle-overlay ${className}`}>
      <div className="subtitle-text">{currentSubtitle.text}</div>
    </div>
  );
};

export default SubtitleOverlay;
