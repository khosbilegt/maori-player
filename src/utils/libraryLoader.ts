import type { VideoData } from "../components/VideoCard";

interface LibraryData {
  videos: VideoData[];
}

// Load library data from environment variable or fallback to JSON file
export async function loadLibraryData(): Promise<LibraryData> {
  // First, try to get library data from Vite environment variable
  // Fallback to importing the JSON file directly
  try {
    console.log("Loading library data from local file");
    const libraryData = await fetch("/library.json");
    return libraryData.json();
  } catch (error) {
    console.error("Failed to load library data:", error);
    // Return empty library as last resort
    return { videos: [] };
  }
}

// Create a reactive library data loader for components
let libraryDataCache: LibraryData | null = null;
let libraryDataPromise: Promise<LibraryData> | null = null;

export function getLibraryData(): Promise<LibraryData> {
  if (libraryDataCache) {
    return Promise.resolve(libraryDataCache);
  }

  if (!libraryDataPromise) {
    libraryDataPromise = loadLibraryData().then((data) => {
      libraryDataCache = data;
      return data;
    });
  }

  return libraryDataPromise;
}
