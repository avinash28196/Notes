# Hello World!


```javascript

import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
```
```
<View><Text>Hello world!</Text></View>. This is JSX - a syntax for embedding XML within JavaScript. 
Many frameworks use a special templating language which lets you embed code inside markup language. 
In React, this is reversed. JSX lets you write your markup language inside code. It looks like HTML on the web, 
except instead of web things like <div> or <span>, you use React components.
In this case, <Text> is a built-in component that just displays some text and View is like the <div> or <span>.
```
### Components

So this code is defining HelloWorldApp, a new Component. When you're building a React Native app, you'll be making new components a lot. Anything you see on the screen is some sort of component. A component can be pretty simple - the only thing that's required is a render function which returns some JSX to render.
