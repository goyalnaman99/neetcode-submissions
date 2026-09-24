class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(c){
        if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) return true;
        return false;
    }

    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        while(i < j){
            while(i < j && !this.isAlphaNumeric(s[i])) i++;
            while(i < j && !this.isAlphaNumeric(s[j])) j--;

            if(s[i].toLowerCase() !== s[j].toLowerCase()){
                return false;
            }
            
            i++;
            j--;
        }
        return true;
    }
}
