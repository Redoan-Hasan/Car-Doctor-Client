import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import axios from "axios";
import useCustomAxios from "../../CustomAxios/useCustomAxios";

const YourOrders = () => {
  const { user } = useContext(AuthContext);
  const [yourOrders, setYourOrders] = useState([]);
  const customAxios = useCustomAxios();
  console.log(yourOrders);
  useEffect(() => {
    // axios.get(`https://car-doctor-server-fawn-phi.vercel.app/userOrders?email=${user?.email}` , {withCredentials: true})
    // .then((data) => {
    //     console.log(data.data);
    //     setYourOrders(data.data);
    // });
    customAxios.get(`/userOrders?email=${user?.email}`).then((data) => {
      console.log(data.data);
      setYourOrders(data.data);
    });
  }, [user, customAxios]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure?");
    if (proceed) {
      fetch(`https://car-doctor-server-fawn-phi.vercel.app/userOrders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            // eslint-disable-next-line no-unused-vars
            setYourOrders((deletedOrder) =>
              yourOrders.filter((order) => order._id != id)
            );
            alert("Order Deleted");
          }
        });
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          {/* <thead>
                    <tr>
                    <th>Options</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th></th>
                    </tr>
                </thead> */}
          {yourOrders.map((order, idx) => (
            <tbody key={idx}>
              {/* row 1 */}
              <tr className="border-none text-xl">
                <th>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-circle btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-lg h-36 w-36 ">
                        <img
                          src={order.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="text-xl">
                      <div className="font-bold">{order.name}</div>
                      <div className="text-sm opacity-50">{order.email}</div>
                    </div>
                  </div>
                </td>
                <td>${order.price}</td>
                <td>{order.date}</td>
                <th>
                  <button className="btn btn-error">Pending</button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default YourOrders;
