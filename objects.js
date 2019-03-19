var playlist = {
  BTS: 'Fake Love',
  Beyonce: 'Formation'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artist = `${songTitle}`
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artist;
  return playlist
}