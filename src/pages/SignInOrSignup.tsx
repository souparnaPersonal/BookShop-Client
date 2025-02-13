import { SubmitHandler, useForm } from "react-hook-form";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignInOrSignup() {
  type Inputs = {
    name?: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "Souparna",
      password: "123",
      email: "test1@gmail.com",
    },
  });

  const [login] = useLoginMutation();
  const [createUser] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    if (isRegistering) {
      console.log("Registering new user:", data);
      const res = await createUser({
        name: data?.name,
        password: data.password,
        email: data?.email,
      }).unwrap();
      console.log("create user res:", res);
      const user = verifyToken(res.data?.token);
      dispatch(setUser({ user, token: res?.data?.token }));
      navigate("/");
    } else {
      const res = await login({ email: data.email, password: data?.password });
      const user = verifyToken(res.data?.data?.token);

      dispatch(setUser({ user: user, token: res.data?.data?.token }));
      navigate("/");
      // console.log(res);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {isRegistering ? "Create an account" : "Sign in to your account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {isRegistering && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    {...register("name", { required: isRegistering })}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email")}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                {!isRegistering && (
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                )}
              </div>
              <div className="mt-2">
                <input
                  {...register("password")}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isRegistering ? "Register" : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            {isRegistering
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {isRegistering ? "Sign in" : "Register"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
