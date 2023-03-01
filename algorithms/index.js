const algorithms = require('./algorithms')
const prompt = require('prompt-sync')();



function main(){
  const str = prompt('Input number array: ');
  const arr = str.split(' ').map(item => parseInt(item));
  algorithms.miniMaxSum(arr);
}

if (require.main === module) {
  main();
}