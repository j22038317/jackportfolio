"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../../app/asset/asset";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { motion } from "framer-motion";

const RateMe = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    comment: "",
    liked: false,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleLike = () => {
    setData((prevData) => ({ ...prevData, liked: !prevData.liked }));
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("comment", data.comment);
      formData.append("liked", data.liked);

      setData({
        name: "",
        email: "",
        comment: "",
        liked: false,
      })

      const response = await axios.post("/api/rating", formData);
      toast.success(response.data.msg);
    } catch (error) {
      toast.error("Error submitting feedback.");
    }
  };

  return (
    <div className="w-[full] p-10 rounded-lg bg-white flex flex-col items-start">
      <div>

      </div>
      <h1 className="text-4xl font-bold mb-5">Rate Me</h1>

      <div className="border-b-2 border-gray-400 w-full mb-5"></div>

      <form onSubmit={onSubmitHandle} className="flex gap-5 w-full">
        <div className="flex flex-col gap-5 w-[30%]">
          <div>
            <label htmlFor="name" className="text-lg font-bold text-gray-800">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              required
              placeholder="Enter your name"
              className="border p-3 w-full rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-lg font-bold text-gray-800">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              required
              placeholder="Enter your email"
              className="border p-3 w-full rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-[65%] pl-20">
          <div className="flex flex-col gap-2">
            <label htmlFor="comment" className="text-lg font-bold text-gray-800">
              Feedback
            </label>
            <textarea
              name="comment"
              value={data.comment}
              onChange={onChangeHandler}
              placeholder="Share your thoughts"
              className="border p-3 rounded-md min-h-[150px] text-lg"
            />
          </div>

          <div className="flex justify-end w-full">
            <motion.button
              type="button"
              onClick={toggleLike}
              className={`${data.liked ? "bg-green-500" : "bg-gray-400"
                } text-white py-3 px-5 rounded-md`}
              whileTap={{ scale: 0.9 }} // Shrink slightly on click
              whileHover={{ scale: 1.1 }} // Grow slightly on hover
            >
              <Image
                src={data.liked ? assets.like : assets.unlike}
                alt={data.liked ? "Liked" : "Unlike"}
                width={24}
                height={24}
              />
            </motion.button>
          </div>
        </div>

        <motion.button
          type="submit"
          className="bg-green-500 text-white py-3 px-5 rounded-md mt-2 max-w-[150px] self-end hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.1 }} // Slight grow on hover
          whileTap={{ scale: 0.95 }} // Shrink slightly on click
        >
          Submit
        </motion.button>

      </form>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default RateMe;
