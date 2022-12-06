function oddNumbers(l, r) {
    // I will create an empty array   
    let array = []
    
    // then I will use a while loop to to push the numbers from l -> r
      while (l <= r) {
        array.push(l)
        //increment to next number
        l++
      }
      // now I want to return only the odd numbers, I will filter out the
      // even numbers using %
    
      return array.filter(num => num % 2)
      
    }
    
    console.log(oddNumbers(3,15))