// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "./images.png";
// import useOnline from "../Utils/useOnline";


// // const LoggedInUser = () => {
// //   //  api call to check authentication
// //   return true;
// // };
// const Title = () => (
//   <a href="/">
//     <img
//       className="logo h-24 p-2 "
//       src={logo}
//       alt="Food Villa"
//     />
//   </a>
// );
// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const isOnline = useOnline()
//   return (
//     <div className="Header text-2xl gap-5 w-screen h-18 flex justify-between bg-pink-300 shadow-lg p-2 ">
//       <Title />
//       <div className="nav-items">
//         <ul className="flex py-10">
//           <Link to="/">
//             <li className="px-2">Home</li>
//           </Link>
//           <Link to="/About">
//             <li className="px-2  ">About</li>
//           </Link>
//           <Link to="/Contact">
//             <li className="px-2">Contact</li>
//           </Link>
//           <Link to="/instamart">
//             <li className="px-2">Instamart</li>
//           </Link>
//           <Link to="/cart">
//           <li className="px-2">Cart</li>
//           </Link>
//         </ul>
//       </div>
//       <h1 className="py-9">{isOnline ? "Online" : "Offline"}</h1>
//       {isLoggedIn ? (
//         <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
//       ) : (
//         <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
//       )}
//     </div>
//   );
// };
// export default Header;
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./images.png";
import useOnline from "../Utils/useOnline";

const Title = () => (
  <a href="/">
    <img className="logo h-24 p-2" src={logo} alt="Food Villa" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="Header text-2xl gap-5 w-screen h-18 flex justify-between bg-pink-300 shadow-lg p-2">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
          >
            <li className="px-2">Home</li>
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
          >
            <li className="px-2">About</li>
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
          >
            <li className="px-2">Contact</li>
          </NavLink>
          <NavLink
            to="/instamart"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
          >
            <li className="px-2">Instamart</li>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
          >
            <li className="px-2">Cart</li>
          </NavLink>
        </ul>
      </div>
      <h1 className="py-9">{isOnline ? "Online" : "Offline"}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
      )}
    </div>
  );
};

export default Header;
