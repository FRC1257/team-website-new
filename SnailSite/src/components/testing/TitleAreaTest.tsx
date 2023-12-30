const TitleAreaTest = () => {
  return (
    <div className="flex h-[769px] w-full flex-row justify-center bg-white py-24">
      <div className="flex h-[577px] xl:w-[1152px] w-10/12 items-center gap-24">
        <div className="flex flex-col items-start gap-[33px]">
          <div className="text-[50px] font-bold text-black">
            Title - Website Headline
          </div>
          <div className="text-base font-medium leading-tight text-black">
            This is a website for a fictional company that develops an app to
            provide features and services to its users
          </div>
          <div className="flex justify-center gap-2.5 rounded-lg bg-black px-5 py-4">
            <div className="text-base font-bold text-white">Learn more</div>
          </div>
        </div>
        <img
          className="shrink grow basis-0 self-stretch rounded-2xl"
          src="https://via.placeholder.com/688x577"
        />
      </div>
    </div>
  );
};

export default TitleAreaTest;
