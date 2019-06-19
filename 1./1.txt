## static keyword 

Class variables, When you create several objects from the same class you create its own instance variable. Suppose if you need a variable 
that is common for all the instances of your class, Class variables come to rescue. How do you declare a class variable. Simple. 
By using static keyword.


#### Example:

if you consider Student object, you might have the school name common for all the students. 
Logically, it should be declared as static variable if all the students belong to the same school.


Class methods, A common use of class methods is to access class variables/fields. In the above example you could see changeName() method access schoolName static variable.
When you use static method make sure to keep in mind the caveats below.


### Warnings to use static class menthod:

* A static method can access only static data. It can not access non-static data (instance variables)
* A static method can call only other static methods and can not call a non-static method from it.
* A static method can be accessed directly by the class name and doesn’t need any object. For Example. Student.changeName()
* A static method cannot refer to this or super keywords in anyway
* A static methods in Java are resolved at compile time. Since method overriding is part of Runtime Polymorphism, so static methods can’t be overridden
* A static methods Cannot be abstract methods.



Constants, You declare constant withfinal and static modifiers. For Example, static final double PI = 3.141592653589793 If you declare constants like this it cannot be reassigned. 
The compiler turns fuming hot if you do so.


Blocks, You can declare a block using static keyword. static blocks get executed when the class is first loaded in the JVM.


static class,  It provides a compelling way of grouping elements that are only going to be used in one place, this helps to keep our code more organized and readable.

The nested class architecture is divided into two:

1. Nested classes that are declared static are called static nested classes.
2. Nested classes that are non-static are called inner classes

The main difference between these two is that the inner classes have access to all member of the enclosing class (including private), 
whereas the static nested classes only have access to static members of the outer class.

## final keyowrd 

While inheritance enables us to reuse existing code, sometimes we do need to set limitations on extensibility 
for various reasons; the final keyword allows us to do exactly that.

## final class, 

* Classes marked as final can’t be extended. 
* The final keyword in a class declaration doesn’t mean that the objects of this class are immutable. 
* If the class is final, we can’t extend it to override the method and fix the problem. In other words, we lose extensibility, one of the benefits of object-oriented programming.
* 

## final method

## final variable





