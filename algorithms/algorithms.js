function miniMaxSum(arr){
  let min = max = sum = arr[0];
  for(let i = 1; i < 5; i++){
    if(arr[i] < min){
      min = arr[i];
    }
    else if(arr[i] > max){
      max = arr[i];
    }
    sum += arr[i];
  }
  console.log('%d %d', sum - max, sum - min);
  return [sum - max, sum - min];
}


exports.miniMaxSum = miniMaxSum