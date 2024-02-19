import { useId } from "react";
import "./BlobText.css";

interface BlobTextProps {
  statistic: string;
  description: string;
  gradientL: string;
  gradientR: string;
  invert?: boolean;
}

const w = 300;
const h = 300;

// https://stackoverflow.com/questions/5546346/how-to-place-and-center-text-in-an-svg-rectangle
const BlobText = ({
  statistic,
  description,
  gradientL,
  gradientR,
  invert,
}: BlobTextProps) => {
  const id = useId();
  return (
    <svg
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      className={invert ? "blob-inverted m-auto" : "blob m-auto"}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset={0} style={{ stopColor: gradientL }}></stop>
          <stop offset={100} style={{ stopColor: gradientR }}></stop>
        </linearGradient>
      </defs>
      <rect width={w} height={h} x="0" y="0" fill={`url(#${id})`} />
      <text
        x={"50%"}
        y={"45%"}
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        className="font-bold text-5xl"
      >
        {statistic}
      </text>
      <text
        x={"50%"}
        y={"65%"}
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        className="font-semibold text-2xl"
      >
        {description}
      </text>
    </svg>
  );
};

export default BlobText;
