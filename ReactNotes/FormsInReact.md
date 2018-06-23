# Forms

An input form with value = {this.state.data}. This allows to update the state whenever the input value changes. We are using onChange event that will watch the input changes and update the state accordingly.


```javascript

App.js

import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   render() {
      return (
         <div>
            <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} />
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default App;
```

```javascript


Main.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

```
When the input text value changes, the state will be updated.

![Result](https://www.tutorialspoint.com/reactjs/images/react-forms-simple.jpg)

