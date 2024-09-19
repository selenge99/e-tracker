import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="max-w-[708px] h-[1024] m-auto flex flex-col justify-center items-center gap-6 p-60 bg-[#eaecee]">
      <div className="flex gap-2">
        <img src="./images/Logo.png" alt="" />
        <p className="text-xl font-semibold">Geld</p>
      </div>

      <div className="w-[384px] h-[426px flex flex-col gap-4">
        <div
          className="text-center
        "
        >
          <h1 className="text-2xl font-semibold mb-2">Welcome Back</h1>
          <p className="mb-10 text-base font-normal">
            Welcome back, Please enter your details
          </p>
        </div>

        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-96 h-12 rounded-lg bg-[#D1D5DB] p-4"
        />
        <input
          className="w-96 h-12 border rounded-lg bg-[#D1D5DB] p-4 "
          placeholder="Password"
        ></input>
        <input
          className="w-96 h-12 border rounded-full bg-[#0166FF] text-center"
          placeholder="Login"
        ></input>
        <div className="flex gap-4 justify-center">
          <h2>Don't have account?</h2>
          <Link href="/signup">
            <p>Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
