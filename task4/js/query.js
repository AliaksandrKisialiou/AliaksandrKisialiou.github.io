function Query() {};

Query.prototype.load = function (queryParams) {
  var keyAPI = '2770c9ca49413a3ba2e6c644abf8aa71';
  var prefixURL = 'http://ws.audioscrobbler.com/2.0/?';
  var format = 'json';
  var encodeQuery = '';

  for (var key in queryParams) {
    encodeQuery += encodeURIComponent(key) + '=' +
        encodeURIComponent(queryParams[key]) + '&';
  }
  var xhr = new XMLHttpRequest();
  xhr.open('GET', prefixURL + encodeQuery + 'api_key=' + keyAPI +
      '&format=' + format, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        console.log(xhr.responseText);
      } else {
        console.log(xhr.statusText);
      }
    }
  }
};
