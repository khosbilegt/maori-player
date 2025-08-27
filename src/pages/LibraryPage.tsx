import React from "react";
import VideoLibrary from "../components/VideoLibrary";
import libraryData from "../assets/contents/library.json";
import "./LibraryPage.css";

const LibraryPage: React.FC = () => {
  return (
    <div className="library-page">
      <VideoLibrary videos={libraryData.videos} />
    </div>
  );
};

export default LibraryPage;
