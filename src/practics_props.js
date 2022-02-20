import React from "react";

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
export default test_props_preant ;