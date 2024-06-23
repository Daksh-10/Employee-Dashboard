type INFO = {
  info: any;
};

function Information(props: INFO) {
  return (
    <>
      <div className=" font-serif bg-[url('background.jpg')] max-w-sm rounded overflow-hidden ml-4 mt-4 shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Employee Information</div>
          <p>Name: {props.info[0].employee_name}</p>
          <div></div>
          <p>Age: {props.info[0].employee_age}</p>
          <div></div>
          <p>Salary: {props.info[0].employee_salary}</p>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Information;
