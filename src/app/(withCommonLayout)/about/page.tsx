import Image from "next/image";

const FullScreenCarBanner = () => {
  return (
    <div>
      <section className="relative h-screen bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://img.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid" // Replace with your image path
            alt="Luxury Car"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold uppercase">
            Discover Luxury
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl">
            Experience the elegance, power, and cutting-edge technology of our
            premium vehicles.
          </p>
          <button className="px-8 py-3 text-lg font-semibold bg-white text-black rounded-lg hover:bg-gray-300">
            Learn More
          </button>
        </div>
      </section>
      <div className=" bg-[#0B0F12]">
        <section className=" w-full container md:px-8 px-0 mx-auto flex flex-col md:flex-row items-center ">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 h-96 md:h-auto relative">
            <Image
              src="https://img.freepik.com/free-photo/map-pin-location-direction-position-graphic_53876-124530.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid" // Replace with your image path
              alt="Contact Us"
              width={500}
              height={500}
              className=" h-full w-full"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-full md:w-1/2 px-8 py-12 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              Get in Touch
            </h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none text-gray-800 placeholder-gray-500"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none text-gray-800 placeholder-gray-500"
                  placeholder="Enter your email"
                />
              </div>
              {/* Contact Number Field */}
              <div>
                <label htmlFor="contact" className="block text-sm font-medium">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none text-gray-800 placeholder-gray-500"
                  placeholder="Enter your contact number"
                />
              </div>
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none text-gray-800 placeholder-gray-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FullScreenCarBanner;
