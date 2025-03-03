let nums = [1, 2, 2, 1, 1, 0];


var applyOperations = function (nums) {


    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }

    }

    let pos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[pos], nums[i]] = [nums[i], nums[pos]];
            pos++;
        }
    }

    return nums;
};

const test = applyOperations(nums);

console.log(test);