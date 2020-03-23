//sudoku solver
// zeros are indicitive of empty space
// number should not be repeated in the same row, column , or in the subgrid
var sudoko = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0 ,0]
]; 

function solveGame(arr){
var x = {}, noNum, total = 81;// total - 9*9=81 spaces, x - object to keep track
while(total > 0){// loop ends when there are no empty spaces left
total =0;// incemented every single time an empty space is found
for(var r = 0; r < arr.length; r++){
for(var h = 0; h < arr.length; h++){
x = {};// used to keep track of all the possible numbers that cannot be put at each empty space
if(arr[r][h] === 0){ // if we find a zero at any space or element
   for(var i = 0; i < 9; i++){ // iterates through zero to nine
       // Checking for each row elements possibilty
       if(arr[r][i] > 0){
           x[arr[r][i]] = 1;
       }
       // Checking for each col elements possibilty
       if(arr[i][h] > 0){
           x[arr[i][h]] = 1;
       }
   }
   // Checking for 3*3 grid elements possibiltygit 
   for(var rgrid = Math.floor(r / 3) * 3; rgrid < Math.floor(r / 3) * 3 + 3; rgrid++){ // floor rounds it down
       for(var hgrid = Math.floor(h / 3) * 3; hgrid < Math.floor(h / 3) * 3 + 3; hgrid++){
           if(arr[rgrid][hgrid]){
               x[arr[rgrid][hgrid]] = 1;
           }
       }
   }
   // Replacing the zeros with  possible numbers
   noNum = Object.keys(x);// object will be in form of strings. 
   if(noNum.length === 8){ // if there are 8 values in x then the remaining one is the solution
       for(var i = 0; i < 10; i++){
           if(noNum.indexOf(i.toString()) < 0){
               arr[r][h] = i;
           }
       }
   }
   else{
         total++;
       }
}
}
}
}
return arr;
}
console.log(solveGame(sudoko));
