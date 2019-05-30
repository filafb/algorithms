const isAnagram = require('./validAnagram');

function shuffleString(str) {
  let strToArr = str.split('');
  for(let i = 0; i < strToArr.length; i++) {
    let randomPosition = Math.floor(Math.random() * (strToArr.length));
    let temp = strToArr[randomPosition];
    strToArr[randomPosition] = strToArr[i];
    strToArr[i] = temp;
  }
  return strToArr.join('');
};

function changeOneChar(str) {
  let strToArr = str.split('');
  let randomPosition = Math.floor(Math.random() * (strToArr.length));
  let randomChar = strToArr[randomPosition];
  let charUnicode = randomChar.charCodeAt(0);
  let newUnicode = charUnicode + 1
  let char = String.fromCharCode(newUnicode);
  strToArr[randomPosition] = char;
  return strToArr.join('');
}

describe('isAnagram', () => {
  test('determines if t is an anagram of s', () => {
    let s = 'anagram';
    let t = 'nagaram';
    expect(isAnagram(s,t)).toBeTruthy();
    s = "rat";
    t = "car";
    expect(isAnagram(s,t)).toBeFalsy();
  });
  test('works for large and random strings', () =>{
    let s = '';
    let t;
    let aUnicode = 97;
    let zUnicode = 122;
    for(let i = 0; i < 1000; i++ ){
      let charUnicode = Math.floor(Math.random() * (zUnicode - aUnicode + 1)) + aUnicode;
      let char = String.fromCharCode(charUnicode);
      s +=  char;
    };
    t = shuffleString(s);
    expect(s !== t).toBeTruthy();
    expect(isAnagram(s,t)).toBeTruthy();
    t = changeOneChar(t);
    expect(isAnagram(s,t)).toBeFalsy();

  });
});
