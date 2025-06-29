import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-100 absolute z-50 left-0 right-0 ">
      <div className="w-[35%] bg-white rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-xl font-medium  mb-2 ">
            Sign in to your account!
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            voluptatum.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center gap-4 w-full p-3 border border-zinc-500 rounded-lg">
            <span>
              <FcGoogle />
            </span>
            Sign in with Google{" "}
          </button>
          <button className="flex items-center justify-center gap-4 w-full p-3 border border-zinc-500 bg-zinc-900 text-white rounded-lg">
            <span>
              <FaGithub />
            </span>
            Sign in with Github{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
