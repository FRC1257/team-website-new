import { Link } from "react-router-dom";

export interface ButtonProps {
  text: string;
  style: string;
  to: string;
}

const Button = ({ text, style, to }: ButtonProps) => {
  return (
    <Link to={to}>
      <button className={`${style} rounded-xl py-4 px-6 font-bold text-lg`}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
