function hasTargetSum(array, target) {
    const seenNumbers = new Set();
    for (let number of array){
        const complement = target - number;
        if (seenNumbers.has(complement)) {
          return true;
        }
          seenNumbers.add(number);
    }
    return false;
}

/* 
  O(n)
*/

/* 
function hasTargetSum(array, target):
    // Initialize an empty set to keep track of seen numbers
    seenNumbers = new Set()

    // Iterate through each number in the array
    for each number in array:
        // Calculate the complement (target - number)
        complement = target - number

        // Check if the complement is already in the set
        if complement is in seenNumbers:
            // If found, return true
            return true

        // Add the current number to the set
        add number to seenNumbers

    // If no pair is found, return false
    return false
*/

/*
  The solution will iterate through the input array. It will create a new array to keep track of seen numbers.
  For each number, it will calculate the complement by subtracting the current number from the target.
  It will then check to see if the complement exist in the new array and if it does it will return true.
  It will then add the current number to the new array. 
  If it doesent find the complement it will return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
