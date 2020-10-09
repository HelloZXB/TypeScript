function getSum(nums: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    // console.log(sum);
    return sum;
}

let result: number = getSum([10, 22, 3, 4]) + getSum([1, 2, 4]);
console.log(result);