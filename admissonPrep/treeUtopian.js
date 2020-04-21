function getHeight(cycles) {
  let size = 1
  for(let i = 1; i <= cycles; i++) {
      const isOdd = i % 2
      if(isOdd) {
          size *= 2
      } else {
          size += 1
      }
  }
  return size
  // write code here

}
