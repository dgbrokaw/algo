/*
  Lesson:
  Look back, not forward.  Use the lookup power of the O(1) object to refer to
  knowledge already gained.  If we can't use the current value now, save it and
  maybe it can be useful later.

  In my first brute-force solution, I was planning on iterating through the array.
  At every index, I would look forward through the rest of the array to find a value
  that will add to the target when summed with the current value.  This is wasteful,
  because I'm looking at the same information over and over again.

  This solution will take the relevant information of every entry in the array and
  put it into an O(1) hash.  It will only look at any entry in the array at most
  one time.

  Another solution using a hash is to first iterate over the array and put the
  relevant information into the hash, and then iterate again to find the complements.
  This requires two iterations over the array instead of one as is done above.
  This is still O(n) time complexity however, because you're not looping over the
  array for every element in the array.

  Both hash solutions have a space complexity of O(n), because of the space needed
  to store info in the hash.  The brute-force solution has a space complexity O(1).
*/

function twoSum(nums, target) {
  var num_map = {};
  for (var i=0; i<nums.length; i++) {
    var d = target - nums[i];
    if (d in num_map) return [num_map[d], i];
    num_map[nums[i]] = i;
  }
}
