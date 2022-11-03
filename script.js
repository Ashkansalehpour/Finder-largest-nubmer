/* 
  Title: Finder of the largest number in array

  Version:1.0 v

  Developer: Ashkan Salehpour

  Date:11/03/2022

  Description: Finder of the largest number in array which work with (for) and (if)
*/


// Find the biggest number in array exercise 
// ---------------------------------------------------------

// Students score in array
let score = [10,12,15,14,9,15,16,13,18,19,19,15,12];
// Minimum number which we use it for compare
let biggest= 0;


for (i=0; i<score.length; i++){
    // We use this for to search for the numbers which is in array one by one and then we make condition(if(){}) for compare the numbers with the other numbers and if we find the biggest in array , the number replace 0 (which we use it for minimum number) and show it in console.log :)
    if (score[i]>biggest){
        biggest=score[i];
    }
}

console.log(biggest);


// NOTE: The script which we use it for finding the biggest number in array , does not work with Decimal numbers. 