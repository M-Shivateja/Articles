import React, { useState } from "react";

function Header({ onSort }) {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleSort = (order) => {
    onSort(order);
    setFilterOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full flex flex-wrap justify-around items-center h-30 py-3 z-10 bg-primary backdrop-blur-md px-4 shadow-md">
      <div className="text-white font-bold flex items-center">
        <span className="text-white mb-1 sm:text-2xl">Google Alerts</span>
      </div>

      <div className="flex mx-4 mb-2 sm:mb-0">
        <input
          type="text"
          placeholder="Search..."
          className="sm:w-96 px-4 py-1 rounded-full border bg-gray-100 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <div className="relative">
        <button
          className="text-white px-6 py-1 bg-secondary font-bold duration-200 rounded-full hover:bg-terinary hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          Filter
        </button>

        {filterOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-700 text-white hover:text-black rounded-md shadow-lg overflow-hidden z-20">
            <ul className="text-sm">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSort("asc")}
              >
                Title: A → Z
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSort("desc")}
              >
                Title: Z → A
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSort("idAsc")}
              >
                ID: small to big
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSort("idDesc")}
              >
                ID: big to small
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
