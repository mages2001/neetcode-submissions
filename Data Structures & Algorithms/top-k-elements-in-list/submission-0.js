class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {}
        nums.forEach(x=>{
            if(hash[x]) hash[x] += 1;
            else hash[x] = 1;
        });
        const sortedHash = Object.entries(hash).sort((a,b)=>b[1]-a[1]);
        return sortedHash.slice(0, k).map(x=>x[0]);
    }
}
