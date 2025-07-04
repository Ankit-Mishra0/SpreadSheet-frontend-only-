
const Navbar = () => {

  return (
    <div className="flex justify-between flex-row items-center bg-white p-4 border-b-1  border-gray-200 min-w-[1000px] cursor-default">
      <div className="flex flex-row gap-2">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="green"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 4C20.5449 4 22 5.45507 22 7.25V16.75C22 18.5449 20.5449 20 18.75 20H5.25C3.45507 20 2 18.5449 2 16.75V7.25C2 5.45507 3.45507 4 5.25 4H18.75ZM5.25 5.5C4.2835 5.5 3.5 6.2835 3.5 7.25V16.75C3.5 17.7165 4.2835 18.5 5.25 18.5H14.5V5.5H5.25Z"
              fill="#618666"
            />
          </svg>
        </div>
        <div>Spreadsheet</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="bg-gray-200 rounded-lg p-1 text-center text-xs flex flex-row">
          <img src="./image.png" alt="glass" className="w-4 h-4" />

          <input
            type="text"
            placeholder="search within sheet"
            className="text-center outline-none"
          />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="green"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
