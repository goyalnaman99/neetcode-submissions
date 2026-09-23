class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = '';
        const delimiter = '#';
        for(let s of strs){
            const length = s.length;
            encoded_string += length + delimiter + s; 
        }
        return encoded_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const delimiter = '#';
        const decoded_strs = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            while (str[j] !== delimiter){
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            decoded_strs.push(str.substring(i, j));
            i = j;
        }
        return decoded_strs;
    }
}
