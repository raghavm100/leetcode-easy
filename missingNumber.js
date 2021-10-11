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
        // if(maxNum < nums[i]) maxNum = nums[i]
        i++
    }
    
    i=0
    while(i < numArr.length){
        if(numArr[i] === undefined)
            return i
        else
            i++
    }
    
    // return maxNum + 1
    return numArr[numArr.length-1] + 1
};