//2024-08-25
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];
  console.log(arr)
  return arr.length > max ? max : arr.length
}