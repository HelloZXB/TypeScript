let foods: string[] = ['沙发', '前端', 'java'];

// 取值
console.log(foods[1]);
console.log(foods[2]);

// 存值
foods[0] = '大数据';
console.log(foods);

// 存值 - 添加
foods[3] = 'python';
console.log(foods);
foods[foods.length] = 'C++';
console.log(foods);