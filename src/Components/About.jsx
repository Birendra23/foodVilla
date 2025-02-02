
import ProfileFunctional from "./Profile"; 
import Profile from "./ProfileClass";
import { Component  } from "react";

// class About extends Component {
//   constructor(props) {
//     super(props);
//       console.log("parent- constructor");
//   }
//   componentDidMount() {
//     console.log("parent-componentDidMount");
//   }
//   render() {
//     console.log("parent-render");
//       return (
//         <div>
//           <h1>About Us Page</h1>
//           <p>This is food delivery website.</p>
          
//           <Profile />
          
//         </div>
//       );
//   }
// }

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is food delivery website.</p>
      <ProfileFunctional Name={"bps"} />
      <Profile Name={"bps class"} XYZ="abc" />
    </div>
  );
};
export default About;
