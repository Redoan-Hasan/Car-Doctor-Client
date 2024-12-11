/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleService = ({ singleData }) => {
    // console.log(singleData);
    return (
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
            src={singleData.img}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2 text-3xl font-bold">
            <h2 className="text-xl font-semibold tracking-wide">
            {singleData.title}
            </h2>
        </div>
        <p className="text-red-600 text-xl flex justify-between items-center">
            <span>Price : ${singleData.price}.00</span>
            <Link to={`/check/${singleData._id}`}><FaArrowRight/></Link>
        </p>
        </div>
    );
    };

export default SingleService;
