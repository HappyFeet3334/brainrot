 // List of unique image URLs
 const imageList = [
    "https://i.redd.it/n4iz2zypyir81.gif",
    "https://no-cdn.shortpixel.ai/client/to_avif,q_lossy,ret_wait/https://shortpixel.com/blog/wp-content/uploads/2023/12/nyan-cat.gif",
    "https://i.redd.it/n4iz2zypyir81.gif",
    "https://no-cdn.shortpixel.ai/client/to_avif,q_lossy,ret_wait/https://shortpixel.com/blog/wp-content/uploads/2023/12/nyan-cat.gif",
    "https://gifyard.com/wp-content/uploads/2023/01/brain-reads.gif",
    "https://media0.giphy.com/media/ZkzzUXi1qb8uQOXxjh/200w.gif?cid=82a1493b30jk2yiukbnkx1i8makif5ce0cser8otlshbj6vz&ep=v1_gifs_related&rid=200w.gif&ct=g",
    "https://media.tenor.com/uLUJs0KVD3EAAAAM/21st-century-brain-rot.gif",
    "https://d3bdodgok16pxc.cloudfront.net/images/VL10-ED-43-BRAINROT-INARTICLEIMAGE_v2.gif",
    "https://media4.giphy.com/media/a15SkRycrdeP7nAMu5/200w.gif?cid=82a1493b30jk2yiukbnkx1i8makif5ce0cser8otlshbj6vz&ep=v1_gifs_related&rid=200w.gif&ct=g",
  ];




// Number of total random images to display (can include duplicates)
const numberOfImages = 2000;

// Range for random image sizes (width in pixels)
const minImageSize = 20; // Minimum size
const maxImageSize = 500; // Maximum size

const imageContainer = document.getElementById('image-container');

// Function to generate random numbers
const getRandom = (max, min = 0) => Math.random() * (max - min) + min;


// Function to display random images
function displayRandomImages() {
  for (let i = 0; i < numberOfImages; i++) {
    // Create an <img> element
    const img = document.createElement('img');
    // Pick a random image from the list (duplicates allowed)
    img.src = imageList[Math.floor(Math.random() * imageList.length)];
    
    // Generate random positions, rotation, and size
    const randomTop = getRandom(100); // Random percentage for top
    const randomLeft = getRandom(100); // Random percentage for left
    const randomRotation = getRandom(60, -30); // Random rotation between -30 and 30 degrees
    const randomSize = getRandom(maxImageSize, minImageSize); // Random size within range

    // Apply random styles
    img.style.setProperty('--random-top', randomTop);
    img.style.setProperty('--random-left', randomLeft);
    img.style.setProperty('--random-rotation', randomRotation);
    img.style.width = `${randomSize}px`; // Random width

    // Add the image to the container
    imageContainer.appendChild(img);
  }
}

// Function to display random YouTube videos
// function displayRandomVideos() {
//     for (let i = 0; i < numberOfVideos; i++) {
//       // Create an iframe element for the YouTube video
//       const iframe = document.createElement("iframe");
//       // Pick a random video from the list
//       const videoId = videoList[Math.floor(Math.random() * videoList.length)];
//       // Set the YouTube embed URL with autoplay
//       iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
      
//       // Generate random positions, rotation, and size
//       const randomTop = getRandom(100); // Random percentage for top
//       const randomLeft = getRandom(100); // Random percentage for left
//       const randomRotation = getRandom(60, -30); // Random rotation between -30 and 30 degrees
//       const randomSize = getRandom(maxVideoSize, minVideoSize); // Random size within range
  
//       // Apply random styles
//       iframe.style.setProperty("--random-top", randomTop);
//       iframe.style.setProperty("--random-left", randomLeft);
//       iframe.style.setProperty("--random-rotation", randomRotation);
//       iframe.width = `${randomSize}px`; // Random width
//       iframe.height = `${(randomSize / 16) * 9}px`; // Maintain 16:9 aspect ratio
  
//       // Add the iframe to the container
//       videoContainer.appendChild(iframe);
//     }
//   }

// function play_music() {
//     const audio = document.getElementById('background-audio');
      
//       // Attempt to play the audio
//       audio.play().catch((error) => {
//         console.log('Autoplay failed:', error);
//         // Optional: Provide a fallback or alert the user
//       });
// }

// Display the images on page load
window.onload = displayRandomImages;