class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const hash = {}

        const sort = (str) => {
            const sl = str.split('');
            for(let i=0; i < sl.length - 1; i++){
                let sorted = false;
                for(let j=0; j < (sl.length - i -1); j++){
                    if(sl[j] > sl[j+1]) {
                        [sl[j], sl[j+1]] = [sl[j+1], sl[j]];
                        sorted = true;
                    }
                }
                if(!sorted) break;
            }
            return sl.join('');
        }

        for(let i=0; i<strs.length; i++){
            let key = sort(strs[i]);
            hash[key] ? hash[key].push(strs[i]) : hash[key] = [strs[i]];
        }

        return Object.values(hash);

    }
}
