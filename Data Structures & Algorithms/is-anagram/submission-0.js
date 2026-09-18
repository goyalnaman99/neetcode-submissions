class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = {};
        for(let char of s){
            if(Object.hasOwn(map, char)) map[char]++;
            else map[char] = 1;
        }
        for(let char of t){
            if(!Object.hasOwn(map, char)) return false;
            map[char]--;
        }
        let mapKeys = Object.keys(map);
        for(let key of mapKeys){
            if(map[key] != 0) return false;
        }
        return true;
    }
}
