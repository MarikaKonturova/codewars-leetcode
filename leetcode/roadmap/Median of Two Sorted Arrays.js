var findMedianSortedArrays = function (nums1, nums2) {
  let A = nums1,
    B = nums2;
  let total = nums1.length + nums2.length;
  let half = Math.floor(total / 2);
  // to substract then from half the mid from the smaller array
  if (A.length > B.length) {
    let c = A;
    A = B;
    B = c;
  }
  let l = 0;
  let r = A.length - 1;
  while (true) {
    i = Math.floor((l + r) / 2); 
    j = half - i - 2;
    Aleft = i >= 0 ? A[i] : Number.NEGATIVE_INFINITY;
    ARight = A[i + 1] ?? Number.POSITIVE_INFINITY;
    Bleft = j >= 0 ? B[j] : Number.NEGATIVE_INFINITY;
    BRight = B[j + 1] ?? Number.POSITIVE_INFINITY;
    if (Aleft <= BRight && Bleft <= ARight) {
      //odd
      if (total % 2) {
        return Math.min(ARight, BRight);
      }
      //even
      return (Math.max(Aleft, Bleft) + Math.min(ARight, BRight)) / 2;
    } else if (Aleft > BRight) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
};

//console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
//console.log(findMedianSortedArrays([1, 2], [3, 4]));
//console.log(findMedianSortedArrays([], [1]));
