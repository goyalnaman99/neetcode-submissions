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
        nums.sort((a, b) => freq[b] - freq[a]);
        const result = [];

        const seen = new Set();
        for(const num of nums){
            if(seen.has(num)) continue;
            result.push(num);
            seen.add(num);
            if(result.length === k) break;
        }
        return result;
    }
}