import { useState } from "react";
import { data } from "../../data";

const Table = () => {
  // console.log(data);
  const [search, setsearch] = useState("");
  return (
    <div className="pt-2 mx-auto max-w-5xl">
      <div className="flex justify-center my-4">
        <h1 className="text-3xl font-extrabold">Contact Keeper</h1>
      </div>
      <div className="max-w-[30rem] bg-[#262626] rounded-lg mx-auto px-3 py-2 border border-[#AFAFAF]">
        <input
          type="search"
          placeholder="Search contacts"
          className="w-full bg-transparent outline-none text-sm font-normal"
        />
      </div>
      {/* table */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto mt-4 max-w-5xl">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First name
              </th>
              <th scope="col" className="px-6 py-3">
                Last name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.first_name}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.last_name}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.email}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.phone}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
