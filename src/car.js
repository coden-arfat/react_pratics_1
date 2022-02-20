import React from "react";

class Car extends React.Component {
  constructor(props){
    super(props)
 
  } 
render()
{
return(
  <h1>
  hello i am car component
  {props.color}
  </h1>
) 
}
}
export default Car 