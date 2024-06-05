function cleanRoom(arr) {
    let numberGroups = {};  // Object to store groups of numbers
    let stringGroups = {};  // Object to store groups of strings

    // Iterate through each item in the array
    arr.forEach(item => {
        let type = typeof item;  // Determine if the item is a number or a string
        let groups = type === "number" ? numberGroups : stringGroups;  // Select the appropriate group

        // Group the items together
        if (!groups[item]) {
            groups[item] = [];  // If the group doesn't exist, create it
        }
        groups[item].push(item);  // Add the item to the group
    });

    // Convert number groups to arrays
    let sortedNumbers = Object.values(numberGroups).map(group => group.length > 1 ? group : group[0]);
    // Convert string groups to arrays
    let sortedStrings = Object.values(stringGroups).map(group => group.length > 1 ? group : group[0]);

    return [sortedNumbers, sortedStrings];  // Return both grouped arrays
}

// Test Cases
console.log(cleanRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));
// Expected output: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]

console.log(cleanRoom([1, "2", "3", 2]));
// Expected output: [[1, 2], ["2", "3"]]


function findTwoSum(arr, target) {
    let nums = {};  // Hash map to store numbers and their indices

    // Iterate through each number in the array
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];  // Calculate the complement

        // Check if the complement is in the hash map
        if (nums[complement] !== undefined) {
            return [complement, arr[i]];  // Return the pair of numbers
        }

        // Add the current number to the hash map
        nums[arr[i]] = i;
    }

    return null;  // Return null if no pair is found
}

// Test Cases
console.log(findTwoSum([1, 2, 3], 4));
// Expected output: [1, 3]

console.log(findTwoSum([1, 2, 3, 4, 5], 9));
// Expected output: [4, 5]


function hexToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');

    // Convert HEX to a number and extract RGB components
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;  // Return the RGB string
}

function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;  // Return the HEX string
}

function convertColor(input) {
    if (input.startsWith('#')) {
        return hexToRgb(input);  // Convert HEX to RGB
    } else if (input.startsWith('rgb')) {
        let result = input.match(/\d+/g).map(Number);  // Extract RGB values
        return rgbToHex(result[0], result[1], result[2]);  // Convert RGB to HEX
    } else {
        return null;  // Return null for invalid input
    }
}

// Test Cases
console.log(convertColor("#FFFFFF"));
// Expected output: "rgb(255, 255, 255)"

console.log(convertColor("rgb(255, 255, 255)"));
// Expected output: "#FFFFFF"

console.log(convertColor("#000000"));
// Expected output: "rgb(0, 0, 0)"

console.log(convertColor("rgb(0, 0, 0)"));
// Expected output: "#000000"
