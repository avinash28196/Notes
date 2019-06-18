## Introduction 

Comparisons in Java are quite easy – until they’re not.

When working with custom types, or trying to compare objects that aren’t directly comparable, we need to make use of a comparison strategy. 
We can build one simply, but making use of the Comparator or Comparable interfaces.

Lets take an example of a football team – where we want to line up the players by their rankings.

```java
public class Player {
    private int ranking;
    private String name;
    private int age;
     
    // constructor, getters, setters  
}

```

Next, let’s create a PlayerSorter class to create our collection and make an attempt to sort it using Collections.sort:

```java

public static void main(String[] args) {
    List<Player> footballTeam = new ArrayList<>();
    Player player1 = new Player(59, "John", 20);
    Player player2 = new Player(67, "Roger", 22);
    Player player3 = new Player(45, "Steven", 24);
    footballTeam.add(player1);
    footballTeam.add(player2);
    footballTeam.add(player3);
 
    System.out.println("Before Sorting : " + footballTeam);
    Collections.sort(footballTeam);
    System.out.println("After Sorting : " + footballTeam);
}

```

Here, as expected, this results in a compile-time error:

```

The method sort(List<T>) in the type Collections 
  is not applicable for the arguments (ArrayList<Player>)
  
```

## Comparable

Comparable is an interface defining a strategy of comparing an object with other objects of the same type.
This is called the class’s “natural ordering”.
Natural Ordering Meaning, numeric order is natural order for numbers, alphabetic order is natural order for String and chronological 
order is natural for dates.

Accordingly, in order to be able to sort – we must define our Player object as comparable by implementing the Comparable interface:

```java

public class Player implements Comparable<Player> {
     
    //...
    @Override
    public int compareTo(Player otherPlayer) {
        return (this.getRanking() - otherPlayer.getRanking());
    }
}

```

#### The sorting order is decided by the return value of the compareTo() method.

The method returns a number indicating whether the object being compared is less than, 
equal to or greater than the object being passed as an argument.

```
Before Sorting : [John, Roger, Steven]
After Sorting : [Steven, John, Roger]
```


## Comparator

To create a Comparator, we have to implement the Comparator interface.

```java
public class PlayerRankingComparator implements Comparator<Player> {
  
    @Override
    public int compare(Player firstPlayer, Player secondPlayer) {
       return (firstPlayer.getRanking() - secondPlayer.getRanking());
    }
}
```

Similarly, we can create a Comparator to use the age attribute of Player to sort the players:

```java
public class PlayerAgeComparator implements Comparator<Player> {
    @Override
    public int compare(Player firstPlayer, Player secondPlayer) {
       return (firstPlayer.getAge() - secondPlayer.getAge());
    }
}


```

##  Comparators in Action

Let’s modify our PlayerSorter by introducing a second argument to the Collections.
sort method which is actually the instance of Comparator we want to use.

Using this approach, we can override the natural ordering:

```java
PlayerRankingComparator playerComparator = new PlayerRankingComparator();
Collections.sort(footballTeam, playerComparator);
```

Now, let’s run our PlayerRankingSorter to see the result:

```
Before Sorting : [John, Roger, Steven]
After Sorting by ranking : [Steven, John, Roger]
```

If we want a different sorting order, we only need to change the Comparator we’re using:

```java
PlayerAgeComparator playerComparator = new PlayerAgeComparator();
Collections.sort(footballTeam, playerComparator);
```

Now, when we run our PlayerAgeSorter, we can see a different sort order by age:

```
Before Sorting : [John, Roger, Steven]
After Sorting by age : [Roger, John, Steven]
```

## Comparator Vs Comparable

The Comparable interface is a good choice when used for defining the default ordering or, in other words, if it’s the main way of comparing objects.

Then, we must ask ourselves why use a Comparator if we already have Comparable?

There are several reasons why:

* Sometimes, we can’t modify the source code of the class whose objects we want to sort, thus making the use of Comparable impossible.
* Using Comparators allows us to avoid adding additional code to our domain classes.
* We can define multiple different comparison strategies which isn’t possible when using Comparable



| Comparable                                                                                                                                               | Comparator                                                                                                                                                         |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Comparable provides a single sorting sequence.  In other words, we can sort the collection on the basis of a single element such as id, name, and price. | The Comparator provides multiple sorting sequences. In other words, we can sort the collection on the basis of multiple elements such as id,  name, and price etc. |
| Comparable affects the original class, i.e., the actual class is modified.                                                                               | Comparator doesn't affect the original class, i.e., the actual class is not modified.                                                                              |
| Comparable provides compareTo() method to sort elements.                                                                                                 | Comparator provides compare() method to sort elements.                                                                                                             |
| Comparable is present in java.lang package.                                                                                                              | A Comparator is present in the java.util package.                                                                                                                  |
| We can sort the list elements of Comparable type by Collections.sort(List) method.                                                                       | We can sort the list elements of Comparator type by Collections.sort(List, Comparator) method.                                                                     |
