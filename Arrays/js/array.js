// ANCHOR Study code of the extension to see if have children notes

// SECTION Working with arrays

// SECTION Class 3
// NOTE Starting an array, and inserting value below and inside this array
var avgTemp = []

avgTemp[0] = 31.9
avgTemp[1] = 35.3
avgTemp[2] = 42
avgTemp[3] = 38
avgTemp[4] = 26.5

// NOTE Accessing an array named temp with the index number
//console.log(avgTemp[2])

// !SECTION - 
// SECTION Class 4
// NOTE Starting an array like a object instance, this is not a good practice to use in projects
var daysOfWeek = new Array('Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')

// console.log(daysOfWeek.length)

// !SECTION -
// SECTION Class 5
// NOTE Class - 5 Acessing Arrays through interation

var monthsOfYear = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

for(var i = 0; i < monthsOfYear.length; i++) {
    console.log(monthsOfYear[i])
}

var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

// NOTE Loop over the Fibonacci numbers, so the next number is the result of the previous two numbers
for(var i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

//console.log(fibonacci)


for(var i = 0; i < fibonacci.length; i++) {
    //console.log(fibonacci[i])
}
// !SECTION

// SECTION Class 6

// NOTE Inserting elements in the array
var numbers = [0,1,2,3,4,5,6,7,8,9]

// NOTE Two ways do this
numbers[10] = 10
// or
numbers[numbers.length] = 11

// NOTE But this is not a good practice, to get the best result, we will use .push
numbers.push(12)
numbers.push(13)
numbers.push(14)
numbers.push(15)

// NOTE If you want to put the elements before you can use .unshift

numbers.unshift(-1)
numbers.unshift(-2)
numbers.unshift(-3)
numbers.unshift(-4)



// !SECTION -

// SECTION Class 7
// NOTE Removing elements of the array

// NOTE Removing the last index of the array with .pop()
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()

// NOTE Removing the first index of the array with .shift()
numbers.shift()
numbers.shift()
numbers.shift()
numbers.shift()

console.log(numbers)
console.log('after splice')



// !SECTION -

// SECTION Class 8
// NOTE Inserting a index in an specific position

// NOTE To remove elements, the first parameter is where the deletion will occur by selecting the number of is index, after the comma will specify how many index will be deleted
numbers.splice(3, 3)
console.log(numbers)

// NOTE To insert elements, the first parameter is where the insertion will occur, specify with '0' that will not remove any index, after the comma, you specify the items you want to insert
console.log('inserting items with splice')
numbers.splice(3, 0, 'ok','another','text')
console.log(numbers)





