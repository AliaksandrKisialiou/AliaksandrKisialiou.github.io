function isArray(something) {
  return something instanceof Array;
}

function isArray2(something) {
  return Object.prototype.toString.call(something) === '[object Array]';
}

function range(from, to, step) {
  var result = [];

  if (from == undefined && to == undefined && step == undefined)
    return result;

  step = step || 1;

  if (step < 0 && from < step)
    return result;

  if (to == undefined && from != undefined) {
    to = from;
    from = 0;
  }
  else if (from == undefined && to != undefined) {
    from = 0;
  }

  var countElements = Math.ceil((to - from) / step);

  if (countElements < 0)
    countElements = Math.floor((to - from) / step);

  for (var i = 0; i < countElements; i++)
    result.push(from + i * step);

  return result;
}

function compact(source) {
  return source.filter(function (value) {
    return value;
  });
}

function compact2(source) {
  var result = [];

  for (var i = 0; i < source.length; i++)
    if (source[i])
      result.push(source[i]);

  return result;
}

function sum(source) {

  return source.reduce(function (sum, current) {
    return sum + current;
  }, 0);
}

function sum2(source) {
  var result = 0;

  for (var i = 0; i < source.length; i++)
    result += source[i];

  return result;
}

function unique(source) {
  var result = [];

  for (var i = 0; i < source.length; i++)
    if (result.indexOf(source[i]) == -1)
      result.push(source[i]);

  return result;
}

function last(source) {
  return source[source.length - 1];
}

function excludeLast(source, count) {

  if (count > 0 || count == undefined)
    count = count || 1;
  else
    return source;

  return source.slice(0, source.length - count);
}

function runner() {
  var objC = {c: 1};
  var source = [1, 2, 3, undefined, 0, 'text', true, null, objC, {}, objC, 3,
    2, 113];
  var obj = {};
  var objNull = null;
  var string = '[fair object Array]';

  console.log('isArray(' + source + ') = ' + isArray(source));
  console.log('isArray(' + obj + ') = ' + isArray(obj));
  console.log('isArray(' + objNull + ') = ' + isArray(objNull));
  console.log('isArray(' + string + ') = ' + isArray(string));

  console.log('isArray2(' + source + ') = ' + isArray2(source));
  console.log('isArray2(' + obj + ') = ' + isArray2(obj));
  console.log('isArray2(' + objNull + ') = ' + isArray2(objNull));
  console.log('isArray2(' + string + ') = ' + isArray2(string));

  console.log('range(1, 10, 2) = ' + range(1, 10, 2));
  console.log('range(1, 5) = ' + range(1, 5));
  console.log('range(5) = ' + range(5));
  console.log('range(, 5) = ' + range(undefined, 5));
  console.log('range(10, 20, -5) = ' + range(10, 20, -5));
  console.log('range(20, 10, -5) = ' + range(20, 10, -5));
  console.log('range(10) = ' + range(10));
  console.log('range(-20, -10) = ' + range(-20, -10));
  console.log('range(10, 1, -3) = ' + range(10, 1, -3));

  console.log('compact(' + source + ') = ' + compact(source));
  console.log('compact2(' + source + ') = ' + compact2(source));

  console.log('sum(' + source + ') = ' + sum(source));
  console.log('sum2(' + source + ') = ' + sum2(source));

  console.log('unique(' + source + ') = ' + unique(source));

  console.log('last(' + source + ') = ' + last(source));

  console.log('excludeLast(' + source + ') = ' + excludeLast(source));
  console.log('excludeLast([' + source + '], 3) = ' + excludeLast(source, 3));
}
