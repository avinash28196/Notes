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

![LifeCycle] (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
