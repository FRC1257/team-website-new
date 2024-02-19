import "./BlobText.css";

const w = 300;
const h = 300;

// https://stackoverflow.com/questions/5546346/how-to-place-and-center-text-in-an-svg-rectangle
const BlobText = () => {
  return (
    <div className="">
      <div className="">
        <svg
          width={w}
          height={h}
          xmlns="http://www.w3.org/2000/svg"
          className="blob m-auto"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset={0} style={{ stopColor: `rgb(254, 0, 242)` }}></stop>
              <stop
                offset={100}
                style={{ stopColor: `rgb(251, 2, 128)` }}
              ></stop>
            </linearGradient>
          </defs>
          <rect width={w} height={h} x="0" y="0" fill="url(#gradient)" />
          <text
            x={"50%"}
            y={"45%"}
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            className="font-bold text-4xl"
          >
            2004
          </text>
          <text
            x={"50%"}
            y={"65%"}
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            className="font-semibold text-2xl"
          >
            Founded
          </text>
        </svg>
      </div>
    </div>
  );
};

export default BlobText;
