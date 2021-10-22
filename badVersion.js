/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

// ==== Problem Statement: https://leetcode.com/problems/first-bad-version/ ====

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1
        let end = n
        let mid = Math.floor((start+end)/2)
        let lastBad = null
        
        function findBad(mid, start, end){
            if(start > end){
                return
            }
            
            let result = isBadVersion(mid)
            if(result){
                lastBad = mid
                end = mid - 1
            }else{
                start = mid + 1
            }
            
            mid = Math.floor((start+end)/2)
            return findBad(mid, start, end)
        }
        
        findBad(mid, start, end)
        return lastBad
    };
};