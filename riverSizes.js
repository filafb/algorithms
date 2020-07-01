
const getNeighborsToVisit = (matrix, [i, j], visited) => {
  let up = i  === 0 ? undefined : [i-1,j]
  let left = j === matrix[0].length - 1 ? undefined : [i, j+1]
  let right = j === 0 ? undefined : [i, j - 1]
  let down = i === matrix.length - 1 ? undefined : [i+1, j]

  return [up, left, right, down].filter(el => el).filter(([i,j]) => !visited[i][j])
}

const riverSizes = matrix => {

  const rivers = []
  const visited = matrix.map(row => row.map(() => false))

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j< matrix[0].length; j++) {
      if(matrix[i][j] === 1 && !visited[i][j]) {
        let stackToVisit = [[i,j]]
        let currentRiverSize = 0
        while(stackToVisit.length) {
          const currNeighbor = stackToVisit.pop()
          if(!visited[currNeighbor[0]][currNeighbor[1]]) {
            visited[currNeighbor[0]][currNeighbor[1]] = true
            if(matrix[currNeighbor[0]][currNeighbor[1]] === 1) {
              const neighbors = getNeighborsToVisit(matrix, currNeighbor, visited)
              stackToVisit = [...stackToVisit, ...neighbors]
              currentRiverSize++
            }
          }
        }
        if(currentRiverSize) rivers.push(currentRiverSize)
      }
    }
  }

  return rivers
}



module.exports = riverSizes
