const reverseOnlyLetters = require('./reverseOnlyLetters');

describe('reverse only letters', () => {
  it('returns a reversed string, changing only the position of letters and keeping the position for all other characters', () => {
    expect(reverseOnlyLetters("ab-cd")).toBe("dc-ba");
    expect(reverseOnlyLetters("a-bC-dEf-ghIj")).toBe("j-Ih-gfE-dCba");
    expect(reverseOnlyLetters("Test1ng-Leet=code-Q!")).toBe("Qedo1ct-eeLg=ntse-T!");
    expect(reverseOnlyLetters("a")).toBe("a");
    expect(reverseOnlyLetters("ab")).toBe("ba");
    expect(reverseOnlyLetters("!!")).toBe("!!");
    expect(reverseOnlyLetters("a!!!!!!")).toBe("a!!!!!!");
    expect(reverseOnlyLetters("a!!!!!!b")).toBe("b!!!!!!a");
    expect(reverseOnlyLetters("")).toBe("");
  })
})
