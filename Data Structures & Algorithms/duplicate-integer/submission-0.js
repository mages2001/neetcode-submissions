class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const destinct = new Set(nums);
        if(destinct.size == nums.length) return false;
        else return true; 
    }
}
