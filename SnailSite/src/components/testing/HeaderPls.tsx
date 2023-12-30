// TODO: ask Nat/Maia to create square SVGs/PNGs of the logo (right now it's off-center)

const HeaderPls = () => {
  return (
    <nav className="bg-[url('img/backgrounds/galaxy-background.png')] bg-cover bg-center flex flex-col">
      <div className="flex justify-center mt-4">
        <div className="bg-black rounded-full">
          <img
            className="w-32 h-32"
            src="img/logos/snail_white.png"
            alt="Team Logo"
          />
        </div>
      </div>
      <div className="text-center text-white text-5xl font-bold tracking-wide mt-2">
        Parallel Universe
      </div>
      <div className="flex justify-center">
        <ul className="flex justify-between items-center gap-4 text-white text-lg font-bold">
          <li className="flex flex-wrap items-center gap-2 p-4 hover:bg-blue-900">
            <span>About</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:bg-green-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li className="p-4 hover:bg-blue-900">Outreach</li>
          <li className="p-4 hover:bg-blue-900">Parents</li>
          <li className="p-4 hover:bg-blue-900">Resources</li>
          <li className="p-4 hover:bg-blue-900">Contact</li>
          <li className="p-4 hover:bg-blue-900">Sponsors</li>
          <li className="p-4">
            <button className="bg-purple-800 rounded-xl py-2 px-4">
              Support Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderPls;
