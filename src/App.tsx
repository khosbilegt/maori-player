import { useState, useRef } from "react";
import VideoPlayer from "./components/VideoPlayer";
import type { VideoPlayerRef } from "./components/VideoPlayer";
import TranscriptViewer from "./components/TranscriptViewer";
import { sampleTranscript } from "./data/sampleTranscript";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const videoPlayerRef = useRef<VideoPlayerRef>(null);

  const handleTimeUpdate = (time: number) => {
    setCurrentTime(time);
  };

  const handleSeek = (time: number) => {
    videoPlayerRef.current?.seekTo(time);
    setCurrentTime(time);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Māori Language Player</h1>
      </header>
      <main className="app-main">
        <div className="video-section">
          <VideoPlayer
            ref={videoPlayerRef}
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            onTimeUpdate={handleTimeUpdate}
            className="main-video-player"
            transcript={sampleTranscript}
            currentTime={currentTime}
          />
        </div>
        <div className="transcript-section">
          <TranscriptViewer
            transcript={sampleTranscript}
            currentTime={currentTime}
            onSeek={handleSeek}
            className="main-transcript-viewer"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
