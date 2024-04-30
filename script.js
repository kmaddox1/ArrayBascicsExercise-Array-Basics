let favoriteAuthors = ["Pierce Brown", "Andy Weir", "Stephen King"];

console.log(favoriteAuthors);
// favoriteAuthors.sort(); aplhabetical order
favoriteAuthors.sort();
console.log(favoriteAuthors);
// want to add a new author to the list used the push method
favoriteAuthors.push("Mary Russell");
console.log(favoriteAuthors);

// want to go back to the pervious list and remove the last name that you added you used the slice funciton. first number is includsive and the second number is exclusive. Basically I want to included element o,1,2 but not 3 which is the last element.
// have to make it variable to see the change   favoriteAuthors.slice(0, 3);
//let smallList = favoriteAuthors.slice(0, 3);
//console.log(smallList); 

// want to remove another author from the list. We will use the splice method. First number is the index number of the element we want to start removing from. The second number is the number of elements we want to remove.
favoriteAuthors.splice(2, 1);
console.log(favoriteAuthors);

