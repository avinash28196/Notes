# An Introduction to Recursion

## “What is recursion?” 
Basically, a function is said to be recursive if it calls itself.
Below is pseudocode for a recursive function that prints the phrase “Hello World” a total of count times:

```
function HelloWorld(count)
{
    if(count<1)return
    print("Hello World!")
    HelloWorld(count - 1)
}
```
**some key considerations in designing a recursive algorithm:**

1. **It handles a simple “base case” without using recursion.**
In this example, the base case is “HelloWorld(0)”; if the function is asked 
to print zero times then it returns without spawning any more “HelloWorld”s.
2. **It avoids cycles.**
Imagine if “HelloWorld(10)” called “HelloWorld(10)” which called “HelloWorld(10).” 
You’d end up with an infinite cycle of calls, and this usually would result in a “stack overflow” error while running. 
In many recursive programs, you can avoid cycles by having each function call be for a problem that is somehow smaller 
or simpler than the original problem. In this case, for example, count will be smaller and smaller with each call. 
As the problem gets simpler and simpler (in this case, we’ll consider it “simpler” to print something zero times 
rather than printing it 5 times) eventually it will arrive at the “base case” and stop recursing. 
There are many ways to avoid infinite cycles, but making sure that we’re dealing with progressively smaller 
or simpler problems is a good rule of thumb.
3. **Each call of the function represents a complete handling of the given task.**
Sometimes recursion can seem kind of magical in the way it breaks down big problems. 
However, there is no such thing as a free lunch. When our function is given an argument of 10, 
we print “Hello World!” once and then we print it 9 more times. We can pass a part of the job along to a recursive call, 
but the original function still has to account for all 10 copies somehow.

## Function to compute factorial.

**Iterative.**
```java
public static long factorial(int n) {
  long fact = 1;
  for (int i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
```
**Recursive.**
```java
public static long factorial(int n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}
```

This is a [interactive visualization of factorial ](http://www.pythontutor.com/visualize.html#mode=edit) 
