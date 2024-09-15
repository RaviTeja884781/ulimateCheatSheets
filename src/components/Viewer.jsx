import React, { useState } from "react";
import SyntaxHighLighter from "./SyntaxHighLighter";

const Viewer = ({ data }) => {
  const { title, desc, type, sheets } = data;
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSheets = sheets
    .map((category) => ({
      ...category,
      sheet: category.sheet.filter(
        (item) =>
          item.sheetDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.snippet.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.sheet.length > 0);
  return (
    <div className="p-4 mx-auto">
      <div className="flex  flex-col justify-center items-center p-5">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{title}</h1>
        <p className="mb-6 text-gray-600">{desc}</p>
      </div>
      <input
        type="search"
        placeholder="Search tags..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {sheets.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeCategory === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-sm"
            }`}
            onClick={() =>
              setActiveCategory(activeCategory === index ? null : index)
            }
          >
            {category.category}
          </button>
        ))}
      </div>

      {filteredSheets.map((category, index) => (
        <div
          key={index}
          className={`mb-8 rounded-lg overflow-hidden ${
            activeCategory !== null && activeCategory !== index ? "hidden" : ""
          }`}
        >
          <div className="px-6 py-4 mb-5 bg-slate-50 shadow-sm rounded">
            <h2 className="text-2xl font-semibold text-gray-800">
              {category.category}
            </h2>
          </div>
          <div className=" flex flex-wrap justify-evenly gap-2 p-2">
            {category.sheet.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="bg-white rounded shadow-sm p-3 mb-6 w-96 "
              >
                <h3 className="text-lg mb-5 font-medium border-b-2 text-gray-700">
                  {item.sheetDesc}
                </h3>
                <SyntaxHighLighter code={item.snippet} language={type} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Viewer;
