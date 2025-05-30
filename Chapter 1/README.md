# Values, Types, and Operators

Inside the computer's world, there is only data. You can read data, modify data, create new data—but that which isn't data cannot be mentioned. All this data is stored as long sequences of bits and is thus fundamentally alike.

Bits are any kind of two-valued things, usually described as zeros and ones. Inside the computer, they take forms such as:

- A high or low electrical charge
- A strong or weak signal
- A shiny or dull spot on the surface of a CD

Any piece of discrete information can be reduced to a sequence of zeros and ones and thus represented in bits.

## Binary Representation Example

We can express the number **13** in bits. Like decimal, binary increases in weight from right to left, but by a factor of 2:

```
Bits:     0 0 0 0 1 1 0 1
Weights:128 64 32 16  8 4 2 1
```

The binary `00001101` equals 13 because 8 + 4 + 1 = 13.

## Values

Imagine a sea of bits—an ocean of them. A modern computer has more than **30 billion bits** in working memory and vastly more in non-volatile storage (like hard drives).

To manage this, JavaScript groups bits into **values**, which:

- Are made of bits
- Have **types**: numbers, text (strings), functions, etc.

Creating values is simple:

```js
let value = 13;
```

Values are stored in memory and recycled when no longer in use.

## Numbers

JavaScript number values are written like this:

```js
13
```

JavaScript uses **64 bits** to store a number. This allows for around **18 quintillion** distinct values. The maximum **precise** integer is about **9 quadrillion** due to space needed for sign and decimal information.

### Fractional Numbers

Use a dot:

```js
9.81
```

### Scientific Notation

```js
2.998e8 // equals 2.998 × 10⁸
```

### Precision

- **Integers** below 9 quadrillion are precise.
- **Fractions** might lose precision due to limited bits.

## Arithmetic

JavaScript supports basic arithmetic:

```js
100 + 4 * 11
```

### Operator Precedence

Multiplication happens before addition, just like in math. Use parentheses to change this:

```js
(100 + 4) * 11
```

### Other Operators

- Subtraction: `-`
- Division: `/`
- Remainder (modulo): `%`

```js
314 % 100 // → 14
144 % 12  // → 0
```

## Special Numbers

JavaScript includes three special number values:

- `Infinity`
- `-Infinity`
- `NaN` (Not a Number)

Examples:

```js
console.log(Infinity - 1); // → Infinity
console.log(0 / 0);        // → NaN
```

## Strings

Strings represent **text** and are wrapped in quotes:

```js
"Hello"
'World'
`Template literal`
```

### Escaping Special Characters

Use backslashes:

```js
"This is line 1\nThis is line 2"
```

To include a literal backslash:

```js
"A newline character is written like \"\\n\"."
```

### Unicode

JavaScript strings use the Unicode standard (16-bit per character), but some characters (like emojis) may use two positions.

### String Concatenation

```js
"con" + "cat" + "e" + "nate" // → "concatenate"
```

### Template Literals

Backticks allow for expressions and multiline strings:

```js
`half of 100 is ${100 / 2}` // → "half of 100 is 50"
```

## Unary Operators

Operators that use one value are **unary**. Example:

```js
typeof 4.5    // → "number"
typeof "x"    // → "string"
```

The `-` operator can also be unary:

```js
console.log(-(10 - 2)) // → -8
```

## Boolean Values

(To be continued...)