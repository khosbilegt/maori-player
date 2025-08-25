# Māori Language Player

A modern, interactive video player designed for language learning with synchronized transcripts, word-level tooltips, and subtitle overlays. Built with React, TypeScript, and Vite.

![Māori Language Player Screenshot](https://via.placeholder.com/800x400/1e1e2e/ffffff?text=Māori+Language+Player)

## ✨ Features

### 🎥 **Video Player**

- Full-featured HTML5 video player with standard controls
- Responsive design that adapts to different screen sizes
- Support for common video formats

### 📝 **Interactive Transcript**

- **Real-time synchronization** with video playback
- **Clickable navigation** - click any transcript line to jump to that moment
- **Auto-scrolling** - transcript automatically follows video progress
- **Word-level tooltips** - hover over any word to see descriptions and translations
- **Visual highlighting** - current transcript section is highlighted during playback

### 🔤 **Subtitle Overlay**

- **Professional subtitles** overlaid directly on the video
- **Perfect synchronization** with transcript timing
- **Responsive positioning** - adapts to different screen sizes
- **High contrast styling** for optimal readability

### 🎯 **Smart Tooltips**

- **CSS-only implementation** for optimal performance
- **Intelligent positioning** - automatically adjusts to prevent overflow
- **Smooth animations** with fade-in/fade-out effects
- **Responsive design** for mobile and desktop

### 🌐 **Responsive Layout**

- **Desktop**: Side-by-side video and transcript layout
- **Mobile**: Stacked layout with optimized spacing
- **Tablet**: Adaptive layout that adjusts to screen orientation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm package manager (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/maori-player.git
   cd maori-player
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Building for Production

```bash
pnpm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🐳 Docker Deployment

### Using Docker

1. **Build the Docker image**

   ```bash
   docker build -t maori-player .
   ```

2. **Run the container**

   ```bash
   docker run -p 3000:80 maori-player
   ```

3. **Access the application**
   Navigate to `http://localhost:3000`

### Using Docker Compose

1. **Start the application**

   ```bash
   docker-compose up -d
   ```

2. **Stop the application**
   ```bash
   docker-compose down
   ```

### Production Deployment

For production deployment, you can use the provided Docker configuration with any container orchestration platform:

- **Kubernetes**: Create deployment and service manifests
- **Docker Swarm**: Use the docker-compose.yml as a stack file
- **Cloud Services**: Deploy to AWS ECS, Google Cloud Run, or Azure Container Instances

## 🌐 GitHub Pages Deployment

The easiest way to deploy your Māori Language Player is using GitHub Pages with automatic deployment.

### Setup Instructions

1. **Fork or create a repository**

   - Fork this repository or create a new one on GitHub
   - Make sure your repository is public (required for free GitHub Pages)

2. **Enable GitHub Pages**

   - Go to your repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

3. **Update the base path**

   - In `vite.config.ts`, change `/maori-player/` to match your repository name:

   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
   ```

4. **Push your code**

   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

5. **Automatic deployment**
   - The GitHub Action will automatically build and deploy your app
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to gh-pages branch (requires gh-pages package)
npm install --save-dev gh-pages
npx gh-pages -d dist
```

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public/` directory with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Update the base path in `vite.config.ts` to `/`

### Troubleshooting 404 Errors

If you're getting 404 errors on GitHub Pages:

1. **Check the repository name** - Ensure your repository name matches the base path
2. **Verify GitHub Pages settings** - Make sure "Source" is set to "GitHub Actions"
3. **Check the Actions tab** - Look for any build failures in the workflow
4. **Wait a few minutes** - GitHub Pages can take 5-10 minutes to update
5. **Clear browser cache** - Try hard refresh (Ctrl+F5) or incognito mode

**Common Issues:**

- **Wrong base path**: The config now auto-detects your repo name
- **Jekyll interference**: The `.nojekyll` file prevents this
- **SPA routing**: The 404.html file handles client-side routing

**Debug Steps:**

```bash
# Test locally with production build
pnpm run build
pnpm run preview

# Check if files are generated correctly
ls -la dist/
```

## 📁 Project Structure

```
maori-player/
├── src/
│   ├── components/
│   │   ├── VideoPlayer.tsx      # Main video player component
│   │   ├── TranscriptViewer.tsx # Interactive transcript panel
│   │   ├── SubtitleOverlay.tsx  # Video subtitle overlay
│   │   └── WordTooltip.tsx      # Word hover tooltips
│   ├── data/
│   │   └── sampleTranscript.ts  # Sample transcript data
│   ├── App.tsx                  # Main application component
│   ├── App.css                  # Application styles
│   └── main.tsx                 # Application entry point
├── public/
├── package.json
└── README.md
```

## 🔧 Configuration

### Adding Your Own Content

#### 1. **Replace the Video Source**

In `src/App.tsx`, update the video `src` prop:

```tsx
<VideoPlayer
  src="path/to/your/video.mp4"
  // ... other props
/>
```

#### 2. **Update Transcript Data**

Edit `src/data/sampleTranscript.ts` or create a new transcript file:

```typescript
export const yourTranscript: TranscriptItem[] = [
  {
    id: "1",
    startTime: 0,
    endTime: 4.5,
    text: "Your transcript text here",
  },
  // ... more transcript items
];
```

#### 3. **Customize Word Descriptions**

In `src/components/TranscriptViewer.tsx`, update the tooltip description:

```tsx
<WordTooltip
  word={word}
  description="Your custom description here"
>
```

### Styling Customization

The application uses CSS custom properties for easy theming. Key style files:

- `src/App.css` - Main application styles
- `src/index.css` - Global styles and CSS reset

## 🎨 Customization

### Changing the Color Scheme

Update the gradient and color variables in `src/App.css`:

```css
.app {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}

.transcript-item.active {
  background: linear-gradient(135deg, #your-accent-1, #your-accent-2);
}
```

### Adjusting Subtitle Positioning

Modify subtitle position in `src/App.css`:

```css
.subtitle-overlay {
  bottom: 60px; /* Distance from bottom */
  /* Adjust as needed */
}
```

## 🛠️ Technical Details

### Built With

- **React 19** - UI framework
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with Grid, Flexbox, and CSS logical properties

### Key Technical Features

- **Performance optimized** - CSS-only tooltips, efficient re-renders
- **Type-safe** - Full TypeScript implementation
- **Responsive** - Mobile-first design principles
- **Accessible** - Semantic HTML and keyboard navigation support
- **Modern CSS** - Uses latest CSS features with graceful fallbacks

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 API Reference

### TranscriptItem Interface

```typescript
interface TranscriptItem {
  id: string; // Unique identifier
  startTime: number; // Start time in seconds
  endTime: number; // End time in seconds
  text: string; // Transcript text content
}
```

### VideoPlayerRef Methods

```typescript
interface VideoPlayerRef {
  getCurrentTime: () => number;
  seekTo: (time: number) => void;
  play: () => void;
  pause: () => void;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Sample video from [Google's sample videos](https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/)
- Inspired by modern language learning platforms
- Built with accessibility and user experience in mind

## 🐛 Issues and Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/maori-player/issues) page
2. Create a new issue with a detailed description
3. Include browser version and steps to reproduce

## 🔮 Future Enhancements

- [ ] Multiple language support
- [ ] Audio-only mode
- [ ] Playback speed controls
- [ ] Keyboard shortcuts
- [ ] Export transcript functionality
- [ ] Integration with external subtitle formats (SRT, VTT)
- [ ] User preference persistence
- [ ] Advanced word dictionary integration

---

**Made with ❤️ for language learners**
