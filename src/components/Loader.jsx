import React from "react";

const Loader = () => {
  return (
    <tr className="bg-white animate-pulse border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="row-id px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-2  bg-gray-300 rounded-full dark:bg-gray-600 w-10" />
      </th>

      <td className="px-6 py-4 row-title">
        <div className="flex items-center  w-full max-w-[300px]">
          <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
          <div className="h-2 ms-2 bg-gray-200 rounded-full dark:bg-gray-600 w-40" />
          <div className="h-2 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
        </div>
      </td>

      <td className="px-6 py-4 row-short">
        <div className="h-2 ms-2  bg-gray-200 rounded-full dark:bg-gray-700 w-20" />
      </td>

      <td className="px-6 py-4 row-fee text-end">
        {" "}
        <div className="h-2 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-42" />
      </td>
      <td className="px-6 py-4">
        <div className="px-6 py-6 flex items-center">
        <div className="h-9 w-9 ms-2 bg-gray-200 rounded-full dark:bg-gray-700" />
        <div className="h-9 w-9 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 " />
         
        </div>
      </td>
    </tr>
  );
};

export default Loader;
