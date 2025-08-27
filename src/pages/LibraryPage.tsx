import React from "react";
import { useNavigate } from "react-router-dom";
import VideoLibrary from "../components/VideoLibrary";
import type { VideoData } from "../components/VideoCard";
import libraryData from "../assets/contents/library.json";
import "./LibraryPage.css";

const LibraryPage: React.FC = () => {
  const navigate = useNavigate();

  const handleVideoSelect = (video: VideoData) => {
    // Navigate to video page with video data
    navigate("/video", { state: { selectedVideo: video } });
  };

  return (
    <div className="library-page">
      <VideoLibrary
        videos={libraryData.videos}
        onVideoSelect={handleVideoSelect}
      />
    </div>
  );
};

export default LibraryPage;
