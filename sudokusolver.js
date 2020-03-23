//sudoku solver
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
       // Checking for each row elements possibilty
       if(arr[r][i] > 0){
           x[arr[r][i]] = 1;
       }
       // Checking for each col elements possibilty
       if(arr[i][h] > 0){
           x[arr[i][h]] = 1;
       }
   }
   // Checking for 3*3 grid elements possibilty
   for(var rgrid = Math.floor(r / 3) * 3; rgrid < Math.floor(r / 3) * 3 + 3; rgrid++){
       for(var hgrid = Math.floor(h / 3) * 3; hgrid < Math.floor(h / 3) * 3 + 3; hgrid++){
           if(arr[rgrid][hgrid]){
               x[arr[rgrid][hgrid]] = 1;
           }
       }
   }
   // Replacing the zeros with  possible numbers
   noNum = Object.keys(x);
   if(noNum.length === 8){
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
