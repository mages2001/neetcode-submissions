class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let nzp = 0


        //solutio
        let res = []
        for(let i=0; i<nums.length; i++){
            let p = 1
            for(let j=0; j<nums.length; j++){
                if(j === i) continue;
                p *= nums[j];
            }
            res.push(p);
        }
        return res;
    }
}
