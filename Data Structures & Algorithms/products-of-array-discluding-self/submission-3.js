class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        //solution - 2
        let mp = null;
        let zs = 0;
        const res = [];
        for(let i=0; i<nums.length; i++){
            if(mp && nums[i]) mp *= nums[i];
            else if(!mp && nums[i]) mp = nums[i];
            else if(mp && !nums[i]) zs += 1;
            else if(!mp && !nums[i]) zs += 1;
        }

        for(let i=0; i<nums.length; i++){
            if(zs > 1) res.push(0);
            else if(nums[i] && zs) res.push(0);
            else if(!nums[i] && zs) res.push(mp);
            else if(nums[i] && !zs) res.push(mp/nums[i])
        }

        return res;

        //solution - 1 (O^2)
        // let res = []
        // for(let i=0; i<nums.length; i++){
        //     let p = 1
        //     for(let j=0; j<nums.length; j++){
        //         if(j === i) continue;
        //         p *= nums[j];
        //     }
        //     res.push(p);
        // }
        // return res;
    }
}
