import { SearchIcon } from "@heroicons/react/solid";

const DateRangeBox = ({ searchInput, placeholder }) => {
  return (
    <div className="flex items-center md:border-2 py-2 rounded-full md:shadow-sm search-box-wrapper">
      <div className="flex">
        {/* div for check in/out dates */}
        <div className="flex">
          {/* check in */}
          <div className="flex">
            <div
              style={{
                padding: "14px 24px",
              }}
            ></div>
          </div>
          {/* check out */}
          <div className="flex"></div>
        </div>
        {/* divider */}
        <div className="border border-gray-200 h-[32px]"></div>
        {/* div for number of guests & search button */}
        <div className="flex"></div>
      </div>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        className="flex-grow pl-5 bg-transparent text-sm text-gray-600 placeholder-gray-400 border-none focus:[box-shadow:none]"
        placeholder={placeholder || "Start Your Search"} // shows the query params as a placeholder when they're selected
      />
      <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
    </div>
  );
};

export default DateRangeBox;

