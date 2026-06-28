class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //loop the list
        //short and use as a key
        //push/group valuses using key
        //retrun

        //{key:[str,str]}
        const hash = {};
        const sort = (str) =>{
            //aStr -> array string
            let aStr = str.split('');
            for(let i=0; i<(aStr.length-1); i++){
                let isSorted = false;
                for(let j=0; j<(aStr.length-i-1); j++){
                    if(aStr[j] > aStr[j+1]){
                        [aStr[j], aStr[j+1]] = [aStr[j+1], aStr[j]];
                        isSorted = true;
                    }
                }
                if(!isSorted) break;
            }
            return aStr.join('');
        }
        for(let i=0; i<strs.length; i++){
            //sKey -> sorted key
            let sKey = sort(strs[i]);
            hash[sKey] ? hash[sKey].push(strs[i]) : hash[sKey] = [strs[i]];
        }

        return Object.values(hash);

    }
}
