import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type SETINFO = {
  setInfo: any;
};
function Landing(props: SETINFO) {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const url = "https://dummy.restapiexample.com/api/v1/employees";
  async function api(url: string) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.data);
      });
  }

  useEffect(() => {
    api(url);
  }, []);

  const navigateToInfo = () => {
    console.log("reached Here");
    const results = data.filter((value: any) => {
      return value.id === parseInt(inputValue, 10);
    });
    console.log(results);
    props.setInfo(results);
    navigate("/info");
  };
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleDiv = (ID: number) => {
    const results = data.filter((value: any) => {
      return value.id === ID;
    });
    props.setInfo(results);
    navigate("/info");
  };

  const handleDelete = (ID: number) => {
    setData(
      data.filter((value: any) => {
        return value.id !== ID;
      })
    );
  };

  return (
    <>
      <div className="pt-2">
        <div className="flex justify-center">
          <p className="mb-3 text-[#746b54] uppercase tracking-widest text-7xl font-bold  first-letter:float-start">
            Employee Dashboard
          </p>
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            className="shadow appearance-none border border-blue-300 rounded w-1/4 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Search by ID number"
            value={inputValue}
            onChange={handleChange}
          />
          <button
            onClick={navigateToInfo}
            className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 rounded"
          >
            Search
          </button>
        </div>
        <p className="mb-3 text-[#746b54]  tracking-widest font-serif text-center text-base">
          Information: This website provides information about our employees,
          search anyone with their ID or click on 'Get Info' to know about them.
          :)
        </p>
      </div>
      <div className="mt-2">
        <ul className="grid grid-cols-4">
          {data.map((value: any) => (
            <li key={value.id}>
              <div className="max-w-sm rounded overflow-hidden ml-4 mt-4 shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {value.employee_name}
                  </div>
                  <img src={"./tree.jpeg"}></img>
                  <button
                    onClick={() => handleDiv(value.id)}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 my-2 rounded"
                  >
                    Get Info
                  </button>
                  <button
                    onClick={() => handleDelete(value.id)}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 my-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Landing;
