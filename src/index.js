module.exports = function towelSort (matrix) {
let result = [];
let i = 0;
if (matrix === [] || matrix === undefined){
  return []
}
while (i < matrix.length) {
   if ( (i % 2) === 0 || i === 0 ) {
    for (let n = 0; n < matrix[i].length; n++) {
      result.push(matrix[i][n]) 
    }
  } else {
    for (let n = matrix[i].length -1; n >= 0; n--){
      result.push(matrix[i][n])
    }
  }
i++;
} 
  return result;
}
