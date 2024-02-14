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
        className={`${style} rounded-xl py-[2dvh] px-[2dvw] font-bold text-[2dvh]`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
