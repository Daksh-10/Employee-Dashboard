import React from "react";

function Information({ info }) {
  return (
    <>
      <div className=" font-serif bg-[url('background.jpg')] max-w-sm rounded overflow-hidden ml-4 mt-4 shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Employee Information</div>
          <p>Name: {info[0].employee_name}</p>
          <div></div>
          <p>Age: {info[0].employee_age}</p>
          <div></div>
          <p>Salary: {info[0].employee_salary}</p>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Information;
