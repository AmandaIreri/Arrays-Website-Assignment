// 1 Find the last element of the following arrays.  arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,4,34,90,12];
console.log('last elemnt', arr1.slice(-1));

let arr2 = [true, 'green','where',12,56];
console.log('last elemnt', arr2.slice(-1));

//2 Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];

let myPets = ['parrot', 'cat'];
let myNewPets = myPets.push(['Cow','Bird','Snake','Dog']);
console.log({myPets});

//3 Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
var sortedArray = arr3.sort();
console.log({sortedArray})

//4 Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
//let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
let removeDuplicates = [...new Set(arr)];
console.log({removeDuplicates});

const duplicates = arr.filter((value))



//5 Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"
//let arr5 = ["the", "way", "x", 4];

let items = ["the", "way", "x", 4];
const word = items.reduce((acc,item) =>{
    if (acc == "food") {
        console.log(word)
    }
}
)

// 7
let fruits = ["bananas", 'kiwi','grapes','pineapple','watermelon','lemon','mango','dragon','strwberry','apple']
fruits.splice(5,0,"apple")
console.log({fruits})


