var playlist = {}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artist = `${songTitle}`
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artist;
  return playlist
}