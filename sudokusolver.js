//sudoku solver
// rules:Use Numbers 1-9

// empty slots are represented by numbers 
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
var x = {}, noNum, total = 81;
while(total > 0){
total =0;
for(var r = 0; r < arr.length; r++){
for(var h = 0; h < arr.length; h++){
x = {};
if(arr[r][h] === 0){
   for(var i = 0; i < 9; i++){
       if(arr[r][i] > 0){
           x[arr[r][i]] = 1;
       }
       if(arr[i][h] > 0){
           x[arr[i][h]] = 1;
       }
   }
   for(var rgrid = Math.floor(r / 3) * 3; rgrid < Math.floor(r / 3) * 3 + 3; rgrid++){
       for(var hgrid = Math.floor(h / 3) * 3; hgrid < Math.floor(h / 3) * 3 + 3; hgrid++){
           if(arr[rgrid][hgrid]){
               x[arr[rgrid][hgrid]] = 1;
           }
       }
   }