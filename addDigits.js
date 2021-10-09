// ==== Problem Statement: https://leetcode.com/problems/add-digits/ ====

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    // let loopCount = 0
    let resultVal = 0
    let rem = 0
    
    while(num >= 10){
        resultVal = 0
        while(num !== 0){
            rem = num % 10
            resultVal += rem
            num = Math.floor(num / 10)
        }
        num = resultVal
        // loopCount++
    }
    
    return num
};