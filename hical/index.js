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

// - Treat the meeting with the earlier start time as 'first,' and the other as 'second'
// - If the end time of the first meeting is equal to or greater than the start time of the second meeting, merge the two meetings into one time range. The resulting time range's start time is the first meeting's start, and its end time is the later of the two meetings' end times
// Else, leave them separate

