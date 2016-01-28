import React from 'react';
import ReactDom from 'react-dom';

// Class component can have state
class App extends React.Component {
    render(){
        let txt = this.props.txt
        return <h1>{txt}</h1>
    }
}

//define prp types
//can also ser req prop.
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

//set default prop values
//can get overwritten by template
App.defaultProps = {
    txt: 'this is the defauklt'
}

//stateless function components | can't have state
// const App = () => <h1>Hello Word</h1>

ReactDom.render(
    <App cat={5} txt="this is the props text new value" />, document.getElementById('app')
);


// export default App 