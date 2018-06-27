# Components
Components are the heart and soul of React.

```javascript
// Create a component named MessageComponent
var MessageComponent = React.createClass({
  render: function() {
    return (
      <div>{this.props.message}</div>
    );
  }
});

// Render an instance of MessageComponent into document.body
ReactDOM.render(
  <MessageComponent message="Hello!" />,
  document.body
);
```
Create a new component class using React.createClass. Components have one requirement; they must implement render, a function that tells the component what to... render. I honestly couldn't think of another word.
## NOTE
Why do we need the parentheses around the return statement (line 3)? This is because of JavaScript's automatic semicolon insertion. Without the parentheses, JavaScript would ignore the following lines and return without a value. If the JSX starts on the same line as the return, then parentheses are not needed.
## Props
Props are half of what make React components special. (Don't worry. I won't spoil the other half until later.)

In fact, you've already been introduced to props. The JSX attributes you were setting earlier, like className, were props! When a component is rendered, it can access its "props" using this.props. In the code above, the Message component uses this.props.message.
