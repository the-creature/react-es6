import React from 'react';
import ReactDom from 'react-dom';

// Class component can have state
class App extends React.Component {
    constructor() {
        super();

        this.state = { 
            text: 'this is text',
            cat: 0
        }
    }

    update(e) {
       this.setState({ text: e.target.value});  
    }

    render(){
        // let txt = this.props.txt
        // return <h1>{txt}</h1>
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)} />
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}

//define prp types
// //can also ser req prop.
// App.propTypes = {
//     txt: React.PropTypes.string,
//     cat: React.PropTypes.number.isRequired
// }

// //set default prop values
// //can get overwritten by template
// App.defaultProps = {
//     txt: 'this is the defauklt'
// }

// //stateless function components | can't have state
// // const App = () => <h1>Hello Word</h1>

// ReactDom.render(
//     <App cat={5} txt="this is the props text new value" />, document.getElementById('app')
// );


export default App 