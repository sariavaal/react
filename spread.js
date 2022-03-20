const fn = (a, b, c) => console.log(a+b+c)
const arr = [1,2,3,4]
//fn(arr[0], arr[1],arr[2]);
fn(...arr)
const arr1 = [5,6]
//const arr2 = arr.concat(arr1)
const arr2 = [...arr,...arr1]
console.log(arr2)