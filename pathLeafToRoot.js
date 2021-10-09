// ==== Problem Statement: https://leetcode.com/problems/binary-tree-paths/ ====

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    let resultArr = []
    let visitedString = ""
    let visitedArr = []
    
    function dfs (node){
        if(!node) return false
        
        // visitedString += node.val.toString() + "->"
        visitedArr.push(node.val)
        
        let left = dfs(node.left)
        let right = dfs(node.right)
        
        if(left === false && right === false){
            // resultArr.push(visitedString.slice(0,-2))
            resultArr.push(visitedArr.join("->"))
        }
        
        // visitedString = visitedString.slice(0,-3)
        visitedArr.pop()
        return true
    }
    
    dfs(root)
    return resultArr
    
};