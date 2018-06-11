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

1. initialization.

The initialization phase is where we define defaults and initial values for this.props and this.state by implementing getDefaultProps() and getInitialState() respectively.

The getDefaultProps() method is called once and cached — shared across instances — when the class is created, before any instance of the component are created, hence we can’t rely on this.props here. This method returns an object which properties values will be set on this.props if that prop is not specified by the parent component.

The getInitialState() method is also invoked once, right before the mounting phase. The return value of this method will be used as initial value of this.state and should be an object.

2. mounting.
Mounting is the process that occurs when a component is being inserted into the DOM. This phase has two methods that we can hook up with: componentWillMount() and componentDidMount().

The **componentWillMount()** method is the first called in this phase. It’s invoked once and immediately before the initial rendering occurs, hence before React inserts the component into the DOM. It’s very important to note that calling this.setState() within this method will not trigger a re-render.

The **componentDidMount()** is the second invoked in this phase, just once and immediately after React inserts the component into the DOM. Now the updated DOM is available for access, which means that this method is the best place for initializing other Javascript libraries that need access to the DOM and for data fetching operations.

3. updating



4. unmounting




