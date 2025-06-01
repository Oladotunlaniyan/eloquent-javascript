# Program Structure

### Expressions & Statements 
- Expression : A fragment of code that produces a value is called an expression
- Statement : A statement stands on its own, so it amounts to something only if it affects the world 

### Bindings 
This is how a program keeps an internal state, and how it remembers things. Example:
    ``` 
    let caught = 5 * 5; 
    const Qawi = Boy;
    ```
After a binding has been defined, its name can be used as an expression. The
value of such an expression is the value the binding currently holds. Here’s an example

example:
```js
    let ten = 10;
    console.log(ten * ten);
    // → 10
```
When a **binding** points at a value, that does not mean it is tied to that value forever. The **=** operator can be used at any time on existing bindings to disconnect them from their current value and have them point to a new one.

The word **var** and **const** can also be used for bindings aside let

```js
    let mood = "light";
    console.log(mood);
    // → light
    mood = "dark";
    console.log(mood);
    // → dark
```

**Note: If you ask for the value of an empty binding, you’ll get the value undefined.**

Binding names can be any word. Digits can be part of binding names—catch22
is a valid name, for example—but the name must not start with a digit. A
binding name may include dollar signs ($) or underscores (_) but no other
punctuation or special characters.
Words with a special meaning, such as let, are keywords, and they may not
be used as binding names.

#### Environment 

The collection of bindings and their values that exist at a given time is called
the environment.

#### Functions 
A function is a piece of program wrapped in a value

functions that come with the language include: 
-console.log 
-prompt 

### Control Flow 
When your program contains more than one statement, the statements are executed as if they are a story, from top to bottom.

**Not all programs are straight roads**. We may, for example, want to create a branching road, where the program takes the proper branch based on the situation at hand. This is called conditional execution.

#### Conditional statements
Conditional execution is created with the **if** keyword in JavaScript. In the simple case, we want some code to be executed if, and only if, a certain condition holds. 
We might, for example, want to show the square of the input only if the input is actually a number.

```js
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
console.log("Your number is the square root of " +
theNumber * theNumber);
}
```
You can use the else keyword, together
with if, to create two separate, alternative execution paths

```js 
let theNumber = Number(prompt("Pick a Number"));

if(!Number.isNaN(theNumber)){
    console.log("Your number is the square root of " + theNumber * theNumber);
}else{
    console.log("Hey. Why didn't you give me a number?")
}
//this condition simply translates to “unless theNumber is not-a-number", do this, the else statement is triggered only if you don't get a value 
```
If you have more than two paths to choose from, you can “chain” multiple if/else pairs together. Here’s an example:
```js
let num = Number(prompt("Pick a number"));
if (num < 10) {
console.log("Small");
} else if (num < 100) {
console.log("Medium");
} else {
console.log("Large");
}

//The program will first check whether num is less than 10. If it is, it chooses that branch, shows "Small", and is done. If it isn’t, it takes the else branch, which itself contains a second if. If the second condition (< 100) holds, that means the number is at least 10 but below 100, and "Medium" is shown. If it doesn’t, the second and last else branch is chosen.
```
#### While & Do loops
Looping control flow allows us to go back to some point in the program where we were before and repeat it with our current program state.

If we combine this with a binding that counts, we can do something like this:

```js
let number = 0;
while (number <= 12) {
console.log(number);
number = number + 2;
}
// → 0
// → 2
// … etcetera
```
A statement starting with the keyword while creates a loop. The word while is followed by an expression in parentheses and then a statement, much like if.

#### For Loops 

```js
for(let number = 0; number <= 12; number = number + 2){
    console.log(number);
}
```


#### Breaking Out of a Loop

Having the looping condition produce false is not the only way a loop can finish. There is a special statement called break that has the effect of immediately
jumping out of the enclosing loop.

```js
for(let current = 20; ; current = current + 1){
    if(current % 7 == 0){
        console.log(current);
        break;
    }
}
```

#### Updating bindings

```js
counter = counter + 1;

//JavaScript provides a shortcut for this.

counter += 1;

//Similar shortcuts work for many other operators, such as result *= 2 to double result or counter -= 1 to count downward. This allows us to shorten our counting example a little more
```

#### Dispatching on a value with switch

```js
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();
```

There is a construct called switch that is intended to express such a “dispatch” in a more direct way. Unfortunately, the syntax JavaScript uses for
this (which it inherited from the C/Java line of programming languages) is somewhat awkward—a chain of if statements may look better. Here is an example:

```js
switch (prompt("What is the weather like?")) {
case "rainy":
console.log("Remember to bring an umbrella.");
break;
case "sunny":
console.log("Dress lightly.");
case "cloudy":
console.log("Go outside.");
break;
default:
console.log("Unknown weather type!");
break;
}
```

