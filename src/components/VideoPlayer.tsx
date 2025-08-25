import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import SubtitleOverlay from "./SubtitleOverlay";
import type { TranscriptItem } from "./TranscriptViewer";

export interface VideoPlayerRef {
  getCurrentTime: () => number;
  seekTo: (time: number) => void;
  play: () => void;
  pause: () => void;
}

interface VideoPlayerProps {
  src?: string;
  onTimeUpdate?: (currentTime: number) => void;
  className?: string;
  transcript?: TranscriptItem[];
  currentTime?: number;
}

const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ src, onTimeUpdate, className = "", transcript, currentTime = 0 }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useImperativeHandle(ref, () => ({
      getCurrentTime: () => videoRef.current?.currentTime || 0,
      seekTo: (time: number) => {
        if (videoRef.current) {
          videoRef.current.currentTime = time;
        }
      },
      play: () => videoRef.current?.play(),
      pause: () => videoRef.current?.pause(),
    }));

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const handleTimeUpdate = () => {
        onTimeUpdate?.(video.currentTime);
      };

      video.addEventListener("timeupdate", handleTimeUpdate);
      return () => video.removeEventListener("timeupdate", handleTimeUpdate);
    }, [onTimeUpdate]);

    return (
      <div className={`video-player ${className}`}>
        <div className="video-container">
          <video
            ref={videoRef}
            src={src}
            controls
            className="video-element"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
          {transcript && (
            <SubtitleOverlay
              transcript={transcript}
              currentTime={currentTime}
              className="video-subtitles"
            />
          )}
        </div>
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
