import React from "react";

function Header() {
  return (
    <div>
      <div className="font-extrabold text-3xl text-gray-100 flex align-center mb-5 ">
        <div class="flex items-center space-x-2">
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3845/3845868.png"
              alt="Logo"
              class="w-10"
            />
          </button>
        </div>
        REPORT ANALYZER
      </div>
      <div class="sm:px-12 flex items-center justify-between  ">
        <div className=" flex space-x-4 ">
          <div className="hover:bg-green-800 rounded-md text-gray-300 text-lg text-bold flex p-2 transition hover:shadow-lg ">
            <a href="">Home</a>
            </div>
          <div className="hover:bg-green-800 rounded-md text-gray-300 text-lg text-bold flex p-2 transition hover:shadow-lg">
            <a href="">Contact Us</a>
          </div>
        </div>
        <nav class="flex items-center space-x-1 text-md font-medium ">
          <button class="rounded px-3 py-2 text-gray-300 transition hover:bg-green-900">
            {" "}
            Sign Up{" "}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Header;
