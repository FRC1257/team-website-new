// TODO: change to drawer in mobile view
// TODO: hover styling

const HeaderTest = () => {
  return (
    <div className="sticky top-0 z-50 inline-flex h-20 w-screen flex-col items-center justify-center gap-2.5 self-stretch bg-white">
      <div className="lg:inline-flex hidden xl:w-[1152px] lg:w-[1008px] items-center justify-between">
        <div className="flex h-20 w-[228px] items-start justify-start gap-1.5 bg-white bg-opacity-0 py-[22px] xl:pr-28">
          <div className="h-[35px] w-[35px] rounded-full bg-black"></div>
          <div className="text-3xl font-extrabold text-black">Logo</div>
        </div>
        <div className="flex items-start justify-start gap-3">
          <div className="flex items-center justify-center gap-3 px-5 py-4">
            <div className="text-md font-semibold text-black text-opacity-50">
              Features
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 px-5 py-4">
            <div className="text-md font-semibold text-black text-opacity-50">
              Second page
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 px-5 py-4">
            <div className="text-md font-semibold text-black text-opacity-50">
              Customers
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 px-5 py-4">
            <div className="text-md font-semibold text-black text-opacity-50">
              About Us
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 rounded-lg bg-black px-5 py-4">
            <div className="text-md font-semibold text-white">
              Reach out to us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTest;
