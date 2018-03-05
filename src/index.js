module.exports = function solveSudoku(matrix) {
  
  function completeSudoku(){
    var emptyCell = getEmptyCell();
    
    if(!emptyCell){      
      return true;
    }
    var row = emptyCell[0], col = emptyCell[1];

    for(var number = 1; number <= 9; number++){      
      if(!isInRow(row, number) && !isInCol(col, number) && !isInGrid(row, col, number)){
        matrix[row][col] = number;
       
        if (completeSudoku()) {          
          return matrix;
        }
        matrix[row][col] = 0;
      }       
    }
    return false;
  }

  function getEmptyCell(){
    var emptyCell;
    for(var row = 0; row < 9; row++){
      for(var col = 0; col < 9; col++){
        if(matrix[row][col] == 0){
          return emptyCell = [row, col];
        }
      }      
    }
    return false;
  }

  function isInRow(row, number){
    for(var i = 0; i < 9; i++){      
      if(matrix[row][i] == number){
        return true;
      }
    }
    return false;
  }

  function isInCol(col, number){
    for(var i = 0; i < 9; i++){      
      if(matrix[i][col] == number){
        return true;
      }
    }
    return false;
  }

  function isInGrid(row, col, number){
    var startRow = row - row % 3;
    var startCol = col - col % 3;
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){       
        if(matrix[startRow + i][startCol + j] == number){
          return true;
        }
      }
    }
    return false;
  }
  return completeSudoku();
}
