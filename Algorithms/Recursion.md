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
</br>In this example, the base case is “HelloWorld(0)”; if the function is asked 
to print zero times then it returns without spawning any more “HelloWorld”s.
2. **It avoids cycles.**</br>
Imagine if “HelloWorld(10)” called “HelloWorld(10)” which called “HelloWorld(10).” 
You’d end up with an infinite cycle of calls, and this usually would result in a “stack overflow” error while running. 
In many recursive programs, you can avoid cycles by having each function call be for a problem that is somehow smaller 
or simpler than the original problem. In this case, for example, count will be smaller and smaller with each call. 
As the problem gets simpler and simpler (in this case, we’ll consider it “simpler” to print something zero times 
rather than printing it 5 times) eventually it will arrive at the “base case” and stop recursing. 
There are many ways to avoid infinite cycles, but making sure that we’re dealing with progressively smaller 
or simpler problems is a good rule of thumb.
3. **Each call of the function represents a complete handling of the given task.**
</br>Sometimes recursion can seem kind of magical in the way it breaks down big problems. 
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

## Recursive implementation of the Fibonacci.

```java
public static int fibonacci(int n) {
    if (n == 0 || n == 1) {
        return 1; // base cases
    } else {
        return fibonacci(n-1) + fibonacci(n-2); // recursive step
    }
}
```

## Choosing the Right Decomposition for a Problem.
Finding the right way to decompose a problem, such as a method implementation, is important. Good decompositions are simple, short, easy to understand, safe from bugs, and ready for change.
For example, subsequences("abc") might return "abc,ab,bc,ac,a,b,c,". Note the trailing comma preceding the empty subsequence, which is also a valid subsequence.

This problem lends itself to an elegant recursive decomposition. Take the first letter of the word. We can form one set of subsequences that include that letter, and another set of subsequences that exclude that letter, and those two sets completely cover the set of possible subsequences.

```java
/**
 * @param word consisting only of letters A-Z or a-z
 * @return all subsequences of word, separated by commas,
 * where a subsequence is a string of letters found in word 
 * in the same order that they appear in word.
 */
 1 public static String subsequences(String word) {
 2     if (word.isEmpty()) {
 3         return ""; // base case
 4     } else {
 5         char firstLetter = word.charAt(0);
 6         String restOfWord = word.substring(1);
 7         
 8         String subsequencesOfRest = subsequences(restOfWord);
 9         
10         String result = "";
11         for (String subsequence : subsequencesOfRest.split(",", -1)) {
12             result += "," + subsequence;
13             result += "," + firstLetter + subsequence;
14         }
15         result = result.substring(1); // remove extra leading comma
16         return result;
17     }
18 }
```
## What does subsequences("c") return?
- [ ] "c"
- [ ] ""
- [X] ",c"
- [ ] "c,"</br>
subsequences("c") first calls subsequences(""), which just returns "".

We then split this empty string on ",", which returns an array of one element, the empty string.
The for loop then iterates over this array and constructs the two ways that subsequences of "c" can be formed (with or without the letter ‘c’). It appends each new subsequence to result, starting it with a comma. This means we’ll end up with an extra comma at the beginning of result, which we have to remove after the for loop.

- result = "" (line 10)
- result = "," (line 12)
- result = ",,c" (line 13)
- result = ",c" (line 15)</br>
Finally subsequences("c") returns ",c" representing the empty string and the string "c", the two possible subsequences of the one-character string "c".

## What does subsequences("gc") return?
- [ ] "g,c"
- [X] ",g,c,gc"
- [ ] ",gc,g,c"
- [ ] "g,c,gc"</br>
subsequences("gc") first calls subsequences("c"), which returns ",c" as we saw in the previous question.
We then split this string on ",", which produces an array of two elements, "" and "c".

The for loop then iterates over this array, producing two new subsequences from each element:

- result = "" (line 10)
- result = "," (line 12)
- result = ",,g" (line 13)
- result = ",,g,c" (line 12)
- result = ",,g,c,gc" (line 13)
- result = ",g,c,gc" (line 15)</br>
This final result is returned from subsequences("gc").
