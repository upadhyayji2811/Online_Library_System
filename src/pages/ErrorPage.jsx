import React from "react";
import { Link, useRouteError } from "react-router";

function ErrorPage() {
  const { status, statusText, data } = useRouteError();
  console.log(data);

  return (
    <div className="grid h-screen place-content-center bg-black px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">{status}</h1>

        <p className="text-2xl font-bold tracking-tight text-bg sm:text-4xl">
          {statusText}
        </p>

        <p className="mt-4 text-gray-500">{data}</p>

        <Link
          to={"/"}
          className="mt-6 inline-block rounded-sm bg-bg px-5 py-3 text-sm font-medium text-white hover:bg-bg focus:ring-3 focus:outline-hidden"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
