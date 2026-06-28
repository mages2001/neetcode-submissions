class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const dict = new Map();
        strs.forEach(s => {
            const ss = s.split('').sort().join(); 
            dict.has(ss) ? dict.get(ss).push(s) : dict.set(ss, [s]);
        })
        return Array.from(dict.values());
    }
}
