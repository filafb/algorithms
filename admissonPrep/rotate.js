/*
  possible approach: modify current array.
*/
function rotate(arr, steps) {
  const netRotations = steps % arr.length
  const firstPart = arr.slice(arr.length - netRotations)
  const secondPart = arr.slice(0, arr.length - netRotations)
  return [...firstPart, ...secondPart]
}
