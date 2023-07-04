// Create Object here
// =========================================
let episode = {
  title: 'Harry Potter',
    duration: 96,
    hasBeenWatched: true
};
export {episode};

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`