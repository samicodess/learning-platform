// Fetch YouTube videos based on the query, limited to the top 3 results
const fetchYouTubeVideos = async (query) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=9&key=AIzaSyCeK_3vrYpmA22kVusD7oBPPBWAC3d8ZYE`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
};

// Display the top 3 YouTube videos on the page
const displayVideos = async (query) => {
  const videos = await fetchYouTubeVideos(query);
  const videoList = document.getElementById("video-list");
  videoList.innerHTML = "";

  videos.forEach((video) => {
    const videoItem = document.createElement("div");
    videoItem.innerHTML = `
          <h4>${video.snippet.title}</h4>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
      `;
    videoList.appendChild(videoItem);
  });
};
