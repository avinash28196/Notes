# Overview

React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. To define a React component class, you need to extend React.Component

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
The only method you must define in a React.Component subclass is called render(). All the other methods described on this page are optional.


# The Component Lifecycle

Each component has several “lifecycle methods” that you can override to run code at particular times in the process. 

![LifeCycle](https://github.com/avinash28196/Notes/blob/master/ReactNotes/Images/Screen%20Shot%202018-06-11%20at%207.02.17%20PM.png)

Basically all the React component’s lifecyle methods can be split in four phases: 

1. initialization
2. mounting
3. updating
4. unmounting


