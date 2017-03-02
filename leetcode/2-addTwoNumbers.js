/*
  Lesson:
  Use a dummy head to simplify the creation of our new singly-linked list.
  We hold a reference to the dummy head, and we return the "next" property
  of our dummy head, which is the first computed number.

  The carry can be at most 1. So, we don't need to do any special work to find
  the value of the 10s digit.

  The algorithm is O(max(m,n)) time and O(max(m,n)) space complexity, because
  it is a single iteration of the linked-list numbers, and the new number is at
  most max(m,n) + 1 in length.
*/

//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Returns a single-linked list representation of the array-number representation.
function makeNum(arr) {
  var number;
  var current_num;
  arr.forEach(function(num) {
    if (!current_num) {
      current_num = new ListNode(num);
      number = current_num;
    } else {
      current_num.next = new ListNode(num);
      current_num = current_num.next;
    }
  });
  return number;
}

function printNum(list) {
  var num = [];
  while (list) {
    num.push(list.val);
    list = list.next;
  }
  console.log(num);
}

// Singly-linked list version.
var addTwoNumbers = function(l1, l2) {
    var sum;
    var current_num;
    var carry = 0;

    function tensDigit(num) {
      if (num >= 10) return Number(('' + num)[0]);
      else return 0;
    }

    while (l1 || l2) {
      var new_digit = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
      if (carry > 0) new_digit += carry;
      var new_num = new ListNode(new_digit % 10);
      if (!current_num) {
        current_num = new_num;
        sum = current_num;
      } else {
        current_num.next = new_num;
        current_num = new_num;
      }
      carry = tensDigit(new_digit);
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
    if (carry > 0) {
      current_num.next = new ListNode(carry);
    }
    return sum;
};

// Someone else's solution.
// var addTwoNumbers = function(l1, l2) {
//     var List = new ListNode(0);
//     var head = List;
//     var sum = 0;
//     var carry = 0;
//
//     while(l1!==null||l2!==null||sum>0){
//
//         if(l1!==null){
//             sum = sum + l1.val;
//             l1 = l1.next;
//         }
//         if(l2!==null){
//             sum = sum + l2.val;
//             l2 = l2.next;
//         }
//         if(sum>=10){
//             carry = 1;
//             sum = sum - 10;
//         }
//
//         head.next = new ListNode(sum);
//         head = head.next;
//
//         sum = carry;
//         carry = 0;
//
//     }
//
//     return List.next;
// };
