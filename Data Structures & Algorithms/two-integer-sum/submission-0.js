class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = new Map();
        let result = [];
        nums.forEach((n,i)=>{
            hash.has(target-n) ? result = [hash.get(target-n), i] : null
            hash.set(n,i);
        });
        return result;
    }
}
