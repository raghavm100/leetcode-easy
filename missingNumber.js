// ==== Problem statement: https://leetcode.com/problems/missing-number/ ====

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let numArr = []
    let maxNum = 0
    let i = 0
    
    while(i < nums.length){
        numArr[nums[i]] = nums[i]
        i++
    }
    
    i=0
    while(i < numArr.length){
        if(numArr[i] === undefined)
            return i
        else
            i++
    }
    
    return numArr[numArr.length-1] + 1
};



/*
    ====
    Algo:
    1. Make a new array to hold all elements.
    2. Loop the primary array(nums) and add it to the holding Array's (numArr) index value.
    3. Re-run a loop on numArr to find which element is missing ( missing = undefined)
    4. if nothing is undefined, that means the elememt missing is largest element + 1


    TC : O(n)
    SC : O(n)
    ====
*/