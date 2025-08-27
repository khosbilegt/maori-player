# Māori Language Player

An interactive video player for learning Te Reo Māori. Watch videos with clickable transcripts and hover over words to see their meanings. Perfect for language learners who want to understand every word!

## 🎥 What You Can Do

- **Watch videos** with synchronized subtitles
- **Click on transcript lines** to jump to that part of the video
- **Hover over words** to see translations and explanations
- **Adjust subtitle size** with the + and - buttons
- **Use keyboard shortcuts** (+ and - keys) to change subtitle size

## 📚 Adding New Videos to Your Library

Want to add your own Māori videos? Here's how:

### Step 1: Prepare Your Files

You'll need 3 files for each video:

1. **Video file** (`.mp4` format works best)
2. **Subtitle file** (`.vtt` format - see instructions below)
3. **Thumbnail image** (optional, or use a YouTube thumbnail)

### Step 2: Add Your Video File

1. Put your video file in the `public` folder
2. Name it something simple like `my-video.mp4`

### Step 3: Add Your Subtitle File

1. Put your subtitle file in the `public` folder
2. Name it the same as your video but with `.vtt` extension: `my-video.vtt`

### Step 4: Update the Video Library

1. Open the file `src/assets/contents/library.json`
2. Add your video information like this:

```json
{
  "id": "my-video",
  "title": "My Māori Video",
  "description": "A great video for learning Māori",
  "thumbnail": "https://example.com/my-thumbnail.jpg",
  "video": "my-video.mp4",
  "subtitle": "my-video.vtt",
  "duration": "3:45"
}
```

**What each field means:**

- `id`: A unique name (no spaces, use dashes)
- `title`: The name that shows in your library
- `description`: What the video is about
- `thumbnail`: A picture for the video preview
- `video`: Your video filename
- `subtitle`: Your subtitle filename
- `duration`: How long the video is (like "3:45")

### Step 5: Your Video is Ready!

That's it! Your new video will appear in the library and work just like the example video.

## 📝 Creating Subtitle Files

Subtitle files use a simple format called VTT. Here's how to make one:

### Basic VTT File Structure

Create a text file ending in `.vtt` that looks like this:

```
WEBVTT

1
00:00:00.000 --> 00:00:04.500
Kia ora! Welcome to this Māori lesson.

2
00:00:04.500 --> 00:00:08.000
Today we'll learn about colors.

3
00:00:08.000 --> 00:00:12.000
Whero means red.
```

### How to Write Timings

The timing format is: `hours:minutes:seconds.milliseconds`

Examples:

- `00:00:00.000` = Start of video
- `00:01:30.500` = 1 minute, 30.5 seconds
- `00:10:15.250` = 10 minutes, 15.25 seconds

### Tips for Good Subtitles

1. **Keep lines short** - Aim for 1-2 sentences per subtitle
2. **Match the speech** - Start and end times should match when words are spoken
3. **Leave breathing room** - Give people time to read
4. **Number your subtitles** - Each subtitle gets a number (1, 2, 3...)

### Easy Ways to Create Subtitles

**Option 1: Use YouTube's Auto-Captions**

1. Upload your video to YouTube (private is fine)
2. Let YouTube generate automatic captions
3. Download the `.vtt` file from YouTube
4. Edit any mistakes

**Option 2: Use Free Subtitle Tools**

- **Subtitle Edit** (Windows) - Free subtitle editing software
- **Aegisub** (Mac/Windows/Linux) - Professional subtitle editor
- **Rev.com** - Paid service that creates subtitles for you

**Option 3: Write Them Yourself**
Use any text editor (like Notepad) and follow the VTT format above.

## 🖼️ Getting Video Thumbnails

For the best-looking library, use good thumbnail images:

1. **From YouTube**: Right-click on a YouTube video thumbnail and "Copy image address"
2. **Custom image**: Upload your image to a free service like [Imgur](https://imgur.com) and use that link
3. **Screenshot**: Take a screenshot of your video and upload it somewhere

## 🎨 Customizing Word Descriptions

Want to add custom translations for specific words?

1. Open `src/components/TranscriptViewer.tsx`
2. Find the line with `"Example description for this word"`
3. You can create a dictionary of words and their meanings

For now, all words show the same description, but you can customize this to show real translations!

## 🚀 Publishing Your Video Player

Once you've added your videos, you can share your player online:

1. **Upload your files** to GitHub (it's free!)
2. **Enable GitHub Pages** in your repository settings
3. **Share the link** - Anyone can use your video player

## ❓ Need Help?

**Common Issues:**

- **Video won't play**: Make sure your video file is in `.mp4` format
- **Subtitles don't show**: Check that your `.vtt` file is named correctly
- **Video not in library**: Double-check the `library.json` file for typos

**Getting Support:**

- Create an issue on GitHub if something isn't working
- Include what you tried and what happened
- Screenshots help a lot!

## 📁 File Organization

Keep your files organized like this:

```
your-project/
├── public/
│   ├── video1.mp4          ← Your video files
│   ├── video1.vtt          ← Your subtitle files
│   ├── video2.mp4
│   └── video2.vtt
└── src/
    └── assets/
        └── contents/
            └── library.json ← Your video list
```

## 🎯 Example: Adding a New Video

Let's say you have a video called "Māori Colors":

1. **Save files:**

   - `public/maori-colors.mp4` (your video)
   - `public/maori-colors.vtt` (your subtitles)

2. **Update library.json:**

```json
{
  "id": "maori-colors",
  "title": "Learning Māori Colors",
  "description": "Learn the names of colors in Te Reo Māori",
  "thumbnail": "https://i.imgur.com/example.jpg",
  "video": "maori-colors.mp4",
  "subtitle": "maori-colors.vtt",
  "duration": "5:20"
}
```

3. **Done!** Your video will appear in the library.

---

**Happy learning! Kia kaha! 🌟**
