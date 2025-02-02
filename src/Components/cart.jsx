// import { useLocation } from "react-router-dom";
// const cart = () => {
//   const location = useLocation();
//   const { name, age } = location.state || {};
//   console.log(location);
//     return (
//       <div>
//         <h1>this is {location.pathname.replace("/" , '')} section</h1>
//         <p>your name:{name}, Age:{age}</p>
//         <h2>your added cart are here</h2>
//       </div>
//     );
// }

// export default cart;
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { name, age } = location.state || {}; // Fallback to empty object if state is undefined

  console.log(location); // This will help you check the state in the console

  return (
    <div>
      <h1>This is {location.pathname.replace("/", "")} section</h1>
      {/* Check if name and age are available */}
      {name && age ? (
        <p>
          Your name: {name}, Age: {age}
        </p>
      ) : (
        <p>No user data received.</p>
      )}
      <h2>Your added cart items are here</h2>
    </div>
  );
};

export default Cart;
