// 1. 改造函数(sum), 实现计算任意两个数的和
function sum(num1: number, num2: number) {
    let result: number = num1 + num2;
    console.log(result);
}

sum(10, 50);

// 2. 封装函数(getSum), 计算任意数组中所有元素的和
//  说明: 数组中的元素为数值类型
//  比如: let nums1: number[] = [1, 3, 5];
function getSum(nums: number[]) {
    let sum: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}

getSum([1, 3, 5, 6, 9]);