import { useState } from "react";
import "./App.css";
import ExportExcel from "./export";
function App() {
  const [visibleColumns, setVisibleColumns] = useState([
    { header: "Id", key: "id", width: 10 },
    { header: "Name", key: "name", width: 20 },
    { header: "Dropdown", key: "multiplekey", width: 20 },
  ]);
  const [checkboxA, setCheckboxA] = useState(false);
  const [checkboxB, setCheckboxB] = useState(false);

  const suppliedData = [
    {id : 1, name: "Document 1", multipleKey: "BFD", checkboxA: "Checkbox Document-1-A", checkboxB: "Checkbox Document-1-B",},
    {id : 2, name: "Document 2", multipleKey: "BOD", checkboxA: "Checkbox Document-2-A", checkboxB: "Checkbox Document-2-B",}
  ]
  return (
    <div className="h-screen">
      <div className="bg-white dark:bg-gray-800 h-screen">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 h-screen object-middle items-center flex">
          <div className="m-auto">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">exceljs example</span>
            </h2>

            <div className="lg:mt-0 lg:flex-shrink-0">

              <div className="flex w-full text-white mt-4">
                <div className="pl-10">
                  <label htmlFor="" className="mr-5">
                    Column A
                  </label>
                  <input
                    type={"checkbox"}
                    checked={checkboxA}
                    onChange={(e) => {
                      setCheckboxA(e.target.checked);
                      if (e.target.checked) {
                        setVisibleColumns((prev) => [
                          ...prev,
                          {
                            header: "Dynamic Column A",
                            key: "checkboxA",
                            width: 40,
                          },
                        ]);
                      } else {
                        setVisibleColumns((prev) => [
                          ...prev.filter((item) => item.key !== "checkboxA"),
                        ]);
                      }
                    }}
                  />
                </div>
                <div className="pl-10">
                  <label htmlFor="" className="mr-5">
                    Column B
                  </label>
                  <input
                    type={"checkbox"}
                    checked={checkboxB}
                    onChange={(e) => {
                      setCheckboxB(e.target.checked);
                      if (e.target.checked) {
                        setVisibleColumns((prev) => [
                          ...prev,
                          {
                            header: "Dynamic Column B",
                            key: "checkboxB",
                            width: 40,
                          },
                        ]);
                      } else {
                        setVisibleColumns((prev) => [
                          ...prev.filter((item) => item.key !== "checkboxB"),
                        ]);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="mt-12 inline-flex rounded-md shadow">
                {/* <input type={'checkbox'} value={checkboxA} onChange={setCheckboxB} /> */}
                <button
                  type="button"
                  className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  onClick={() => ExportExcel(visibleColumns, suppliedData)}
                >
                  Download Excel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
