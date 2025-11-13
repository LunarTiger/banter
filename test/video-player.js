let playlist = 'PLJAqjOYAEgb5_qkDOY7V9nvcOSntp-HoM';
let instance = 'lunar-webpage'
let volume = '10';
let position = '0 0 0'; let rotation = '0 0 0'; let scale = document.getElementById('video-player').object3D.scale;
let scriptUrl = 'https://sq-video-player.glitch.me/playlist.js'

loadVideo() {
  return new Promise(resolve => {
    let video-player = document.createElement("script");
    video-player.setAttribute("src", scriptUrl); video-player.setAttribute("playlist", playlist);
    video-player.setAttribute("playlist", playlist);
    video-player.setAttribute("instance", instance);
    video-player.setAttribute("volume", volume);
    video-player.setAttribute("position", position);
    video-player.setAttribute("rotation", rotation);
    video-player.setAttribute("scale", scale);
    video-player.addEventListener ("load", resolve, false);
    document.getElementById('video-player').appendChild(video-player); 
  });
}

(async function() {
  await loadVideo();
})();