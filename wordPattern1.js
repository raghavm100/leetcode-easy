// ==== Problem Statement: https://leetcode.com/problems/word-pattern/ ====


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    let memObj = {}
    let memObjWord = {}
    let tempWord
    let i = 0
    
    let wordArr = s.split(" ")
    wordArr = wordArr.filter(val => val !== "")
    
    if(pattern.length !== wordArr.length) return false
    
    while(i < wordArr.length){
        if(!memObj[pattern[i]] && !memObjWord[wordArr[i]]){
            memObj[pattern[i]] = wordArr[i]
            memObjWord[wordArr[i]] = pattern[i]
        }
        else if(memObj[pattern[i]] !== wordArr[i] || memObjWord[wordArr[i]] !== pattern[i])
                return false
        
        i++
    }
    
    return true
    
    
};