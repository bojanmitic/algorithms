// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.
// Time Complexity - O(n)

const maxSubarraySum = (arr, num) => {
	if(num > arr.length) return false;
    let maxSum = 0;
    let tempSum = 0;
		// sum num items in array
    for(let i = 0; i < num; i++) {
       maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
			//subtract last in the summed and add after summed
        tempSum = tempSum - arr[i - num] + arr[i]; 
        if(tempSum > maxSum) maxSum = tempSum;
    }
    return maxSum;
}