import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>hello world</h1>
    <Header/>
    </div>
    
  );

}
function someStuff(){
  return (
<h1 className='someStuff'> hello i am a new compontent </h1>

  );
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="mydiv"></div>
      </div>
    );
  }
}

export default App;
