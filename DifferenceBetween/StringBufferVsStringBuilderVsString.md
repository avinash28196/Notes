## StringBuffer Vs StringBuilder Vs String

StringBuffer and StringBuilder classes in Java which represents mutable String i.e. the String object, whose value can be changed.



Why we need StringBuffer class and StringBuilder?

Since String is Immutable in Java, any change or operation on String object e.g. converting it to upper or lower case, 
adding character, removing a character, or getting a substring, all results in a new String object.
This can put a lot of pressure on Garbage collector if your application generates lots of throws away String instances. 


## StringBuffer
StringBuffer was introduced it has its own problem e.g. it was synchronized, methods like appends have synchronized 
and hence they were slower. Even if you use them by just one thread and don't share with other threads, 
the cost of acquiring and releasing lock due to Synchronization is still significant.


## StringBuilder

Since StringBuffer was synchronised and slow, In Java 5 they Introduced StringBuilder.


### Note.

* Both StringBuffer and StringBuilder represents mutable String which means you can add/remove characters,
  substring without creating new objects.
* You can convert a StringBuffer into String by calling toString() method.
*  StringBuffer is synchronized which means all method which modifies the internal data of StringBuffer is synchronized e.g. append(), insert() and delete().
  On contrary, StringBuilder is not synchronized.
* Because of synchronization StringBuffer is considered thread safe e.g. multiple threads can call its method without compromising internal data structure but StringBuilder is 
  not synchronized hence not thread safe.
 *  In general, you should always use StringBuilder for String concatenation and creating dynamic String unless and until you are absolutely sure that you need StringBuffer.
 
 
 
 ## String 
 
 Java designer has made it final, which means you can not extend java.lang.String class,
 this also helps to make String object Immutable.
 
 ##  Why String is final or Immutable in Java?
 
1. String Pool.


Java designer knows that String is going to be most used data type in all kind of Java applications and that's why they 
wanted to optimize from  start. One of key step on that direction was idea of storing String literals in String pool. 
Goal was to reduce temporary String object by sharing them and in order to share, they must have to be from Immutable class. 
You can not share a mutable object with two parties which are unknown to each other. Let's take an hypothetical example, 
where two reference variable is pointing to same String object.
```
String s1 = "Java";
String s2 = "Java";
```
Now if s1 changes the object from "Java" to "C++", reference variable also got value s2="C++", 
which it doesn't even know about it. By making String immutable, this sharing of String literal was possible.
In short, key idea of String pool can not be implemented without making String final or Immutable in Java.

2. Security.


String has been widely used as parameter for many Java classes, e.g. for opening network connection, 
you can pass host and port as String, for reading files in Java you can pass path of files and directory 
as String and for opening database connection, you can pass database URL as String. If String was not immutable,
a user might have granted to access a particular file in system, but after authentication he can change the PATH to 
something else, this could cause serious security issues. 

3.  Multithreading Benefits.


Since Concurrency and Multi-threading was Java's key offering, it made lot of sense to think about thread-safety of String objects.
Since it was expected that String will be used widely, making it Immutable means no external synchronization, 
means much cleaner code involving sharing of String between multiple threads. This single feature, makes already complicate, 
confusing and error prone concurrency coding much easier. Because String is immutable and we just share it between threads, 
it result in more readable code.

4. Performance and optimisation.


Now when you make a class Immutable, you know in advance that, this class is not going to change once created. 
This guarantee open path for many performance optimization e.g. caching. String itself know that, I am not going to change, 
so String cache its hashcode. It even calculate hashcode lazily and once created, just cache it. In simple world, when you 
first call hashCode() method of any String object, it calculate hash code and all subsequent call to hashCode() 
returns already calculated, cached value. This results in good performance gain, given String is heavily used in hash 
based Maps e.g. Hashtable and HashMap. Caching of hashcode was not possible without making it immutable and final, 
as it depends upon content of String itself.


## Disadvantages of string as immutable Object.

1. Since String is immutable, it generates lots of temporary use and throw object, which creates pressure for Garbage collector.
2. Making String final, as it limits its extensibility. Now, you just can not extend String to provide more functionality,





