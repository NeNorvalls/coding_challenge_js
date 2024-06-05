# Optional Exercise: JavaScript Logic

## What is the Challenge?
Solve the below 3 JavaScript puzzles. The goal of this challenge is to practice our logic skills. This is useful not only in interviews when you get challenging problems, but also in your day-to-day work as a developer.

## Questions

### Question 1: Clean the Room Function
Given an input of `[1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]`, make a function that organizes these into individual arrays that are ordered.

For example, `answer([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20])` should return `[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]`.

**Bonus:** Make it so it organizes strings differently from number types. For example, `[1, "2", "3", 2]` should return `[[1,2], ["2", "3"]]`.

### Question 2: Find Two Numbers that Add Up to Target
Write a JavaScript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number.

For example, `answer([1, 2, 3], 4)` should return `[1, 3]`.

### Question 3: HEX to RGB and RGB to HEX Converter
Write a function that converts HEX to RGB. Then make that function auto-detect the formats so that if you enter a HEX color format it returns RGB, and if you enter an RGB color format it returns HEX.
