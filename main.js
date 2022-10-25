// lab 9

//2.	Write a function that finds a perimeter of the rectangle given by two sides.

function rectangle_perimeter(side1, side2) {
result = 2 * (side1 + side2)
return result;
}
let side1 = 2;
let side2 = 4;
console.log(rectangle_perimeter(side1, side2));

//10.	Write a function to check whether two given numbers are equal or not.
function equality_check(x, y)
{
if (x == y) {
	console.log("x is equal to y")
} 
 else {console.log("x and y are not equal")}
};
let x = 2;
let y = 2;
console.log(equality_check(x,y));

//14.	Write a function that returns the greatest among the given three numbers.
function greatest_number(a, b, c)
{
if ( a > c , a > b) {
console.log(a)
}
else if (b > a, b > c) {
console.log(b)
}
else {
console.log(c)
}
}
let a = 16;
let b = 24;
let c = 28;
console.log(greatest_number(a, b, c));