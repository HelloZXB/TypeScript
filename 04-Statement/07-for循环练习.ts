// 1. 在终端打印1-5
for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}

// 2. 打印出正在吃包子
for (let j: number = 1; j <= 5; j++) {
    console.log('正在吃第个' + j + '包子');
}

// 3. 计算1-100之间所有的和
let num: number = 0;
for (let k: number = 1; k <= 100; k++) {
    num += k;
}
console.log(num);