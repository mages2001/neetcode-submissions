class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const pf = [];
        const sf = [];
        const res = [];

        for(let i=0; i<nums.length; i++){
            pf[i] = i==0 ? nums[i] : nums[i]*pf[i-1];
        }

        for(let i=nums.length-1; i>=0; i--){
            sf[i] = i==nums.length-1 ? nums[i] : nums[i]*sf[i+1];
        }

        for(let i=0; i<nums.length; i++){
            if(i==0) res[i] = sf[i+1];
            else if(i==nums.length-1) res[i] = pf[i-1];
            else res[i] = pf[i-1] * sf[i+1];
        }

        return res;

        //solution - 2 (On)
        // let mp = null;
        // let zs = 0;
        // const res = [];
        // for(let i=0; i<nums.length; i++){
        //     if(mp && nums[i]) mp *= nums[i];
        //     else if(!mp && nums[i]) mp = nums[i];
        //     else if(mp && !nums[i]) zs += 1;
        //     else if(!mp && !nums[i]) zs += 1;
        // }

        // for(let i=0; i<nums.length; i++){
        //     if(zs > 1) res.push(0);
        //     else if(nums[i] && zs) res.push(0);
        //     else if(!nums[i] && zs) res.push(mp);
        //     else if(nums[i] && !zs) res.push(mp/nums[i])
        // }

        // return res;

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
