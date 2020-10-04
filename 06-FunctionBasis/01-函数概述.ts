// let nums: number[] = [1, 4, 6];
// let sum: number = 0;
// for (let i: number = 0; i < nums.length; i++){
//     sum += nums[i];
// }
// console.log(sum);
//
// let nums1: number[] = [11, 43, 62];
// let sum1: number = 0;
// for (let i: number = 0; i < nums1.length; i++){
//     sum1 += nums1[i];
// }
// console.log(sum1);


function getSum(nums: number[]) {
    let sum: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
let nums: number[] = [1, 4, 6];
getSum(nums)
let nums1: number[] = [21, 44, 46];
getSum(nums1)