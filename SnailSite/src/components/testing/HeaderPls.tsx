const HeaderPls = () => {
  return (
    <nav>
      <div className="flex justify-center bg-gray-700">
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
