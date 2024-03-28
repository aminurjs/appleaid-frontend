import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const devices = [
  {
    id: 1,
    name: "iPhone Repair",
    src: "/assets/iphone.png",
  },
  {
    id: 2,
    name: "MacBook & iMac Repair",
    src: "/assets/mac.png",
  },
  {
    id: 3,
    name: "iPad Repair",
    src: "/assets/ipad.png",
  },
  {
    id: 4,
    name: "Apple Watch Repair",
    src: "/assets/watch.png",
  },
];
const services = [
  {
    title: "Liquid Damage",
    description:
      "Worst thing that can happen to your device is getting damaged by liquid. Sooner you bring it to us, the better for your device.",
    src: "/assets/d1.png",
  },
  {
    title: "Battery Replacement",
    description:
      "When your battery can't take the daily workload, we are here to replace it with our original battery collection.",
    src: "/assets/d2.png",
  },
  {
    title: "Cracked Screens",
    description:
      "When you crack your screen, which is very common, we are here with our advanced technologies to replace it like brand new.",
    src: "/assets/d3.png",
  },
  {
    title: "Rear Case Replacement",
    description:
      "Even if you break your rear case very rarely, we have everything to repair it fast and smooth without any hassle.",
    src: "/assets/d4.png",
  },
  {
    title: "Upper Glass Replacement",
    description:
      "Upper Glass is the beauty of your mobile & to make it beautiful again come visit us without further delay.",
    src: "/assets/d3.png",
  },
  {
    title: "Back Glass Replacement",
    description:
      "You could hide it under a back cover, but it won't make you happy. So get it fixed by our professional iPhone technician.",
    src: "/assets/d6.png",
  },
];

const Services = () => {
  return (
    <>
      <section>
        <div className="max-w-screen-lg mx-auto px-5 md:px-10 py-12 grid grid-cols-2 lg:grid-cols-4 gap-5 ">
          {devices.map((device) => (
            <div
              className="bg-white border border-gray-100 flex items-center justify-center flex-col shadow p-5"
              key={device.id}
            >
              <Link to="/" className="flex flex-grow mb-3">
                <img src={device.src} alt={device.name} />
              </Link>
              <Link
                className="hover:underline font-medium hover:text-red-2"
                to="/"
              >
                {device.name}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-5 md:px-10 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl text-gray-500 font-medium mb-5">
              We Can Fixed it Almost
            </h1>
            <h2 className=" text-red-2 text-4xl font-semibold  mb-5">
              As Fast As You Can Break It
            </h2>
            <p className="text-muted-foreground mb-6">
              To solve any kind of problem-related to your Apple devices, we
              have all kinds of modern technologies, a highly developed lab, and
              skilled technicians.
            </p>
            <div className="flex">
              <Link
                className="px-5 py-2.5 border border-red-2 text-red-2 text-sm bg-transparent hover:bg-red-2 hover:text-white"
                to={"/"}
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex gap-5">
            <img
              className="mx-auto"
              src="/assets/Apple-Service-Center.png"
              alt="Service"
            />
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-5 md:px-10 py-12">
        <div className="flex flex-col-reverse  lg:flex-row items-center gap-10 mb-12">
          <div className=" lg:w-1/2 flex gap-5">
            {services.slice(0, 2).map((service, i) => (
              <Service key={i} service={service} />
            ))}
          </div>
          <div className="lg:w-1/2 lg:text-right">
            <h1 className="text-4xl text-gray-500 font-medium mb-5">We Make</h1>
            <h2 className=" text-red-2 text-4xl font-semibold  mb-5">
              Mobile Repair Stress free
            </h2>
            <p className="text-muted-foreground mb-6">
              When you choose Apple Aid to repair your devices, rest assured. We
              handle your important devices with care, just like you would.
            </p>
            <div className="flex lg:justify-end">
              <Link
                className="px-5 py-2.5 border border-red-2 text-red-2 text-sm bg-transparent hover:bg-red-2 hover:text-white"
                to={"/"}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="  grid grid-cols-2 lg:grid-cols-4 gap-5">
          {services.slice(2, 6).map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;

const Service = ({ service }) => {
  return (
    <div className="text-center">
      <img
        className="mx-auto"
        src={service.src}
        alt={service.title}
        height={150}
        width={150}
      />
      <h2 className="text-2xl font-bold mb-2 text-primary">{service.title}</h2>
      <p className="text-muted-foreground">{service.description}</p>
    </div>
  );
};
Service.propTypes = {
  service: PropTypes.object,
};
