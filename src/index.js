import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Car from './car'
// import test_props_preant from './practics_props'
function test_props_child(props){
  return <p>hello {props.name}</p>;
  
}
function test_props_preant(){
  return(
<>
<h1>
      hello i am from test_props_preant
    </h1>
    <test_props_child name='arfat'/>
</>
    
  )
}
ReactDOM.render(
 <test_props_preant /> ,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
