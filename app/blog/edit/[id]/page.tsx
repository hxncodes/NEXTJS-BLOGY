"use client";
import React, { Fragment } from "react";
import { toast, Toaster } from "react-hot-toast";

const EditBlog = () => {
  return (
    <main className="main-container pt-8">
      <div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light">
          Add new and creative <span className="break-all font-bold">Blog</span>
        </h2>
        <Fragment>
          <Toaster />
          <div className="flex w-full my-4">
            <div className="flex flex-col justify-center items-center m-auto w-full text-xl">
              <form className="block w-full">
                <input
                  type="text"
                  placeholder="Enter title"
                  className="rounded-md px-4 py-2 my-2 w-full border border-gray-300 focus:outline-gray-400"
                />
                <textarea
                  rows={10}
                  className="rounded-md px-4 py-2 w-full border border-gray-300 focus:outline-gray-400"
                  placeholder="Enter description here"
                ></textarea>

                <div className="flex flex-row justify-between">
                  <button className="btn btn-primary" type="submit">
                    Update
                  </button>
                  <button className="btn bg-red-500 text-white hover:bg-red-700">
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fragment>
      </div>
    </main>
  );
};

export default EditBlog;
