import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        console.log(response.data.results[0]);

        if (response.status == 200) {
          setData(response.data.results[0]);
        }
      } catch (error) {
        console.log(error.message || error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[400px] h-[200px] bg-gradient-to-tr from-[#37AFE1] to-white shadow-2xl drop-shadow-lg shadow-cyan-500/50  rounded-lg flex overflow-hidden border-double border-r-4 border-b-4 border-purple-600">
          {/* Left Section */}
          <div className="bg-gradient-to-tr from-pink-500 to-blue-500 p-4 pl-0 relative flex justify-center items-center rounded-r-full border-double border-t-4 border-r-4">
            <div className="bg-[#740938]  w-[120px] h-full relative flex justify-center items-center rounded-r-full">
              <div className="w-[100px] h-[100px] bg-white rounded-full overflow-hidden">
                <img
                  src={data?.picture.large}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className=" flex-grow p-4 relative">
            <div className="text-blue-950 flex gap-2 justify-start items-center">
              <h1 className="text-lg">{data?.name.title}</h1>
              <h1 className="text-2xl font-bold text-whita">
                {data?.name.first}
              </h1>
              <p className="text-2xl font-bold ">{data?.name.last}</p>
            </div>
            <div className="mt-4 text-blue-950 space-y-2 text-sm">
              <p className="text-2xl font-bold ">{data?.gender}</p>
              <p className="text-2xl font-bold">📞 {data?.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
