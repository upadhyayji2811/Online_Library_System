import React from "react";

import { Link } from "react-router";
import BookCategories from "../components/BookCategories";

function Home() {
  return (
    <section className="bg-cover bg-center bg-no-repeat h-screen">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            The Ultimate Online
            <strong className="block font-extrabold text-bg">
              Library System
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Online Library System with over 1000+ books available for you to
            explore and enjoy.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              className="rounded-md bg-bg px-8 py-3 text-sm font-medium text-white shadow-sm"
              to={"/books/all"}
            >
              Browse Books
            </Link>
          </div>
        </div>
        <BookCategories />
      </div>
    </section>
  );
}

export default Home;
