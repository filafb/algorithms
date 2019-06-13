//source: https://leetcode.com/problems/time-based-key-value-store/

/**
 * Create a timebased key-value store class TimeMap, that supports two operations.
 * 1. set(string key, string value, int timestamp)
    Stores the key and value, along with the given timestamp.

 * 2. get(string key, int timestamp)
  Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.

  If there are multiple such values, it returns the one with the largest timestamp_prev.
  If there are no values, it returns the empty string ("").
 */

var TimeMap = function () {
  this.map = {};
};

/**
* @param {string} key
* @param {string} value
* @param {number} timestamp
* @return {void}
*/

//Time: O(1) // Space:O(n)
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) {
    this.map[key] = {
      times: [timestamp],
      values: [value]
    };
  } else {
    this.map[key].times.push(timestamp);
    this.map[key].values.push(value);
  }
};

/**
* @param {string} key
* @param {number} timestamp
* @return {string}
*/
// Time: O(logn) n is the size of the store // O(1)
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map[key] || this.map[key].times[0] > timestamp) return ""
  return this.searchClosest(this.map[key], timestamp)
};

TimeMap.prototype.searchClosest = function (obj, target) {
  const { times, values } = obj;
  let left = 0;
  let middle = Math.floor(times.length / 2);
  let right = times.length - 1;
  let value = times[middle]
  while (left <= right) {
    if (target === value) return values[middle]
    else if (target < value) {
      right = middle - 1;
      middle = Math.floor((right + left) / 2)
    } else {
      left = middle + 1;
      middle = Math.floor((right - middle + 1) / 2) + middle;
    }
    value = times[middle];
  }
  return values[middle]
}

module.exports = TimeMap
