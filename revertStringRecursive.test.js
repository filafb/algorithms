const RevertString = require('./revertStringRecursive');
const sinon = require('sinon')

//console.log(revertString)

describe('revert string recursively', () => {
  let instance, spy
  beforeAll(() => {
    instance = new RevertString;
    spy = sinon.spy(instance, 'revertString')
  });
  afterAll(() => {
    spy.restore();
  })

  it('revert a string using recursion', () => {
    let fila = instance.revertString('fila');
    expect(fila).toBe('alif')
    expect(spy.callCount).toBe(fila.length)
    spy.resetHistory();
    let helloWorld = instance.revertString('helloWorld');
    expect(helloWorld).toBe('dlroWolleh')
    expect(spy.callCount).toBe(helloWorld.length)
  })
})
