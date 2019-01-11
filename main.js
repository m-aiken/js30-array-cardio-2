const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const fullDate = new Date();
const currentYear = fullDate.getFullYear();
let checker = function anyoneNineteen(person) {
    return currentYear - person.year >= 19;
};
console.log(currentYear);
const nineteenOrOver = people.some(checker);
console.log(nineteenOrOver);
// With arrow function
const anyNineteen = people.some(x => currentYear - x.year >= 19);
console.log(anyNineteen);

// Array.prototype.every() // is everyone 19 or older?
const allMustBeNineteen = people.every(checker);
console.log(allMustBeNineteen);
// With arrow function
const allNineteen = people.every(x => currentYear - x.year >= 19);
console.log(allNineteen);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// Find the comment with the ID of 823423
let idFinder = comments.find(function(comment) {
    return comment.id === 823423;
});
console.log(idFinder);
// With arrow function
const foundComment = comments.find(comment => comment.id === 823423);
console.log(foundComment);
// Just the comment
console.log(foundComment.text);

// Array.prototype.findIndex()
// Find the comment with this ID
const commentIndex = comments.findIndex(comment => comment.id === 823423);

console.log(commentIndex);
console.log(comments[commentIndex]);
// Just the comment
console.log(comments[commentIndex].text);

// Delete the comment with the ID of 823423
const removedComment = comments.splice(commentIndex, 1);
console.log(removedComment);
console.log(comments);