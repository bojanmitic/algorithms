// Implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in the array. There can be negative numbers in the array, 
// but it will always be sorted.
// Time Complexity - O(n)
// Space Complexity - O(n)

const countUniqueValues = (arr) => {
	if(arr.length === 0) return 0;
	let j = 0;
	for( let i = 1; i < arr.length; i++) {
		if(arr[i] !== arr[j]){
			j++;
			arr[j] = arr[i];
		}
	}
	return j + 1;
}