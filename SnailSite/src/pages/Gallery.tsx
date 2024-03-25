import Masonry from "@mui/lab/Masonry";

// https://stackoverflow.com/a/73537818
// https://gist.github.com/Pigamo/6ad9d769a23bbdc07a9ef6f7226cbb55
// Never use require.context in vite!
// glob is lazy by default
const imgs = Object.values(
  import.meta.glob("@assets/imgGallery/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    as: "url",
  })
);

const Gallery = () => {
  console.log(imgs);
  return (
    <div className="py-12 bg-background">
      <div className="max-w-[18rem] sm:max-w-[32rem] lg:max-w-[64rem] xl:max-w-[96rem] mx-auto">
        <Masonry columns={{ sm: 2, lg: 3 }}>
          {imgs.map((img, index) => (
            <div key={index}>
              <img
                // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${img}`}
                alt={`${index}`}
                loading="lazy"
                className="block w-full rounded-lg"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Gallery;
