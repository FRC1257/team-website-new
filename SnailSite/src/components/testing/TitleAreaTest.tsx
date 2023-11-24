const TitleAreaTest = () => {
  return (
    <div className="inline-flex h-[769px] flex-col items-center justify-start self-stretch bg-white py-24">
      <div className="inline-flex h-[577px] xl:w-[1152px] lg:w-[1008px] items-center justify-start gap-24">
        <div className="inline-flex w-[368px] flex-col items-start justify-start gap-[33px]">
          <div className="self-stretch text-[50px] font-bold text-black">
            Title - Website Headline
          </div>
          <div className="self-stretch text-base font-medium leading-tight text-black">
            This is a website for a fictional company that develops an app to
            provide features and services to its users
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-black px-5 py-4">
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
