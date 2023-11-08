"use strict";

function customSort(inputArray){
    //given an array of x number of items, sort any numeric values according to their numeric value;
    let left = 0;
    let right = 1;
    let lastDigit = inputArray.length - 1;

    while(right < inputArray.length){
        if(right > lastDigit){
            left ++ ;
            right ++ ;
            lastDigit= inputArray.length - 1;
        } else{
            if(inputArray[left] < inputArray[right]){
                let temp = inputArray[right];
                inputArray[right] = inputArray[lastDigit];
                inputArray[lastDigit] = temp;                
                lastDigit -= 1;
            } else{
                let temp = inputArray[right];
                inputArray[right] = inputArray[left];
                inputArray[left] = temp;  
            }
        }
    }
    return inputArray;
}

let numbers = [12, 52, 10, 28,69, 6, 92,  83];
        //     |
//                  |
//                             |


let sortedNumbers = customSort(numbers);

console.log(sortedNumbers);