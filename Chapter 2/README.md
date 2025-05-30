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
```
    let ten = 10;
    console.log(ten * ten);
    // → 10
```
When a binding points at a value, that does not mean it is tied to that value forever. The = operator can be used at any time on existing bindings to disconnect them from their current value and have them point to a new one.

```
    let mood = "light";
    console.log(mood);
    // → light
    mood = "dark";
    console.log(mood);
    // → dark
```
