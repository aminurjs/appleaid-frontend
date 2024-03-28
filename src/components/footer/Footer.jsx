import { MapPin, PhoneCall } from "lucide-react";
import Login from "./Login";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#c01a3630] to-white pt-12 pb-5 -mb-6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-center items-center flex-col mb-6 pb-6 border-b border-gray-300">
          <Link to="/">
            <img src="/assets/logo.png" alt="logo" height={80} width={100} />
          </Link>
          <Login />
        </div>
        <div className="px-5 lg:px-0 grid grid-cols-2  gap-6 border-b pb-6 border-gray-200">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-primary mb-8">
              Useful Links
            </h3>
            <Link to={"/"} className="text-gray-500 mb-2 text-sm block">
              Content
            </Link>
            <Link to={"/"} className="text-gray-500 mb-2 text-sm block">
              Services
            </Link>
            <Link to={"/"} className="text-gray-500 mb-2 text-sm block">
              ExLinklore
            </Link>
            <Link to={"/"} className="text-gray-500 mb-2 text-sm block">
              Terms & Services
            </Link>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-primary mb-8">
              Our Contact
            </h3>
            <h3 className=" font-semibold text-primary mb-3">Alauddin Ahmed</h3>
            <a
              to=""
              className="text-gray-500 mb-3 text-sm flex items-center justify-center gap-2"
            >
              <PhoneCall className="text-lg text-dark-03" /> +880 1945 009 200
            </a>
            <a
              to=""
              className="text-gray-500 mb-6 text-sm flex items-start gap-2  justify-center "
            >
              <MapPin className="w-8 text-dark-03" />
              Motalib Plaza, (2nd Floor) Shop # 398, <br /> Hatirpool Dhaka-1205
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
