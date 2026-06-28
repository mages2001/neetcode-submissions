class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sl = s.length;
        let tl = t.length;
        let hash = {};
        if(sl != tl) return false;

        for(let i = 0; i < sl; i++){
            hash[s[i]] != undefined ? hash[s[i]] += 1 : hash[s[i]] = 1;
            hash[t[i]] != undefined ? hash[t[i]] -= 1 : hash[t[i]] = -1;
        }

        let r = new Set(Object.values(hash)).size
        if(r == 1) return true;
        else return false

    }
}
