function QueryArtist() {};

QueryArtist.prototype = Object.create(Query.prototype);

QueryArtist.prototype.getInfo = function (name) {
  this.load({
    method: 'artist.getinfo',
    artist: name
  });
};

QueryArtist.prototype.search = function (name) {
  this.load({
    method: 'artist.search',
    artist: name
  });
};

QueryArtist.prototype.getTopAlbums = function (name) {
  this.load({
    method: 'artist.gettopalbums',
    artist: name
  });
};
