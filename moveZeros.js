// ==== Problem statement: https://leetcode.com/problems/move-zeroes/ ====


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    if(nums.length === 1) return nums
    let tempVal
    let i = 0
    let j = i+1
    
    while(j<nums.length){
        if(nums[i] !== 0){
            i++
            j++
        }
        else if(nums[i] === 0 && nums[j] !== 0){
            // swap
            tempVal = nums[i]
            nums[i] = nums[j]
            nums[j] = tempVal
            i++
            j++
        }
        else
            j++
    }
    
    return nums
    
};