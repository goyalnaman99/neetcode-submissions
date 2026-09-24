class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;
        const numsSet = new Set();
        for(const num of nums) {
            numsSet.add(num);
        }
        let longestSeq = 1;
        for(let num of nums){
            if(numsSet.has(num - 1)) continue;
            let seq = 1;
            while(numsSet.has(++num)) seq++;
            longestSeq = seq > longestSeq ? seq : longestSeq;
        }
        return longestSeq;
    }
}
