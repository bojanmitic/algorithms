// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
// formed from iceman.
// Function will not get any non alphanumeric characters ans spaces or special chars
// Make sure that the space-time complexity is O(n)!!! nested loops are not allowed!!!

const validAnagram = (str1, str2) => {
	// if strings are not the same return false
	if(str1.length !== str2.length) return false;
	
	// define two objects for each string
	const frequencyStr1 = {};
	const frequencyStr2 = {};
	
	// loop through first string and construct obj as key and value is how many of those letters are in the string
	for( let char of str1) {
			frequencyStr1[char] = (frequencyStr1[char] || 0) + 1
	}

	// loop through second string and construct...
	for(let char of str2) {
			frequencyStr2[char] = (frequencyStr2[char] || 0) + 1
	} 
	
	//loop through first object and compare
	for(let key in frequencyStr1) {
			if(!(key in frequencyStr2)) return false;
			if(frequencyStr2[key] !== frequencyStr1[key]) return false;
	}
	
	return true
}

//solution with two loops
const validAnagram2 = (str1, str2) => {
	//check if those two are same lenght
 if(str1.length !== str2.length) return false;

	//Make new object to construct key value based on first string
	const lookup = {}

	// Go through first string and construct
	for( let char of str1) {
			lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
	}
	// Go through lookup and subtract all letters
	for(let char of str2) {
			if(!lookup[char]) return false;
			else lookup[char] -= 1;
	}
	return true;
}

