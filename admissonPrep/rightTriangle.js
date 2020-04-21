function rightTriangle(number) {
  let finalString = ""
  while(number) {
      for(let i = number; i > 0; i--) {
          finalString += "*"
      }
      if(number !== 1) {
          finalString += "\n"
      }
      number--
  }
  return finalString
}

function rightTriangleRec(number) {
  let string = ""
  if(number === 1) {
    return "*"
  } else {
    let tempString = ""
    for(let i = number; i > 0; i--) {
      tempString += "*"
    }
    string += tempString + "\n" + rightTriangleRec(number - 1)
  }
  return string
}
