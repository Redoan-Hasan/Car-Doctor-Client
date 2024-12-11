import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const CheckOut = () => {
  const service = useLoaderData();
  const {user}=useContext(AuthContext);
  const handleBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const userOrderInfo = {
        name,email,date,price,description,
        img : service.img,
        service_id:service._id
    }
    console.log(userOrderInfo);
    fetch('http://localhost:5000/userOrders' , {
        method:'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(userOrderInfo)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire("Added Successfully");
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
    })
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <form 
        onSubmit={handleBooking}
        noValidate=""
        className="flex flex-col py-6 space-y-6  md:px-6 bg-[#F3F3F3] my-6 rounded-lg"
      >
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 text-2xl">
          <div className="w-[50%] flex flex-col gap-8">
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                placeholder="Leroy Jenkins"
                className="block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-[#FFFFFF]"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                placeholder="leroy@jenkins.com"
                className="block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-[#FFFFFF]"
              />
            </label>
          </div>
          <div className="w-[50%] flex flex-col gap-8">
            <label className="block">
              <span className="mb-1">Date</span>
              <input
                name="date"
                type="date"
                className="block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-[#FFFFFF]"
                required
              />
            </label>
            <label className="block">
              <span className="mb-1">Price</span>
              <input
                name="price"
                type="number"
                defaultValue={service?.price}
                className="block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-[#FFFFFF]"
              />
            </label>
          </div>
        </div>
        <label className="block">
          <span className="mb-1 text-2xl">Description</span>
          <textarea
            name="description"
            placeholder="Please Interpret"
            rows="6"
            className="block w-full p-1 text-xl rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-[#FFFFFF]"
            required
          ></textarea>
        </label>
        <input className="btn btn-blocks bg-[#FF3811] hover:bg-[#FF3811]" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CheckOut;
