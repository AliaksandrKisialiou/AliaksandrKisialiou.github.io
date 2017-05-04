function QueryAlbum() {};

QueryAlbum.prototype = Object.create(Query.prototype);

QueryAlbum.prototype.getTopAlbums = function(artistName, albumName) {
  this.load({
    method:'artist.gettopalbums',
    artist: artistName,
    album: albumName
  });
};
