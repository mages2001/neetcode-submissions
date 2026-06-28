class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        //sort
        for (let i = 0; i < nums.length - 1; i++) {
            let swapped = false;
            for (let j = 0; j < nums.length - i - 1; j++) {
                if (nums[j] > nums[j + 1]) {
                    [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                    swapped = true;
                }
            }
            if (!swapped) break;
        }

        const state = {
            mx: 0,
            ccount: 0,
            next: undefined,
        };
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == state.next) {
                state.next = nums[i] + 1;
                state.ccount += 1;
            } else if (nums[i] == state.next - 1) {
                continue;
            } else {
                state.ccount = 1;
                state.next = nums[i] + 1;
            }
            if (state.ccount > state.mx) state.mx = state.ccount;
        }
        return state.mx;
    }
}
