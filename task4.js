






let number = 42;
let string = "Hello, World!";
let array1 = [1, 2, 3];
let array2 = ["apple", "banana", "cherry"];
let object = { name: "Piyas", age: 24 };
let boolean = true;
let nullValue = null;
let undefinedValue;


let variables = [number, string, array1, array2, object, boolean, nullValue, undefinedValue];


variables.forEach((variable, index) => {
  if (Array.isArray(variable)) {
    console.log(`Number ${index + 1} is a Array`);
  } else {
    console.log(`Number ${index + 1} is not a array`);
  }
});