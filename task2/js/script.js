function isArray(something) {
  return something instanceof Array;
}

function isArray2(something) {
  return Object.prototype.toString.call(something) === '[object Array]';
}

function range(from, to, step) {
  var retArray = [];
  var i;

  if (from == undefined)
    return retArray;

  if (step == undefined)
    step = 1;

  if (to == undefined) {
    to = from;
    from = 0;
  }

  for (i = from; i < to; i += step)
    retArray.push(i);

  return retArray;
}

function compact(someArray) {
  var retArray = someArray.map(function () {
    return true;
  });

  return retArray;
}

function compact2(someArray) {
  var retArray = [];
  var i;

  for (i = 0; i < someArray.length; i++)
    retArray.push(true);

  return retArray;
}

function sum(someArray) {
  var returnResult = someArray.reduce(function (sum, current) {
    return sum + current;
  }, 0);

  return returnResult;
}

function sum2(someArray) {
  var returnResult = 0;
  var i;

  for (i = 0; i < someArray.length; i++)
    returnResult += someArray[i];

  return returnResult;
}

function unique(someArray) {
  var obj = {};
  var i, key;

  for (i = 0; i < someArray.length; i++) {
    key = someArray[i];
    obj[key] = null;
  }

  return Object.keys(obj);
}

function last(someArray) {
  return someArray[someArray.length - 1];
}

function excludeLast(someArray, count) {

  var exclude = 1;
  if (count != undefined)
    exclude = count;

  someArray.length = someArray.length - exclude;

  return someArray;
}

function runner() {
  var tempArray = [1, 2, 3, 'text', true, null, 3, 2, 113];
  var tempObject = {};
  var tempNull = null;
  var tempString = '[fair object Array]';

  console.log('isArray(' + tempArray + ') = ' + isArray(tempArray));
  console.log('isArray(' + tempObject + ') = ' + isArray(tempObject));
  console.log('isArray(' + tempNull + ') = ' + isArray(tempNull));
  console.log('isArray(' + tempString + ') = ' + isArray(tempString));

  console.log('isArray2(' + tempArray + ') = ' + isArray2(tempArray));
  console.log('isArray2(' + tempObject + ') = ' + isArray2(tempObject));
  console.log('isArray2(' + tempNull + ') = ' + isArray2(tempNull));
  console.log('isArray2(' + tempString + ') = ' + isArray2(tempString));

  console.log('range(1, 10, 2) = ' + range(1, 10, 2));
  console.log('range(1, 5) = ' + range(1, 5));
  console.log('range(5) = ' + range(5));

  console.log('compact(' + tempArray + ') = ' + compact(tempArray));
  console.log('compact2(' + tempArray + ') = ' + compact2(tempArray));

  console.log('sum(' + tempArray + ') = ' + sum(tempArray));
  console.log('sum2(' + tempArray + ') = ' + sum2(tempArray));

  console.log('unique(' + tempArray + ') = ' + unique(tempArray));

  console.log('last(' + tempArray + ') = ' + last(tempArray));

  console.log('excludeLast(' + tempArray + ') = ' + excludeLast(tempArray));
  console.log('excludeLast([' + tempArray + '], 3) = ' + excludeLast(tempArray, 3));
}
