function QueryTop() {};

QueryTop.prototype = Object.create(Query.prototype);

QueryTop.prototype.getTopArtists = function() {
  this.load({
    method: 'chart.gettopartists'
  });
};
