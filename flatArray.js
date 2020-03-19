function flatArray(arr) {
  let copyArray = [...arr]
  let result = []
  let stack = [copyArray.shift()]

  while(stack.length) {
    let current = stack.shift()
    if(Array.isArray(current)) {
      stack = [...current, ...stack]
    } else {
      result.push(current)
      if(copyArray.length) {
        stack.push(copyArray.shift())
      }
    }
  }

  return result
}

function flatArrayRecursive(arr) {
  let result = []

  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      const returnedValue = flatArrayRecursive(arr[i])
      result = [ ...result, ...returnedValue]
    } else{
      result.push(arr[i])
    }
  }

  return result
}

module.exports = {flatArray, flatArrayRecursive}
