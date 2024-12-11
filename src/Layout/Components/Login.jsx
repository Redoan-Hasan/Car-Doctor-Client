import { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";


const Login = () => {
    const {logIn}=useContext(AuthContext)
    // const location = useLocation();
    // const navigate = useNavigate()
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value; 
        console.log(email,password);
        logIn(email,password)
        .then(result => {
            console.log(result);
            // navigate(location?.state ? location?.state : '/')
            const accessTokenUser = {email}
            // axios 
            axios.post('http://localhost:5000/jwt' , accessTokenUser )
            .then(data =>{
                console.log(data.data)
            })
        })
        .catch(err=> console.log(err.message))
    }
    return (
        <div>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-1 lg:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col justify-between">
            <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Lets Login!
                </h2>
            </div>
            <img
                src="src/assets/images/login/login.svg"
                alt=""
                className="p-6 md:h-"
            />
            </div>
            <div className="flex flex-col  p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 ">
            <div className="mb-8 text-center ">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm dark:text-gray-600">
                Sign in to access your account
                </p>
            </div>
            <form onSubmit={handleLogin} noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                    />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                        Password
                    </label>
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-xs hover:underline dark:text-gray-600"
                    >
                        Forgot password?
                    </a>
                    </div>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                    />
                </div>
                </div>
                <div className="space-y-2">
                <div>
                    <input type="submit" value="Sign in" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"/>
                    
                </div>
                <p className="text-center pt-8 text-base font-semibold leading-6 text-[#706F6F]">Do not Have An Account ? <Link to='/register' className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold">Register</Link></p>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Login;
