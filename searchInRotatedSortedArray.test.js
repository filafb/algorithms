const search = require('./searchInRotatedSortedArray');

const rotate = (arr, rotations) => {
  const delItems = arr.splice(rotations*-1)
    return [...delItems, ...arr]
}

describe('search', () => {
  test('finds the index in a rotated array', () => {
    expect(search([4,5,6,7,0,1,2],0)).toEqual(4)
  });

  test('return -1 if array doesnt contain target', () => {
    expect(search([4,5,6,7,0,1,2],3)).toEqual(-1)
  });

  test('works with large and random arrays', () => {
    let arr = [];
    for(let i = 0; i < 1000; i++) {
      let randomNum = Math.floor(Math.random() * 10) + 1;
      let previousNum = i !== 0 ? arr[i-1] : 0;
      let newNum = randomNum + previousNum;
      arr.push(newNum);
    }
    let rotations = Math.floor(Math.random() * (arr.length - 0));
    let rotatedArray = rotate(arr, rotations);
    let randomIndex = Math.floor(Math.random() * (arr.length - 1));
    let target = rotatedArray[randomIndex];
    expect(search(rotatedArray, target)).toEqual(rotatedArray.indexOf(target));
    rotatedArray.splice(randomIndex, 1);
    expect(search(rotatedArray, target)).toEqual(-1);

  })

})
