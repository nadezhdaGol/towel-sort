
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newMatrix = [];

    if (matrix == false || matrix == null) {
        return newMatrix;
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                matrix[i] = matrix[i].reverse();
                newMatrix.push(matrix[i]);
            } else {
                newMatrix.push(matrix[i]);
            }
        }
        newMatrix = newMatrix.flat();
        return newMatrix;
    }
}
