import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { setUserEmail } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const [RegError, setRegError] = useState("");
  const [showPass, setshowPass] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    const { email, password } = data;

    console.log(email, password);

    if (password.length < 6) {
      setRegError("Password should be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password should contain at least one uppercase letter");
      return;
    }

    setRegError(""); // Clear any previous registration errors

    axiosSecure
      .post("/userLogin", data)
      .then((res) => {
        // Assuming your server responds with a success message upon successful login
        if (res.data) {
          const userEmail = email;
          setUserEmail(userEmail);
          toast.success("Login Successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            onClose: () => {
              navigate(location?.state ? location.state : "/");
            },
          });
        } else {
          setRegError("Invalid email or password");
          toast.error("Invalid email or password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        setRegError(error.message);
      });
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse my-10 mx-auto">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered w-full"
                name="email"
                {...register("email")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="password"
                className="input input-bordered w-full relative"
                name="password"
                {...register("password")}
                required
              />
              <span
                className="absolute mt-14 ml-64 pl-8"
                onClick={() => setshowPass(!showPass)}
              >
                {showPass ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="eye"
                    width="20"
                    height="20"
                    className="-mt-1 -ml-4 md:-ml-0"
                  >
                    <path d="M18.521 1.478a1 1 0 0 0-1.414 0L1.48 17.107a1 1 0 1 0 1.414 1.414L18.52 2.892a1 1 0 0 0 0-1.414zM3.108 13.498l2.56-2.56A4.18 4.18 0 0 1 5.555 10c0-2.379 1.99-4.309 4.445-4.309.286 0 .564.032.835.082l1.203-1.202A12.645 12.645 0 0 0 10 4.401C3.44 4.4 0 9.231 0 10c0 .423 1.057 2.09 3.108 3.497zm13.787-6.993l-2.562 2.56c.069.302.111.613.111.935 0 2.379-1.989 4.307-4.444 4.307-.284 0-.56-.032-.829-.081l-1.204 1.203c.642.104 1.316.17 2.033.17 6.56 0 10-4.833 10-5.599 0-.424-1.056-2.09-3.105-3.495z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 512 512"
                    id="eye"
                    className="-mt-1 -ml-4 md:-ml-0"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,406c-30.6,0-62.2-7.6-94-22.5c-24.9-11.7-50-27.9-74.6-48.2C45.9,301,20.3,267,19.2,265.6
			c-4.3-5.7-4.3-13.5,0-19.2c1.1-1.4,26.7-35.4,68.2-69.7c24.6-20.3,49.7-36.5,74.6-48.2c31.8-14.9,63.4-22.5,94-22.5
			s62.2,7.6,94,22.5c24.9,11.7,50,27.9,74.6,48.2c41.5,34.3,67.2,68.3,68.2,69.7c4.3,5.7,4.3,13.5,0,19.2
			c-1.1,1.4-26.7,35.4-68.2,69.7c-24.6,20.3-49.7,36.5-74.6,48.2C318.2,398.4,286.6,406,256,406z M52.6,256
			c25.1,29.7,108,118,203.4,118c95.6,0,178.3-88.3,203.4-118c-25.1-29.7-108-118-203.4-118C160.4,138,77.7,226.3,52.6,256z"
                        ></path>
                      </g>
                      <g>
                        <path
                          d="M256,328c-39.7,0-72-32.3-72-72s32.3-72,72-72s72,32.3,72,72S295.7,328,256,328z M256,216
			c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S278.1,216,256,216z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                )}
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn text-white bg-red-500 text-center"
              />
            </div>
          </form>
          <p>
            New to website?{" "}
            <Link
              className="hover:underline hover:text-red-500"
              to={"/register"}
            >
              Register now
            </Link>{" "}
          </p>
        </div>
        {RegError && (
          <p className="text-red-500 px-4 text-sm font-normal">{RegError}</p>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
