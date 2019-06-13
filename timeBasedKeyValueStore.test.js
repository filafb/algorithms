const TimeMap = require('./timeBasedKeyValueStore');

describe('Time Map', () => {

  const timeMap = new TimeMap

  it('is a store that keep track of inputs key-value-timestamp and allows to get values based on the keys', () =>{
    timeMap.set("love", "high", 10);
    timeMap.set("love", "low", 20)
    expect(timeMap.get('love', 10)).toEqual('high');
    expect(timeMap.get('love', 20)).toEqual('low');
  });
  it('if the timestamp request does not exist, it returns the previous lowest one, compare with the input', () => {
    expect(timeMap.get('love', 15)).toEqual('high');
    expect(timeMap.get('love', 25)).toEqual('low');
  });
  it('if there is no previous lowest value or the key doesnt exist, it returns a empty string', () => {
    expect(timeMap.get('love', 9)).toEqual('');
    expect(timeMap.get('noLove', 25)).toEqual('');
  });
  it('accepts more than one key', () => {
    timeMap.set("hello", "world", 10);
    expect(timeMap.get('love', 10)).toEqual('high');
    expect(timeMap.get('hello', 10)).toEqual('world');
    expect(timeMap.get('hello', 11)).toEqual('world');
  });
})
