//Закоментований початковий код 
//import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './App.css';
import axios from 'axios';

class App extends Component {
  handleClick() {
    //console.log('done!');
    axios.get('https://api.github.com/users/maecapozzi')//.then(response => console.log(response));
    .then(response => this.setState({
      id:
        response.data.id
    }))
  }
  
  constructor() {
    super();
    this.state = {
      id: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (<div className='button_container'>
      <button className='button' onClick={this.handleClick}>
        push me
      </button>
      <p>{this.state.id}</p>
    </div>)
  }
}
export default App;