function findNumber(arr, k) {
    //I want to search through the array and see if
    // K matches any of the values
    // if it does then I want to return a string of "YES"
    // else I want to return a string of "NO"
  
    //using a for loop to iterate through array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === k) return 'YES'
    } 
    return 'NO'
  }
  
  console.log(findNumber([2,3,4,5], 1))