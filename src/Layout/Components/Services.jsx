import { useEffect, useState } from "react";
import SingleService from "./SingleService";
import axios from "axios";

const Services = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    // fetch('https://car-doctor-server-fawn-phi.vercel.app/services')
    // .then(res => res.json())
    // .then(data=> setData(data))
    axios
      .get("https://car-doctor-server-fawn-phi.vercel.app/services", {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <div>
      <div className="text-center space-y-4 py-8">
        <h1 className="text-[#FF3811] font-bold text-xl">Service</h1>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data.map((singleData, idx) => (
          <SingleService key={idx} singleData={singleData} />
        ))}
      </div>
      <div className="text-center py-5">
        <button className="btn btn-outline btn-error text-sm md:text-lg lg:text-lg font-normal md:font-semibold  lg:font-semibold">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
