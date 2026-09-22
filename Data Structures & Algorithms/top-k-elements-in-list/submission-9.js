class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for(const num of nums) {
            if(!freq[num]) freq[num] = 0;
            freq[num] += 1;
        }
        const n = nums.length;
        const buckets = Array.from({ length: n + 1 }, () => []);
        
        for(const num of Object.keys(freq)){
            buckets[freq[num]].push(num);
        }
        
        const result = [];

        for(let i = n; i > 0 && result.length < k; i--) {
            for(let j = 0; j < buckets[i].length && result.length < k; j++){
                result.push(buckets[i][j]);
            }
        }

        return result;
}
}