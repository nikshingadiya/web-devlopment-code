var v=[111,20,40,50,60];
let max = v[0];
for (let i = 1; i < v.length; ++i) {
  if (v[i] > max) {
    max = testArray[i];
  }
}
console.log("Maximum Number for given array:=",max);