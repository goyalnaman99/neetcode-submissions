class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [1];
        const suffix = [1];
        let product = 1;
        for(let i = 1 ; i<nums.length; i++){
            product *= nums[i-1];
            prefix.push(product);
        }

        product = 1;
        for(let i = nums.length - 2 ; i >= 0; i--){
            product *= nums[i+1];
            suffix.push(product);
        }
        suffix.reverse();

        let result = [];
        for(let i = 0; i < nums.length; i++){
            result.push(prefix[i] * suffix[i]);
        }
        return result;
    }
}