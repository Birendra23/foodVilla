import { useState } from "react";
const Section = ({title,desciption})=>{
    const [isvisible, setIsvisible]=useState(false);
    return (
      <div className="border border-black p-2 m-2">
        <h3 className=" font-bold text-xl ">{title}</h3>
        {isvisible ? (
          <button
            onClick={() => setIsvisible(false)}
            className=" cursor-pointer underline"
          >
            Hide
          </button>
        ) : (
          <button
            onClick={() => setIsvisible(true)}
            className=" cursor-pointer underline"
          >
            show
          </button>
        )}
        {isvisible && <p>{desciption}</p>}
      </div>
    );
}

const Instamart = () => {
    return (
      <div>
        <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
        <Section
          title={"About instamart"}
          desciption={
            "this is about section of instamart.here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
          }
        />
        <Section
          title={"Team instamart"}
          desciption={
            "this is about team of instamart.here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
          }
        />
        <Section
          title={"Services instamart"}
          desciption={
            "this is about services of instamart.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ."
          }
        />
      </div>
    );
};
export default Instamart;