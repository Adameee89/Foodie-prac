import React from 'react';

function HeaderComponent() {
  return (
    <div className="relative mx-auto my-8 w-full h-[50vw] sm:h-[40vw] lg:h-[33.7vw] max-w-screen-2xl rounded-[30px] overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./header_img.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
      </div>
      <div className="relative flex flex-col items-start justify-center h-full p-8 md:p-16 lg:p-24 space-y-6 max-w-2xl">
        <h2 className="text-2xl sm:text-xl lg:text-6xl  font-extrabold text-white leading-tight">
          Order your favorite food here
        </h2>
        <p className="text-sm sm:text-xl lg:text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Experience the best culinary delights right at your doorstep.
        </p>
        <button className="px-8 py-4 text-sm sm:text-xl bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition duration-300">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default HeaderComponent;
