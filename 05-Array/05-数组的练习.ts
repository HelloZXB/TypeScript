// 求数组中所有元素的和 [20, 30, 40];
let nums: number[] = [20, 30, 40];
let sum: number = 0;
for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum);

// 找出数组中的最大值 [103, 2323, 2421, 234, 24924, 131];
let num: number[] = [103, 2323, 2421, 234, 24924, 131];
let max: number = num[0];
for (let i: number = 1; i < num.length; i++) {
    if (num[i] > max) {
        max = num[i]
    }
}
console.log(max);

// 找出数组中不为0的元素, 放到一个新数组中 [0, 21, 29, 0, 0, 24, 0, 24]
let newArr: number[] = [0, 21, 29, 0, 0, 24, 0, 24];
let arr: number[] = [];
for (let i: number = 0; i < newArr.length; i++) {
    if (newArr[i] !== 0){
        arr[arr.length] = newArr[i];
    }
}
console.log(arr);


