## Functions 


#### Defining a function

A function definition is a regular binding where the value of the binding is a function. For example, this code defines square to refer to a function that produces the square of a given number:

```js
const square = function(x) {
return x * x;
};
console.log(square(12));
```

A function can have multiple parameters or no parameters at all.

Some functions produce a value, such as power and square, and some don’t, such as makeNoise, whose only result is a side effect. A **return** statement determines the value the function returns.

#### Bindings and Scope 
Each binding has a scope, which is the part of the program in which the binding
is visible. For bindings defined outside of any function or block, the scope is the whole program. This bindings are referred to as **global**.

But bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as **local** bindings.


Bindings declared with **let** and **const** are in fact local to the block that they are declared in, so if you create one of those inside of a loop, the code before and after the loop cannot “see” it.

### Nested Scope 
JS distinguished not just global and local bindings Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality.
For example, this function—which outputs the ingredients needed to make a batch of hummus—has another function inside it:
```js
const hummus = function(factor) {
const ingredient = function(amount, unit, name) {
let ingredientAmount = amount * factor;
if (ingredientAmount > 1) {
unit += "s";
}
console.log(`${ingredientAmount} ${unit} ${name}`);
};
ingredient(1, "can", "chickpeas");
ingredient(0.25, "cup", "tahini");
ingredient(0.25, "cup", "lemon juice");
ingredient(1, "clove", "garlic");
ingredient(2, "tablespoon", "olive oil");
ingredient(0.5, "teaspoon", "cumin");
};
```

The code inside the ingredient function can see the factor binding from the outer function. But its local bindings, such as unit or ingredientAmount, are not visible in the outer function. The set of bindings visible inside a block is determined by the place of that block in the program text.

### Functions as values 
A function binding usually simply acts as a name for a specific piece of the program. Such a binding is defined once and never changed. This makes it easy to confuse the function and its name. But the two are different. A function value can do all the things that other values can do---you can use it in arbitrary expressions, not just call it.