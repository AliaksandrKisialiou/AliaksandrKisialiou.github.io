function runner() {

  var query = new QueryTop();
  query.getTopArtists();

  var artistName = 'Pink Floyd';
  query = new QueryArtist();
  query.getInfo(artistName);
  query.search(artistName);
  query.getTopAlbums(artistName);

  var albumName = 'The Wall';
  query = new QueryAlbum();
  query.getTopAlbums(artistName, albumName);
}
