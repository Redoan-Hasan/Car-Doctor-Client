import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const customAxios = axios.create({
  baseURL: "https://car-doctor-server-fawn-phi.vercel.app",
  withCredentials: true,
});

const useCustomAxios = () => {
  const { logOut } = useContext(AuthContext);
  useEffect(() => {
    customAxios.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log("error from interceptors", err.response);
        if (err.response.status === 401 || err.response.status === 403) {
          console.log("logout user");
          logOut()
            .then((result) => console.log(result))
            .catch((err) => {
              console.log(err.message);
            });
        }
      }
    );
  }, [logOut]);

  return customAxios;
};

export default useCustomAxios;
