import { Link } from "react-router-dom";

export interface ButtonProps {
  text: string;
  style: string;
  to: string;
}

const Button = ({ text, style, to }: ButtonProps) => {
  return (
    <Link to={to}>
      <button
        className={`${style} rounded-xl lg:py-[2dvh] lg:px-[2dvw] p-3 font-bold text-[2dvh]`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
