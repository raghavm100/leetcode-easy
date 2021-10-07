// ==== Problem Link : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/ ====

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


var lowestCommonAncestor = function(root, p, q) {
    
    let pathP = []
    let pathQ = []
    let tempArr = []
    let smallerArr = []
    let smallObj = {}
    let i = 0

    // ==== pushing DFS to make path for P and Q nodes ====
    function dfs(node){
        if(!node) return
        
        tempArr.push(node)
        if(p === node){
            pathP = tempArr.slice()
        }
        else if( q === node){
            pathQ = tempArr.slice()
        }
        dfs(node.left)
        dfs(node.right)
        tempArr.pop()
    }
    
    dfs(root)
    
    // ==== building Object for smallest array ====
    smallerArr = pathP.length < pathQ.length ? pathP : pathQ
    for(i=0; i<smallerArr.length; i++){
        smallObj[smallerArr[i].val] = smallerArr[i]
    }
    
    // ==== fetching nearest ancestor ====
    tempArr = pathP.length < pathQ.length ? pathQ : pathP
    for(i=tempArr.length-1; i>=0 ; i--){
        if(smallObj[tempArr[i].val]){
            return tempArr[i]
        }
    }
};