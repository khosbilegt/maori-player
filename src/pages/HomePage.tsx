import { Link } from "react-router-dom";
import libraryData from "../assets/contents/library.json";
import "./HomePage.css";

function HomePage() {
  const videoCount = libraryData.videos.length;

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Learn Māori Language</h1>
          <p className="hero-subtitle">
            Immerse yourself in the beautiful Māori language through our
            interactive video library
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{videoCount}</span>
              <span className="stat-label">
                Video{videoCount !== 1 ? "s" : ""} Available
              </span>
            </div>
          </div>
          <div className="hero-actions">
            <Link to="/library" className="cta-button primary">
              Explore Library
            </Link>
            <Link
              to="/video"
              className="cta-button secondary"
              style={{ pointerEvents: "none" }}
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
