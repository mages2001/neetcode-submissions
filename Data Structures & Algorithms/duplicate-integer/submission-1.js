class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = {}
        let len = nums.length
        let hasDup = false;
        for(let i = 0; i<=len ; i++){
            if(hash[nums[i]]){
                hasDup = true;
                break;
            } else{
                hash[nums[i]] = 1;
            }
        }
        return hasDup;
    }
}
