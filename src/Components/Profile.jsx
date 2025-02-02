import { useState } from "react";
const Profile= (props)=>{
    const [count,setCount]= useState(0);
     const [count2,setCount2]= useState(1);
    return (
      <div>
        <h2>Profile Functional Component</h2>
        <h3>Name:{props.Name} </h3>
        <h3>Count:{count} </h3>
        <h3>COunt2:{count2}</h3>
       <button onClick={()=> {
        setCount(count+1);
         setCount2(count2+1);
        }}>countbtn</button>
      </div>
    );
};

export default Profile;