class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {}
        let l = nums.length;
        
        for(let i = 0; i < l; i++){
            let expect = target - nums[i];
            if(hash[expect] != undefined) return [hash[expect], i]
            else hash[nums[i]] = i;
        }
    }
}
