"use client";
import React, { useState } from "react";
import { FormEvent } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === "") {
      return;
    }

    setShowSuccessMessage(true);
    setEmail("");

    const timer = setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  };

  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-col max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">Subscribe to my newsletter</h1>
          <p className="text-md text-gray-600 mt-2">
            Get notified about new blogs, and updates.
          </p>
        </div>
        <div className="flex flex-col md:flex-row max-w-3xl mx-auto mt-6">
          <form onSubmit={handleSubmit} className="flex items-center gap-x-3">
            <div className="relative flex-1">
              <svg
                className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border border-gray-300 focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-gray-700 hover:bg-gray-800 active:bg-gray-600 active:shadow-none rounded-lg shadow">
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row max-w-3xl mx-auto mt-4">
          {showSuccessMessage && (
            <div className=" bg-green-100 border border-green-400 text-green-700 px-2 py-2 rounded ">
              <strong className="font-bold">Success!</strong> You have been
              subscribed to the newsletter.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
