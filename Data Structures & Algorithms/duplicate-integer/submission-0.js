class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj= {};
        nums.forEach((ele) => {
            if(Object.hasOwn(obj, ele)) obj[ele]++;
            else {
                obj[ele] = 1;
            }
        })
        let a = Object.keys(obj);
        let result = false;
        a.forEach((ele) => {
            if(obj[ele] > 1) result = true; 
        })
        return result;
    }
}
