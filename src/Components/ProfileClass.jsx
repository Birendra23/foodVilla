import React from "react";
class Profile extends React.Component {
// constructor is called automatically when the class is instantiated and hence it is the best place to create a state.
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name: "birendra pratap singh",
        location :" Dummy Location",
            },
    }
    //console.log("child constructor");
  }
  componentDidMount() {
   this.timer = setTimeout(() =>{
    console.log("namaste react op")
   }, 1000);
  }

 componentDidUpdate(prevProps, prevState) {

 }

 componentWillUnmount(){
  clearInterval(this.timer);
 }
 
 
 render() {
    const {count}= this.state;    //here we are destructuringthe state
   const {count2}= this.state;    //||||||||||||||||||||||||||||||||||
    return (
      <div>
        <h2> Class Componennt Profile</h2>
        <p>This is the profileclass page.</p>
        <h3>Name:{this.state.userInfo.name} </h3>
        <h3>XYZ: {this.state.userInfo.location}</h3>
      </div>
    );
  }
}
export default Profile;
