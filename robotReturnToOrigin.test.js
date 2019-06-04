const judgeCircle = require('./robotReturnToOrigin');

describe('judgeCircle', () => {
  test('evalute if a sequence of movements represented by a string, returns to the orign after completing it', () => {
    expect(judgeCircle('UD')).toBeTruthy();
    expect(judgeCircle('RRDD')).toBeFalsy();
    expect(judgeCircle('LL')).toBeFalsy();
    expect(judgeCircle('UUDLDR')).toBeTruthy();
    expect(judgeCircle('DDLRUL')).toBeFalsy();
  })
})
