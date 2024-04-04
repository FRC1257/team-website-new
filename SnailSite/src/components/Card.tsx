import { NavLink } from "react-router-dom";

interface CardProps {
  title: string;
  imgSrc: string;
  to: string;
  external?: boolean;
}

const Card = ({ title, imgSrc, to, external }: CardProps) => {
  let content = (
    <>
      <img
        className="object-fill object-center h-auto min-h-[24rem] bg-black w-full z-10 opacity-50"
        src={imgSrc}
      />
      <h1 className="absolute w-full px-5 text-white font-extrabold lg:text-5xl text-3xl text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        {title}
      </h1>
    </>
  );

  if (to) {
    content = (
      <NavLink to={to} target={external ? "_blank" : ""}>
        {content}
      </NavLink>
    );
  }

  return (
    <div className="my-1 mx-auto px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
      <div className="relative overflow-hidden rounded-lg shadow-lg max-h-96 border-2 hover:shadow-md hover:shadow-purple-300">
        {content}
      </div>
    </div>
  );
};

export default Card;
