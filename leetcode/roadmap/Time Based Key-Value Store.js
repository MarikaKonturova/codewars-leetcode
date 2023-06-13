var TimeMap = function () {
  this.map = new Map();
};
TimeMap.prototype.set = function (key, value, timestamp) {
  const keyVals = this.map.has(key) ? this.map.get(key) : [];
  keyVals.push([timestamp, value]);
  this.map.set(key, keyVals);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */

TimeMap.prototype.get = function (key, timestamp) {
  const keyTimeStamps = this.map.get(key) ?? [];
  let l = 0,
    mid,
    ts = null,
    r = keyTimeStamps.length - 1;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (keyTimeStamps[mid][0] <= timestamp) {
      ts = keyTimeStamps[mid][1];
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ts === null ? "" : ts;
};

let timeMap = new TimeMap();
timeMap.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1); // return "bar"
timeMap.get("foo", 3); // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4); // return "bar2"
timeMap.get("foo", 5); // return "bar2"
