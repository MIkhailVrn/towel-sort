
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (!matrix)
    return []

  const sortedMatrix = matrix.map((array, i) => i % 2 === 0 ? array : array.reverse() )

  let flatArray = sortedMatrix.reduce((resultArray, array) => resultArray.concat(array), []) 

  return flatArray;
}
