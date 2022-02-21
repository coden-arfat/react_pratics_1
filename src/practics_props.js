import React from "react";

function Card(props){
  return(
    <div className="card">
  <h2>{props.item}</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores asperiores repudiandae nisi, sunt esse ipsa sit. Delectus dolores eius unde doloremque, in error provident blanditiis autem similique minus consequuntur.</p>
</div>
  )

}
function Test_props_child(props){
   const list = props.name
   const list_all = list.map((i)=>{
     return <li><Card item={i}/></li>
   })
  return (<p>{list_all}</p>)
  }
function Test_props_preant(){
  let persaon = ['arfat',17,'male']
  return(
<h1>
      hello i am from test_props_preant
      <Test_props_child name={persaon}/>
</h1>  
  )
}

export default Test_props_preant ;