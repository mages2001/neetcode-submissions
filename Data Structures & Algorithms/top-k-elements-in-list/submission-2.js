class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //hash - {[key:num]: count}
        //for - loop & update hash
        //sort & take k most frequest e

        const hash = {};

        for (let i = 0; i < nums.length; i++) {
            if (hash[nums[i]]) hash[nums[i]] += 1;
            else hash[nums[i]] = 1;
        }

        const sHash = Object.entries(hash);
        for (let i = 0; i < sHash.length - 1; i++) {
            let swapped = false;
            for (let j = 0; j < (sHash.length - i - 1); j++) {
                if (sHash[j][1] > sHash[j + 1][1]) {
                    [sHash[j], sHash[j + 1]] = [sHash[j + 1], sHash[j]];
                    swapped = true;
                }
            }
            if (!swapped) break;
        }

        const res = [];
        const sIndex = sHash.length - k;
        for (let i = sIndex; i < sHash.length; i++) {
            res.push(sHash[i][0]);
        }

        return res;
    }
}
