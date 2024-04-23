// 2D Array = multi-dimensional array that stores a matrix
// of data in rows and columns.
// Useful for games, spreadsheets or representing images.

const matrix = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                ['*', 0, '#']];


matrix[0][0] = 'X';
matrix[0][1] = 'O';
matrix[0][2] = 'X'

matrix[1][0] = 'O';
matrix[1][1] = 'O';
matrix[1][2] = 'O'

matrix[2][0] = 'X';
matrix[2][1] = 'O';
matrix[2][2] = 'O'; */


for(let row of matrix) {
    const rowString = row.join(' ');
    console.log(rowString)
}

const grades = [[1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10],
                [11, 12, 13, 14, 15]];


for(let i = 0; i < grades.length; i++) {
    for(let k = 0; k < grades[i].length; k++) {
        /* console.log(grades[i][k]); */
    }
}

grades.forEach(row => {
    row.forEach(row => {
        console.log(col);
    });
})