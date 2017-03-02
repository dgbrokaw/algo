/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   var substring = [];
//   var length = 0;
//   for (var i=0; i<s.length; i++) {
//     var c = s.charAt(i);
//     for (var j=0; j<substring.length; j++) {
//       if (substring[j] === c) {
//         substring.splice(0, j+1);
//       }
//     }
//     substring.push(c);
//     if (substring.length > length) length = substring.length;
//   }
//   return length;
// }

// optimized
var lengthOfLongestSubstring = function(s) {
  var length = 0;
  var map = {};
  for (var i=0, j=0; j<s.length; j++) {
    // This is the trick that makes this work.  I was struggling to figure out
    // how to increment my starting index while not needing to delete old index
    // values in the map.  Here, we use "max" to ignore indexes that are irrelevant
    // to the current substring.  I.e., if the index of the letter in the map
    // is outside our current substring, we don't need to update our current
    // starting index.
    if (s[j] in map) i = Math.max(map[s[j]], i);
    length = Math.max(length, j-i+1);
    // Another trick.  Set the index of the letter to be the next index, so
    // when finding the new index based on the previous instance of a particular
    // letter, it's already excluded.
    map[s[j]] = j+1;
  }
  return length;
}

// experimental, not working
// var lengthOfLongestSubstring = function(s) {
//   var largest_length = 0;
//   var letters = {};
//   var length = 0;
//   for (var i=0; i<s.length; i++) {
//     var c = s.charAt(i);
//     if (c in letters) length = i - (letters[c] + 1);
//     letters[c] = i;
//     length++;
//     if (length > largest_length) largest_length = length;
//   }
//   return largest_length;
// };

// other solution
// function lengthOfLongestSubstring(s) {
//     const map = {};
//     var left = 0;
//
//     return s.split('').reduce((max, v, i) => {
//         left = map[v] >= left ? map[v] + 1 : left;
//         map[v] = i;
//         return Math.max(max, i - left + 1);
//     }, 0);
// }

// other good solution, easier to understand
// var lengthOfLongestSubstring = function(s) {
//     var maxLen,
//         l,
//         r;
//
//     if (s.length < 2) {
//         return s.length;
//     }
//
//     maxLen = 0;
//
//     for (l = 0, r = 1; r < s.length; r++) {
//         i = s.lastIndexOf(s[r], r-1);
//         if (i >= 0) {
//             maxLen = Math.max(maxLen, r - l);
//             l = Math.max(l, i + 1);
//         }
//     }
//     return Math.max(maxLen, r - l);
// };

// editorial
// https://leetcode.com/articles/longest-substring-without-repeating-characters/

// abba
// In this one, we want length 2, which is either the substring "ab" or "ba".
// The problem with the above algorithm, is that when we encounter the second "a",
// the length is set to 3.  But, then length should be set to 2.  That is the difference
// between the index of the current letter and the last UNIQUE letter.

// dvdf
