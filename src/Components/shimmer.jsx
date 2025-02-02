import './shimmer.css';

// const Shimmer= () =>{
//     return <h1>shimmer ui loading</h1>;
// }
const Shimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer shimmer-circle"></div> {/* Avatar placeholder */}
      <div className="shimmer shimmer-line"></div> {/* Line placeholder */}
      <div className="shimmer shimmer-line"></div> {/* Line placeholder */}
      <div className="shimmer shimmer-box"></div> {/* Box placeholder */}
    </div>
  );
};
export default Shimmer;