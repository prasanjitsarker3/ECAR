import React from "react";

const page = () => {
  return (
    <div className="bg-[#0B0F12] pt-12">
      <div
        className="relative w-full h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/black-car-silhouette_144316-193.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid')", // Replace with your image URL
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 h-[100vh] flex flex-col items-center justify-center text-white px-8">
          {/* Glassmorphism Text Box */}
          <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-lg text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Our Car Showroom
            </h1>
            <p className="text-lg mb-6">
              Discover the latest in automotive technology with our exclusive
              range of luxury cars.
            </p>
            <p className="text-sm mb-8">
              Explore innovative car designs, advanced features, and premium
              craftsmanship. Our showroom offers a wide variety of cars to fit
              your style and needs.
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
