// This program for multiplication of  incremental matrix and it transpose matrix
// written by sravan
 
function multi_matrix_transpose(firstCount,rows,columns) {
    matrix1 = [];

    for(i=0;i<rows;i++) {
        row_matrix = [];
        for (j=0;j<columns;j++) {
            row_matrix.push(firstCount++)
        }
        matrix1.push(row_matrix)
    }
    console.log(matrix1);

    transp_matrix= [];

    for(i=0;i<columns;i++) {
        row_matrix = [];
        for(j=0;j<rows;j++) {
            row_matrix.push(matrix1[j][i])   
        }
        transp_matrix.push(row_matrix);
    }
    //m_matrix = math.matrix(matrix1);
    //m_transp_matrix = math.matrix(transp_matrix);
    console.log(transp_matrix)

    result = [];
    // first matrix rows
    for(i=0;i<rows;i++) {
        row_matrix = []
        // second matrix columns
        for(j=0;j<rows;j++) {
            sum = 0;
            // second matrix rows
            for(k=0;k<columns;k++) {
                console.log(i,k,j)
            sum = sum + matrix1[i][k]*transp_matrix[k][j]
            }
            row_matrix.push(sum)
        }
        result.push(row_matrix);
    }
    console.log(result);
}

