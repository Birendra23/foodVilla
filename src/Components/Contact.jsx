import { useNavigate } from "react-router-dom";
const contact = () => {
   const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Us</h1>
      <section>
        <button
          onClick={() => 
            navigate(-1)
          }
        >
          goback
        </button>
      </section>
    </div>
  );
};
export default contact;
