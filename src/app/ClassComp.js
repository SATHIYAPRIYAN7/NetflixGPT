 import React, { useState } from "react";

// class ClassComp extends React.Component{
   
//     constructor(props){
//         super(props);

//         this.state={
//             count:1,
//             count2:2
//         }
//         console.log("constructor")
//     }
//     componentDidMount(){
//         console.log("compdidmount")
//     }
//     componentDidUpdate(){
//         console.log("update");
//     }
 
//     render(){
//         console.log("render");
//      return(
//         <>
//         <h1>Iam from Class components</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={()=>{
//             this.setState({
//                 count: this.state.count+1
//             })
//         }}>click</button>
//         </>
//      )
         
//     }
// }

// export default ClassComp;
function Appp({title,handleClick}){
  const [isVis,setIsVis]=useState(false)
    return(
         <>
         <h1>{title}</h1>
         <button onClick={handleClick(setIsVis,isVis)}>show</button>
         {isVis && <p>ajfabshbfhyfgyguygwegyhwiefhwbefk</p>}
         </>
         )
  }

  export default Appp;