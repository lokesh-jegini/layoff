import React ,{useState}from 'react'
import "./index.scss"

export default function About() {
  let notredndervar="lokesh"
  let [rendervar,setrendervar]=useState("if we update the value with the help of setmethod then render is possible ")
  
  const [data,setdata]=useState(1)
  const [data1,setdata1]=useState([1,2,3,4])
  const [data2,setdata2]=useState({user:"lokesh",age:25,village:"pathagunt"})
  // console.log(...data)Spread syntax requires ...iterable[Symbol.iterator] to be a function
  // console.log(...data1)
  const notrender=()=>{
    notredndervar="murlai"
    console.log(notredndervar)
  }
  const renderdata=()=>{
     setrendervar("rendervar is posbible with set method")
    
    console.log(notredndervar)
  }
   const  updatesetvlaue=()=>{

   
    // setdata2("rendervar is posbible with set method")
   
     setdata2(()=>{
      if(data2=="lll") {
        alert("updated")
      }
     })
   
   
    // setdata2(...data2,user:"murlai")--->
    // setdata2(...data2)-->keep flower bracess
    // setdata2({...data2})

    // setdata2({...data2,user:"murlai"})
    
    
  }
  return (
    <div>
      <div>About</div>
      <h1>hello</h1>
      <br/>
      <div>{data}</div>
      <div onClick={()=>{
        notrender()
      }}>not render just update vlaue for the  varible in the memory location </div>
      <div>{notredndervar}</div>
      <div onClick={()=>{
        renderdata()
      }}>{rendervar}</div>
      <p>usesate hold data in the object format</p>
      <span>name:{data2.user}</span>
      <span>age:{data2.age}</span>
      <span>village:{data2.village}</span>
      <br/>
      <br/>
      <button onClick={()=>{
         updatesetvlaue()
      }}>click to update the objet vlaue of the use state</button>
      <input type="color" onChange={(e)=>{
        document.body.style.background=e.target.value
      }}/>
      </div>
  )
}

// --------------------------------------------
// note point of 
// 1)spred operator (take entite varible value one copy) -->(spred equal to vlaue) for itterable statement)
// 2)restoperator (it is for the functionaruguments) 
// 3)destructure (for itterable statement) (for array and object)
// --------------
// usestate() hold intala vlaue to the varible
// set method hold updated vlaue the varible 

// -------------
// note update varible in javascript is differnt

// and in reactjs is differnt(when we useuseeffet and setstate)
