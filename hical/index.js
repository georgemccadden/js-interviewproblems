// Your company has built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available. To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

// Example :

// { startTime : 2, endTime : 3 } // meeting from 10:00 am - 10:30 am
// { startTime : 6, endTime : 9 } // meeting from 12:00 pm - 1:30 pm

// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// Example :

// [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// Your function will return :

// [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 },
// ]



// Algorithm :

// - Sort your input array of meetings by start time so any meetings that might need to be merged are now next to each other
// - Walk through the sorted meetings from left to right. At each step, either :
// - You can merge the current meeting with the previous one, so proceed
// - Or you can't merge the current meeting with the previous one, so you know the previous meeting can't be merged with any future meetings and you throw the current meeting into mergedMeetings



