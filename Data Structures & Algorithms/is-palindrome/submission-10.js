class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let s1 = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let s2 = "";

        for (let i = s1.length - 1; i >= 0; i--) {
            s2 += s1[i];
        }

        if (s1 === s2) return true;
        else return false;
    }
}
