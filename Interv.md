MathWorks Interview Questions
=============================



## <a name='toc'>Table of Contents</a>

  1. [Math Questions](#math)
  1. [Programming Concepts Questions](#concepts)
  1. [Java Questions](#java)
  1. [JavaScript Questions](#javascript)
  1. [C++ Questions](#c++)
  1. [C Questions](#c)
  1. [MATLAB Questions](#matlab)
  1. [Control Systems Questions](#controlsystems)
  1. [Operating System Questions](#os)
  1. [Digital Signal Processing Questions](#signalprocessing)



####[[↑]](#toc) <a name='concepts'>Programming Concepts Questions:</a>

1. **Given a random array of numbers, how do you sort them? Select any sorting algorithm and write the pseudo code.**

```
public class Quicksort {
	public static void swap(int a[], int i, int j) {
		int tmp = a[i];
		a[i] = a[j];
		a[j] = tmp;
	}
	
	public static int partition(int a[], int left, int right) {
		int pivot = a[(left + right) / 2];
		
		while (left <= right) {
			while (a[left] < pivot) {
				left++;
			}
			
			while (a[right] > pivot) {
				right--;
			}
			
			if (left <= right) {
				swap(a, left, right);
				left++;
				right--;
			}
		}
		
		return left;
	}
	
	public static void quickSort(int a[], int left, int right) {
		int index = partition(a, left, right);
		
		if (left < index - 1) {
			quickSort(a, left, index - 1);
		}
		
		if (index < right) {
			quickSort(a, index, right);
		}
	}
	
	public static void main(String[] args) {
		int[] array = AssortedMethods.randomArray(20, 0, 20);
		AssortedMethods.printIntArray(array);
		quickSort(array, 0, array.length - 1);
		AssortedMethods.printIntArray(array);
	}
}
```

* **Implement Merge Sort with merge subroutine.**

* **Check whether a string is a palindrome or not.**

```
public class CheckStringPalindrome {
	public static boolean isPalindrome(String s) {
		String str = s.replaceAll("([^a-zA-Z]|\\s)+", "").toLowerCase();
		
		int n = str.length();
		
		if (n == 0 || n == 1)
			return true;
		
		for (int i = 0; i < n / 2; i++) {
			if (str.charAt(i) != str.charAt(n - i - 1))
				return false;
		}
		
		return true;
	}
	
	public static void main(String[] args) {
		System.out.println(isPalindrome("No, it can assess an action."));
	}
}
```

* **Given inheritance hierarchy, which of the following is valid?**
          <br>A<br>
         / \ <br>
        B   C<br>
       / <br>
      D
     
     ```
     void alpha(B *arg)
     	A* Aptr = new A;
     	B* Bptr = new B; // valid
     	C* Cptr = new C;
     	D* Dptr = new D; // valid
     ```

* **What does the following line of   code do?**
	
	```
	char *c = "Hello";
	char d[6];
	while (*c++ = *d++); 
	```  

	`char d[6]`, `d` is an array and you can not change the address of an array.  

	```
	char *c = "Hello";
	char d[6];
	int index = 0;
	while (*c++ = d[index++])
	```

* **Singleton concept.**  
	It involves only one class which is responsible to instantiate itself, to make sure it creates not more than one instance; in the same time it provides a global point of access to that instance. In this case the same instance can be used everywhere, being impossible to invoke directly the constructor each time.
	
	```
	class Singleton {
		private static Singleton instance;
		private Singleton() {
			...
		}
		public static synchronized Singleton getInstance() {
			if (instance == null)
				instance = new Singleton();
			return instance;
		}
		public static void doSomething() {
			...
		}
	}
	```

* **IPC in Linux, What is mutual exclusion, critical section, locks.**

* **What's the maximum size of a signed integer?**  
	2,147,483,647

* **Dreaded diamond inheritance problem.**  
	You have a parent class A. And you have class B and C where both inherit from A. Then, you have a class D which inherits from both B and C. It creates a diamond shape.  
	The problem with having an inheritance hierarchy is that when we instantiate an object class D, any calls to method definitions in class A will be ambiguous - because it's not sure whether to call the version of the method derived from class B or class C.  
  
	**Solution:**  
	If the inheritance from class A to both class B and class C is marked as virtual, then C++ will ensure that only one subobject of the class A will be created for every D object.

* **Why is dynamic array preferred over LinkedList.**  
	
	| Dynamic Array | LinkedList |
	|:-------------:|:----------:|
	| Need indexed or random access to elements | Don't need random access to any elements |
	| Know the number of elements in the array ahead of time | Don't know the number of elements will be on the list |
	| Memory is concern | Want to be able to insert items in the middle of list |
	|  | Need constant time to insert or delete from list |

* **What is OOPS? Why is OOP required?**  
	OOPS is a design philosophy. It stands for Object Oriented Programming System (OOPS). Everything in OOPS is grouped as self sustainable "objects". Hence, you gain reusability by means of four main object-oriented programming concepts.  
	  
	**Characteristics:**  
	* **Encapsulation** - Capability to hide data and instructions inside an object.  
	* **Inheritance** - Ability to create one object from another.
	* **Polymorphism** - The design of new classes is based on single class.
	* **Message Passing** - It is the way objects communicate with each other.
	* **Garbage Collection** - Automatic memory management that destroys objects that are no longer in use by the program.  
  
	**Benefits:**  
	* **Reusability** - You can write a program using a previous developed code.
	* **Code Sharing** - You are able to standardize the way you are programming with your colleagues.
	* **Rapid Modeling** - You can prototype the classes and their interaction through a diagram.
	
	**Drawbacks:**  
	* **Size** - Are larger than other programs, consuming more memory and disk space.  
	* **Effort** - Require a lot of work to create, including the diagramming on the planning phase and the coding on the execution phase.

* **Explain/write a recursive function.**  
	A recursive function is a function which either calls itself or is in a potential cycle of function calls.  
  
	```
	public static int Fibonacci(int n) {
		if (n == 0)
			return 0;
		if (n == 1)
			return 1;
		return Fibonacci(n - 1) + Fibonacci(n - 2);
	}
	```

* **How does a system handle recursion calls?**  
	A call stack is a data structure used by the program to store information about the active subroutines (functions or methods) in a program. The main reason for having a call stack is so that the program can keep track of where a subroutine should return control to once it finishes executing.  
	If the recursion calls does not have base case to exit, it will continuously to create new stack frames and will pile up the call stack and when that limited memory is exceeded then the stack is said to overflow, which will usually result in the program crashing.

* **What is max flow min cut algo?**

* **If two functions of O(n) complexity were multiplied/added what is the complexity of the resultant function.**  
	O(n^a . n^b) = O(n^(a+b))

* **What is a SAN? What is a NAS? What is multipathing?**

	SAN - direct attached storage presented at the bit level.<br>
	NAS - network connected and presented via a network protocol (NFS, CIFS) and is file level.<br>
	Multipathing - the ability to have redundant paths to the same storage resource. This provides redundancy in the event of a failure.

* **Complexity of converting from nfa to dfa.**

* **Difference between deterministic and non-deterministic state machines.**  
  
	| Deterministic State Machines | Non-deterministic State Machines |
	|:----------------------------:|:--------------------------------:|
	| There's exactly one state transition for every input symbol-state pair. | There can be 0 or more state transitions for every input-state pair. |
	| There are no epsilon transitions, meaning that you're not allowed to change states without consuming anything from the input. | You can have epsilon transitions. You are allowed to change states without consuming anything from the input. |

* **What is local scope and global scope?**  
	A variable's scope is the range of the script where it is visible.  
  
	| Global | Local |
	|:------:|:-----:|
	| Exists only once in a script. | Exists only within a block that it is declared in. |
	| Visible in every function. | Visible only within the local scope. |
	| Modifications to it in one function are permanent and visible to all functions. | Once that block ends, the variable is destroyed and its values lost.

* **Is binary tree and directed graph the same thing?**

* **How many different kinds of sorting algorithms are there in programming? Write bubble sort program.**  

```
public class BubbleSort {
	public static int[] bubbleSort(int[] array) {
		int temp;
		
		for (int i = 0; i < array.length; i++) {
			for (int j = 1; j < array.length; j++) {
				if (array[j - 1] > array[j]) {
					temp = array[j - 1];
					array[j - 1] = array[j];
					array[j] = temp;
				}
			}
			
			System.out.println((i + 1) + "th iteration result: " + Arrays.toString(array));
		}
		
		return array;
	}
	
	public static void main(String[] args) {
		int[] array = {9, 8, 7, 6, 5, 4};
		bubbleSort(array);
	}
}
```

####[[↑]](#toc) <a name='java'>Java Questions:</a>

1. **Difference between path and classpath.**

	| Path | Classpath |
	|:----:|:---------:|
	| Environment variable which is used to locate JDK binaries like "java" or "javac" command used to run java program and compile java source file | Environment variable used by System or Application ClassLoader to locate and load compile Java bytecodes stored in .class file |
	| To set PATH in Java you need to include JDK_HOME/bin directory in PATH environment variable | To set CLASSPATH in Java you need to include all those directory where you have put either your .class file or JAR file which is required by your Java application |
	| Cannot be overridden by any Java settings | Can be overridden by providing command line option `-classpath` or `-cp` to both "java" and "javac" commands or by using Class-Path attribute in Manifest file inside JAR archive |
	| Used by operating system to find any binary or command typed in shell | Only used by Java ClassLoaders to load class files |

* **What are applets in Java?**  
An applet is a Java program that runs in a Web browser. An applet can be a fully functional Java application because it has the entire Java API at its disposal.

* **What is JVM?**  
Java Virtual Machine (JVM) is an abstract machine which provides the runtime environment in which Java byte code can be executed.

* **How is Java platform independent?**  
The CPU executes the JVM, which is platform dependent. This running JVM then executes the Java bytecode which is platform independent, provided that you have a JVM available for it to execute upon.

* **What are JDK and JRE?**  
	**JRE:**  
	Java Runtime Environment (JRE) is the implementation of JVM and physically exists. It provides the minimum requirements for executing a Java application; it consists of the Java Virtual Machine (JVM), core classes, and supporting files.  

	**JDK:**  
	Java Development Kit (JDK) is a superset of the JRE, and contains everything that is in the JRE, plus tools such as the compilers and debuggers necessary for developing applets and applications.

* **What is a package?**  
A package can be defined as a grouping of related types (classes, interfaces, enumerations, and annotations) providing access protection and name space management.

* **What are generics?**  
Java Generic methods and generic classes enable programmers to specify with a single method declaration, a set of related methods or, with a single class declaration, a set of related types respectively.

* **What are Java Beans?**  
Java Beans is an object-oriented programming interface that lets you build re-useable applications or program building blocks called components that can be deployted in a network on any major operating system platform.

* **What are wrapper classes and what are the advantages?**  
A wrapper class wraps (encloses) around a data type and gives it an object appearance. Wherever, the data type is required as an object, this object can be used. Wrapper classes include methods to unwrap the object and give back the data type.  
  
	**Advantages:**  
	* To convert simple data types into objects, that is to give object form to a data type.
	* To convert strings into data types.

* **Can you force garbage collection in Java? How?**  
No. Our best option is to call System.gc() which simply is a hint to the garbage collector that you want it to do collection. There is no way to force an immediate collection as the garbage collector is non-deterministic.

* **Is Java pass by value or reference? Why? How do you pass objects?**  
Java is always pass-by-value. Java passes objects as references and those references are passed by value.  
  
	```
	public static void main(String[] args) {
		Dog aDog = new Dog("Max");
		foo(aDog);
		if (aDog.getName().equals("Max")) {
			System.out.println("Java passes by value");
		} else if (aDog.getName().equals("Fifi")) {
			System.out.println("Java passes by reference.");
		}
	}
	
	pubic static void foo(Dog d) {
		d.getName().equals("Max");
		d = new Dog("Fifi");
		d.getName().equals("Fifi");
	}
	```

* **final, finally, finalize.**  
**final:** - Can be used for variable, method or class.  
**finally:** - Used in exception handling and the block is always executed.  
**finalize:** - Used in garbage collection. It is invoked just before the object is garbage collected. Can be used to perform any cleanup processing.

* **When does finally does not work in Java.**  
finally block will not be executed if program exits(either by calling System.exit() or by causing a fatal error that causes the process to abort).

* **Exit condition for the Fibonacci Series.**  

	```
	public static int Fibonacci(int n) {
		if (n == 0)
			return 0;
		if (n == 1)
			return 1;
		return Fibonacci(n - 1) + Fibonacci(n - 2);
	}
	```

* **Difference between String and StringBuffer.**  
  
	| String | StringBuffer |
	|:------:|:------------:|
	| Read only and immutable | Can be modified |
	| Slower | Faster |

* **What is overloading, overriding?**  

* **What is the use of destructor?**  
To free memory when the object is no longer needed or to prevent memory leak.

* **What is a static variable?**  
	A static variable is one that's associated with a class, not objects of that class.

* **Use of abstract.**  
	Abstract classes permit providing a partial set of default implementations of methods in a class. Since they're incomplete, they can't be instantiated and used as they stand, but they can be subclassed to add the missing details in a way that's specific to that particular implementations, and this subclasses can be instantiated.

* **If a default constructor is made private, would the implementation change and how?**  
	* The constructor can only be accessed from static factory method inside the class itself. Singleton can also belong to this category.  
	* A utility class, that only contains static methods.

* **Primitive data type like int, float, and object data type difference.**

	| Primitive Data Type | Object Data Type |
	|:-------------------:|:----------------:|
	| Value of variable is stored in the memory location assigned to the variable | Variable of a class type only stores the memory address of where the object is located |
	| Fixed size when declared | Can be of any size |


* **What is mutex?**  
	Rubber chicken situation.

* **What is critical section?**  
	Critical section is a piece of code that accesses a shared resource (data structure or device) that must not be concurrently accessed by more than one thread of execution. A critical section will usually terminate in fixed time, and a thread, task or process will have to wait a fixed time to enter it (aka bounded waiting). Some synchronization mechanism is required at the entry and exit of the critical section to ensure exclusive use, for example semaphore.


* **What is postorder, preorder, and inorder?**  
	**Pre-order:**  
	1. Display the data part of root element (or current element).
	2. Traverse the left subtree recursively.
	3. Traverse the right subtree recursively.
	
	**In-order:**
	1. Traverse the left subtree recursively.
	2. Display the data part of root element (or current element).
	3. Traverse the right subtree recursively.
	
	**Post-order:**
	1. Traverse the left subtree recursively.
	2. Traverse the right subtree recursively.
	3. Display the data part of root element (or current element).

* **String manipulation question in which a string containing one or more * was given as input and I have to develop an algorithm for removing the * character and a character succeeding and preceding the * character.**

* **Difference between .equals and ==.**  
	`==` compares two references (tests whether the two operands refer to the same object).  
	`.equals` compares the state of the objects (value).

* **What is public static void main(String[] args) in Java?**  
	`public` means can be called from anywhere.
	`static` means it does not belong to a specific object.
	`void` returns no value.
	`main` function name.
	`String[]` array of string.
	`args` name of the string array.

* **Time complexity of matrix multiplication.**  
	Naive algorithm - O(n^3)  
	Better algorithm - O(n^2)

* **If you were writing a function in a calculator to compute sine/cosine/tangent, and all you had was basic math operations (+, -, *, /) how would you do it? You cannot use lookup tables.**

```
public class TrigonometricFunctions {
	public static double sin(double radians) {
		double term = 1.0;
		double sum = 0;
		
		for (int i = 1; term != 0.0; i++) {
			term *= (radians / i);
			
			if (i % 4 == 1)
				sum += term;
			
			if (i % 4 == 3) 
				sum -= term;
		}
		
		return sum;
	}
	
	public static double cos(double radians) {
		double term = 1.0;
		double sum = 1.0;
		
		for (int i = 1; term != 0.0; i++) {
			term *= (radians / i);
			
			if (i % 4 == 0)
				sum += term;
			
			if (i % 2 == 0 && i % 4 != 0)
				sum -= term;
		}
		
		return sum;
	}
	
	public static double tan(double radians) {
		return sin(radians) / cos(radians);
	}
	
	public static void main(String[] args) {
		double angle = 23;
		double radian = (double) ((angle * Math.PI) / 180);
		System.out.printf("%.8f %n", sin(radian));
		System.out.printf("%.8f %n", cos(radian));
		System.out.printf("%.8f %n", tan(radian));
	}
}
```

* **What is util, swing..?**  
	Packages or libraries that contains collections framework that you could use.

* **Why Java runs slower than C?**  
	C++ or C program is compiled into assembly, which is then compiled into binary where the computer can understand an execute the instructions right away.
	Java code is converted into an intermediate language that can be understood by every Java-enabled machine. Because this is an extra thing that the machine running a program must do to execute the same program logic, the program runs slower because more has to happen for the program logic to get executed.

* **Why Java have hashmap, but C does not?**

* **Difference between dot product and cross product.**  

	| Dot Product | Cross Product |
	|:-----------:|:-------------:|
	| v . v = scalar | v x v = vector |
	| u . v = 0 means u and v are at right angles | u x v = 0 means that u and v are parallel |  
	| Is obtained by multiplying the corresponding entries and then summing the products | Is calculated using a different method |

* **Implement a fraction class with add multiplication subtraction functionalities.**

* **Implement depth first search.**

```
private static int[][] adjacencyMatrix;
private static boolean[] visited;

public static void dfs(int root) {
	Stack<Integer> s = new Stack<Integer>();
	s.push(root);
	visited[root] = true;

	while (!s.isEmpty()) {
		int n = s.peek();
		int child = getUnvisitedChildNode(n);

		if (child != -1) {
			visited[child] = true;
			s.push(child);
		} else {
			s.pop();
		}
	}
}

private static int getUnvisitedChildNode(int n) {
	for (int i = 0; i < adjacencyMatrix[n].length; i++) {
		if (adjacencyMatrix[n][i] == 1 && !visited[i]) {
			return i;
		}
	}

	return -1;
}
```

* **Difference between a directed acyclic graph and binary search tree.**

* **How to implement queue using stacks?**

* **Design a class structure for your department in college. What kind of methods will you have to extract specific information.**

####[[↑]](#toc) <a name='javascript'>JavaScript Questions:</a>

1. **Difference between document.ready() and window.onload().**
	| document.ready() | window.onload() |
	|:----------------:|:---------------:|
	| Occurs after the HTMl document has been loaded | Occurs later, when all content also has been loaded |
	| Event is specific to jQuery | Standard event in the DOM |

* **What is cache?**  
	Cache is a place to store something temporarily in a computing environment. It is used so that active data can be accessed very fast.

* **What is SOAP?**  
	Simple Object Access Protocol (SOAP) is a messaging protocol that allows programs that run on disparate operating systems to communicate using HTTP and its XML.

* **What is REST?**  
	Representational State Transfer (REST) is an architecture style for designing networked applications. The idea is that, rather than using complex mechanism such as COBRA, RPC, or SOAP to connect between machines, simple HTTP is used to make calls between machines.  
	REST applications use HTTP requests to post data (create, update) read data (make queries) and delete data.

* **Difference between HTML and XML?**
	
	| HTML | XML |
	|:----:|:---:|
	| ML for displaying web pages in a browser | ML defines a set of rules for encoding documents that can be ready by both humans and machines |
	| Designed to display data with focus on how the data looks | Designed with focus on storing and transporting data |
	| Display a web page | Transport data between the application and the database |
	| Predefined tags | Custom tags can be created |
	| Cannot preserve white space | Preserves white space |
	

####[[↑]](#toc) <a name='c++'>C++ Questions:</a>

1. **What is polymorphism?**  
	Poly - many
	Morph - change of form  
	Is the ability to present the same interface for differing underlaying forms (data types).

* **What is a pointer?**  
	A variable whose value is the address of another variable (direct address of the memory location). 

* **What is a void pointer?**  
	A special type of pointer that can be pointed at objects of any data type.

* **What is a smart pointer?**  
	Is a class that wraps a "bare" C++ pointer to manage the lifetime of the object being pointed to. It defines a policy as to when the object is destroyed.

* **What's the significance of a null pointer?**
	C language does not specify an implicit initialization for objects for automatic storage duration. To ensure that the address to which pointer points is valid its 	explicitly initialized to the null pointer.

* **What is the default property for a variable and a function defined in a class (public, private or protected)?**

* **What is virtual constructor?**  
	An intermediate object with a virtual method who's role is to create the object in question. Because the method is virtual and it's purpose is to create an object, it is named virtual constructor.
	
* **What is virtual destructor?**  
	It is a destructor that is declared virtual. Destructors are used to deallocate memory and do some other cleanup for a class object and it's class members whenever an object is destroyed.
	
* **Why virtual constructor is wrong and virtual destructor is necessary?**  
	Virtual functions basically provide polymorphic behavior. To construct and object, a constructor needs the exact type of the object it is to create. Also, you cannot have a pointer to a constructor.  
	Virtual destructor is necessary to call all the destructor of the derived classes.

* **What is virtual function?**  
	Is a function or method whose behavior can be override within an inheriting class by a function with the same signature. Virtual function allows a program to call methods that don't necessarily even exist at the moment the code is compiled.
	
* **What is pure virtual functions?**  
	Is a virtual function that is required to be implemented by a derived class if that class is not abstract.

* **Can you define a function in c++ structure?**
	Yes, a struct is identical to a class except for the default access level (member-wise and inheritance-wise). Every functionality supported by a class is consequently supported by a struct.

* **How do you concatenate two strings?**

* **Invocation order of constructors and destructors in C++ inheritance.**  
	* Construction always starts from the base class. If there are multiple base classes then, it starts from the left most base. (If there is a virtual inheritance)  
	* Then it comes the turn for member fields. They are initialized in the order they are declared.
	* At the last the class itself is constructed.
	* The order of destructor is exactly reversed

* **Exception handling.**

* **Advantages of OOP programming over procedure programming.**  
	* **Modularity:**
		The source code for a class can be written and maintained independently of the source code for other classes. Once created, an object can be easily passed around inside the system.
	* **Information-hiding:**  
		By interacting only with an object's methods, the details of its internal implementation remain hidden from the outside world.  
	* **Code reuse:**  
		If a class already exists, you can use objects from that class in your program. This allows programmers to implement/test/debug complex, task-specific objects, which you can then use in your own code.
	* **Easy debugging:**  
		If a particular object turns out to be a problem, you can simply remove it from your application and plug in a different object as its replacement. This analogous to fixing mechanical problems in the real world. If a bolt breaks, you replace it, not the entire machine.

* **How to have an instance of a class if the constructor is private?**  
	It needs to have a public method that provides an instance of the class.

* **If class foo has private data types and private methods only, class bar inherits from class foo. How can you access the data types?**  
	You cannot access the private data types. You need to have public getters and setters to access the private data types.

* **Explain these pieces of code.**

	```
	int arr[] = {1, 2, 3, 4};
	for (int i = 0; i < 4; i++) {
		cout << *(arr + i) << " ";
	}
	// output : 1 2 3 4
	```

	```
  	main() {
  		const float pi = 3.14;
  		pi = 5.40;
  		printf('%f', &pi);
  	}
  	// error because pi is a constant
  	```
  	
  	```
  	int main(void) {
  		int a = 5;
  		float b = a / 2;
  		printf("b=%f", b);
  		return 0;
  	}
  	// output : b=2.000000
  	```
  	
  	```
  	#include <iostream>
  	using namespace std;
  	
  	int main() {
  		int arr[5] = {11, 22, 33, 44, 55};
  		int i;
  		
  		for (int i = 0; i < 5; i++) {
  			cout << *(arr + i);
  			cout << *(arr++); // error : lvalue required as increment operand
  		}
  		
  		return 0;
  	}
  	```

* **Difference between #define and constant.**  
	
	| define | constant |
	|:------:|:--------:|
	| The preprocessor replaces those macros by their body before the compiler even sees it | Declares an actual variable |

* **Difference between structures and classes?**
	
	| structures | classes |
	|:----------:|:-------:|
	| Members of struct are public by default | Members of class are private by default |
	| Structs are public by default | Classes are private by default |

* **How do you append a string in C++?**

* **Purpose of private constructor in C++?**
	* Restricting object creation.
	* For singleton patterns.
	* Restricting certain type of constructor (copy constructor, default constructor).

* **What is an abstract class and its significance.**  
	To define a common protocol for a set of concrete subclasses. This is useful when defining objects that share code, abstract ideas.  
	The main idea here is code reuse and proper partitioning across classes.

* **Runtime polymorphism.**
	C++ allows binding to be delayed till run time. When you have a function with same name, equal number of arguments and same data type in same sequence in base class and derived class and a function call of form : base_class_type_ptr -> member_function(args); will always call base class member function. They keyword `virtual` on a member function in base class indicates to the compiler to delay the binding till run time.

* **Static keyword.**

* **What data structure would you use and how would you implement a sparse matrix?**

* **What is #include?**  
	Logically that copy/paste is exactly what happens. It causes the replacement of that directive by the entire contents of the source file identified by the specified sequence between the `"` delimiters.

* **What is the significance of angular brackets <>?**  
	Used to specify the type, as parameters.

* **Can you perform arithmetic operations on void pointers?**  
	No because the compiler doesn't know the size of the item(s) the void pointer is pointing to.

####[[↑]](#toc) <a name='c'>C Questions:</a>

1. **What is private function?**

* **What is hf = gca;**

* **What is event function call back?**

* **How to access data members of a structure?**

* **What are cell arrays?**

* **C1 = {}, C2 = {}. What is C1()? What is C1{}?**

* **What is the code doing?**

	```
	mystruct = struct('field1', {1, 2, 3} ... 'field2', {4, 5, 6s});
	```

* **File operations in C.**

* **Null Pointer.**

* **Auto variable and register variable?**

* **How do you find whether a number is even or odd?**

* **If you are using a mod operator, what are the advantages and disadvantages of it? Elaborate. Is there any other approach?**

* **Why do we use constants in C?**

* **What is malloc and calloc? What's the difference?**

* **What is the difference between static and dynamic memory allocation?**

* **Difference between <> and " ".**

* **What is the procedure to find an even number, other than the mod operator.**

* **What is the limitation of mod operator in C.**

* **What is a UNION datatype.**

* **Volatile keyword.**

* **Reentrant code.**

* **typedef vs #define.**

* **typecasting.**

* **What precautions one must take while using pointers.**

* **Code to draw circle in C?**

* **What is the difference between malloc and new?**
	Malloc returns a void pointer.<br>
	New returns a pointer to the type of object you allocated space for.

* **What is pure virtual function?**

* **Difference between using #include and <stdio.h> and "stdio.h".**

* **What is the difference between CRect c; and CRect c(), when CRect is a class?**

* **How to optimize the following code:**

	```
	a[i] = b[c[i]];
	```

* **Write a program to reverse a string in C.**


####[[↑]](#toc) <a name='matlab'>MATLAB Questions:</a>

1. **Plot scattered point with given properties.**

	```
	x = linspace(0, 3*pi, 200);
	y = cos(x) + rand(1, 200);
	scatter(x, y)
	```

* **What is primary function and subfunction?**  
	**Primary Function**  
	The main function in a class or file.  

	**Sub Function**  
	Need a function that useful or being used within the primary function only.

* **What is the difference between nested function and subfunction?**

	| Nested function | Sub function |
	|:---------------:|:------------:|
	| Literally defined in the middle of another function and requires end statements | Defined separate from the primary function |
	| Can access and modify the variables of the function in which they are nested | Cannot access and modify the variables of the primary function |


* **Difference between A.' and A'**  

* **MatLab code to clear workspace variable?**

```
clear all
```

* **There are 100 variables in the workspace. How to delete all variables except 2?**

```
clearvars -except myVars
```

* **MatLab code for matrix concatenation?**

```
a = [ 10 12 23; 14 8 6; 27 8 9 ]
b = [ 12 31 45; 8 0 -9; 45 2 11 ]
c = [a, b]
d = [a; b]
```

```
c =
	10	12	23	12	31	45
	14	8	6	8	0	-9
	27	8	9	45	2	11

d =
	10	12	23
	14	8	6
	27	8	9
	12	31	45
	8	0	-9
	45	2	11
```

* **How to find an element in a matrix.**

```
[I, J] = find(Matrix == value)
```

* **What does '@' symbol mean in MatLab and where do we use it?**  
	It is a function handle. It is a MATLAB value that provides a means of calling a function indirectly.

* **Difference between cell array and structure in MatLab?**
	
	| Cell Arrays | Structure Arrays |
	|:-----------:|:----------------:|
	| Contain data in cells that you access by numeric indexing | Contain data in fields that you access by name |

* **Meaning of @, %, ~.**
	* **@ - ** Function handle.
	* **% - ** Denotes a comment; it indicates a logical end of line.
	* **~ - ** Comparing arrays for unequal values, finding the logical NOT of an array, and as a placeholder for an input or output argument you want to omit from a function call.

* **Difference between A^2, A.^2.**  
	A.^2 is element wise operation.  
	A^2 is a matrix multiplication.

* **A = 1:1:100; find every third elements.**

* **A = 1:1:100; find all elements divisible by 5.**

* **What's path meaning? Used for?**

* **What is the exclamation mark in MatLab?**  
	Indicates that the rest of the input line is issued as a command to the operating system.

* **Difference between function and scripts.**  
	
	| Function | Scripts |
	|:--------:|:-------:|
	| More flexible and more easily extensible | Not flexible and not easily extensible |
	| Have their own workspace, separate from the base workspace | Only has the base workspace and will overwrite the value |

* **Removing elements divisible by 5 in a vector in MatLab?**

```
A = A(rem(A, 5) ~= 0);
```

* **Cross product of two vectors?**

```
A = randi(15, 3, 5);
B = randi(25, 3, 5);
C = cross(A, B);
```

* **Delete a row or column of a matrix.**

```
C(:, matrix_column) = [] // delete a column
C(matrix_row, :) = [] // delete a row
```

* **How do you determine a variable type in MatLab?**

```
isa(input, obj, className)
isa(pi, 'double')
```


* **How will you pull out the first rows of a 3x3 matrix?**

```
A = B(1,:)
```

* **Give 2 different ways to access an element in a matrix.**

```
A(index); // first way
A(row, column); // second way
```

* **What command would you use to get 2 different axes on the same figure?**
	A(2, 1) and A(4).

* **Is MatLab column specific or row specific?**  
	MATLAB stores data in a column-major order.

* **How do you preserve MatLab settings across sessions?**  
	* Home Tab > Environment > Click on Preferences
	* Change settings and click Apply OK.

* **What does A' do? How do you take transpose of a matrix in MatLab?**

```
B = transpose(A);
B = A.'
```

* **What is the difference between * and .*?**

	| * | .* |
	|:-:|:--:|
	| Vector or matrix multiplication | An element wise multiplication |
	
	```
	a = [1; 2];
	b = [3 4];
	a*b // matrix multiplication
	ans =
		3	4
		6	8
	a.*b.'
	ans =
		3
		8
	```

* **How do you take inverse of a matrix in MatLab?**

```
inv(matrix)
```

* **What will be the output of A(3) = 1?**

```
A =
	0	0	1
```

* **Output of A(:), when A is a matrix?**  
	Shows the elements of matrix in one column.

* **What is the output if a matrix is printed like A = [1 2 3; 2 3 4; 1 4]**

```
Error using vertical
Dimensions of matrices being concatenated are not consistent
```

* **How to plot two curves on different on coordinate systems in the same figure using MatLab?**

```
x1 = 0:0.1:40;
y1 = 4.*cos(x1)./(x1+2);
x2 = 1:0.2:20;
y2 = x2.^2./x2.^3;

figure
line(x1,y1,'Color','r')
ax1 = gca; % current axes
ax1.XColor = 'r';
ax1.YColor = 'r';

ax1_pos = ax1.Position; % position of first axes
ax2 = axes('Position',ax1_pos,...
    'XAxisLocation','top',...
    'YAxisLocation','right',...
    'Color','none');
    
line(x2,y2,'Parent',ax2,'Color','k')
```

* **What are mex functions?**  
	MEX functions are functions written in different languages such as C, C++, or Fortran.

* **Where are global and persistent variables stored?**  
	Global variables are stored in global workspace.  
	Persistent variables are stored in local workspace.

* **How would you reload workspace variables on MatLab startup (check out startup.m and finish.m online).**

* **Suppressing warnings in MatLab, private functions.**

* **Write a program to draw an arc starting at some point on the y-axis. Radius is given and from the given information it was also possible to find the angle of the arc with the origin, starting from a point on the y-axis and drawn clockwise.**

* **Defining variables in functions and trying to access them from MatLab command prompt as though they were workspace variables.**

* **How do you define your own function in MatLab and save it in the list of predefined functions.**

* **Operators in MatLab?**

* **Where are the help documents stored in MatLab?**


####[[↑]](#toc) <a name='controlsystems'>Control Systems Questions:</a>

1. **Explain lead and lag compensators.**

* **Linearize the system.**

* **Find the Transfer function from the state space equation.**

* **Given x1 and x2 dot, find the Lyapunov equation.**

####[[↑]](#toc) <a name='os'>Operating System Questions:</a>

1. **What is RTOS?**

* **Soft vs Hard RTOS?**

* **Scheduling? Examples of scheduling?**

* **Priority inversion?**

* **Embedded communication method examples?**

* **What are presses?**

* **What is the difference between process and thread?**

* **What is virtual memory?**

####[[↑]](#toc) <a name='signalprocessing'>Digital Signal Processing Questions:</a>

1. **Difference between discrete and continuous delta function.**

* **FIR vs IIR**

* **The sampling frequency for 3cos(600*pi*t) + 2cos(1800*pi*t)**

* **Nyquist Frequency Theorem.**

* **Sampling Theorem.**

* **Z-Transforms**

* **h[n] = [1, 2, 3, 4, 5] i/p frequency = 100HZ, system is LTI. What is the o/p frequency?**

* **Same i/p frequency, now h[n] = [1, 4, 9, 16, 25]. What is the o/p frequency?**

* **What is the relationship between bandwidth and time duration?**

* **Given a signal spectrum that is valid in range of -pi/2 to pi/2. What is the range of frequency when the signal is oversampled by a factor of 4?**

* **What is the relationship between Discrete Fourier Transform and Z-Transform?**

* **y[n] = x[n^2]. y(n) = x(n^3). System Stable? Casual? Linear?**

* **Impulse response h[n] = 9*n*u(n), system stable?**

* **h[n] = [4, 0, 1, 0, 2], arrow on second element, casual?**

* **What is convolution? Difference between convolution and correlation?**

* **Difference between DFT and DTFT? Which one is suitable for computers?**

* **Difference between DFT and FFT?**

* **Aliasing, given an example of wheel with pokes.**

* **Connection between DTFT and Z-Transform, the expect z = e^(jw)**

* **ROC of Z-Transform.**

* **Determine if a system is time-invariant or invariant.**

* **Given x(n) and y(n), determine if it's FFR or IIR.**

* **Stable system, casual system.**

* **What is f0 in Nequist Theory?**

* **What is continuous time system? What is Discrete time system? How do you convert one to the other**

* **What is an LTI system? What is causality?**

* **What are random processes?**

Tech


* **What is PSD? What does PSD of white noise look like?**











