/*
The function will take in two parameters (noteText, magazineText).
The Note may read like: 'this is a secret note for you from a secret admirer'
The Magazine may contain: 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you'

The algorithm must return true or false. Are there enough words in the magazine to write the note?

*/

const harmlessRansomNote = (noteText, magazineText) => {
    //set the magazine text to an array and split at each space character to separate the words
    let magArr = magazineText.split(' ');

    //set the noteText to an array and split at each space character to separate the words
    let noteArr = noteText.split(' ');

    //create a magazine object that will contain each word and their quantity
    const magObj = {};
    
    //use a for each loop on the magArr that passes a functio for each word in the array that will place each word into the magazine object and keep count of each time the word is used

    magArr.forEach(element => {
        //if the word is not in the magObj then set it to 0
        if(!magObj[element]) magObj[element] = 0;
        //increment the word in the magObj each time is appears in the array
        magObj[element]++;

    });
    //console.log(magObj)
   
    //set noteIsPossible to be true initially
    let noteIsPossible = true;

    //check each element in the noteArr and see if the word is in the magObj
    // if the word is present then decrement the word from the magObj
    // if the word is not present the set noteIsPossible = false
    noteArr.forEach(element => {
        if (magObj[element]) {
            magObj[element]--;
            if (magObj[element] < 0) noteIsPossible = false
        } 
        else noteIsPossible = false
        
    });

    console.log(noteIsPossible)
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a great place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you')

// time complexity is Linear O(n) we have two loops but they are not nested