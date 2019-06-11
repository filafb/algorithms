//source https://www.codewars.com/kata/objectify-a-url-query-string/javascript

function convertQueryToMap(query) {
  let queryToArray = query.split('&');
  let transformToObjects = queryToArray
  .map(queryToObj)
  .reduce(mergeObjects)
  return transformToObjects
}

function mergeObjects(acc, cur) {
  let accUpdated = acc;
  let curUpdated = cur;
  let keysCur = Object.keys(curUpdated);
  while(keysCur !== '0') {
    for(let key of keysCur) {
      if(!accUpdated[key]){
        accUpdated[key] = curUpdated[key]
        return acc
      } else {
        accUpdated = accUpdated[key];
        curUpdated = curUpdated[key];
        keysCur = Object.keys(curUpdated)
      }
    }
  }
}

function queryToObj(query) {
  let valuePosition = query.indexOf('=');
  let currentValue = query.substring(valuePosition + 1, query.length);
  currentValue = currentValue.replace('%20', " ");
  currentValue = currentValue.replace('%26', "&");
  currentValue = currentValue.replace('%3D', "=");
  currentValue = currentValue.replace('%3F', "?");
  let right = valuePosition - 1;
  for(let i = valuePosition - 1; i >= 0; i--) {
    if(query[i] === '.' || i === 0 && currentValue) {
      let newKey = query.substring(i === 0 ? 0 : i+1, right + 1)
      let newObj = {[newKey]: currentValue}
      currentValue = newObj
      right = i - 1
    }
  }
  return currentValue
}

module.exports = convertQueryToMap


