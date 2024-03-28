import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-[url('/assets/banner.jpg')] bg-cover bg-center py-28">
      <div className="max-w-screen-xl mx-auto my-10 px-5 text-right">
        <h1 className="text-4xl text-gray-500 font-medium">Professional</h1>
        <h2 className=" text-red-2 text-5xl font-semibold  mb-8">
          Apple repair center
        </h2>
        <div className="flex gap-5 justify-end">
          <Link
            className="px-3 py-2 border border-red-2 text-white text-sm bg-red-2 hover:bg-transparent hover:text-red-2 transition-colors"
            to={"/"}
          >
            Our Services
          </Link>
          <Link
            className="px-3 py-2 border border-red-2 text-red-2 text-sm bg-transparent hover:bg-red-2 hover:text-white"
            to={"/"}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
