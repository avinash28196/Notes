# When is it important to pass props to super(), and why?


https://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e


There is only one reason when one needs to pass props to super():

Passing:

```javascript
class MyComponent extends React.Component {    
    constructor(props) {
        super(props)

        console.log(this.props)
        // -> { icon: 'home', … }
    }
}
```

Not Passing:

```javascript
class MyComponent extends React.Component {    
    constructor(props) {
        super()

        console.log(this.props)
        // -> undefined

        // Props parameter is still available
        console.log(props)
        // -> { icon: 'home', … }
    }

    render() {
        // No difference outside constructor
        console.log(this.props)
        // -> { icon: 'home', … }
    }
}
```

Note that passing or not passing props to super has no effect on later uses of this.props outside constructor. That is render, shouldComponentUpdate, or event handlers always have access to it.


