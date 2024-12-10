"use client";

import { useState } from "react";
import About from "./pages/About";
import NeededMaterials from "./pages/NeededMaterials";
import Facts from "./pages/Facts";

export default function Page() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "NeededMaterials":
        return <NeededMaterials />;
      case "Facts":
        return <Facts />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <header className="bg-teal-300">
        <h1 className="font-bold text-5xl text-pink-400 text-center pt-2 mb-2">
          Axolotl Association
        </h1>
        <img
          src="https://images.pexels.com/photos/2168831/pexels-photo-2168831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Axolotl_Header"
          className="w-96 flex m-auto h-auto"
        />

        <nav className="text-teal-300 flex justify-center p-1 mt-1">
          <button
            className="bg-white font-bold rounded hover:bg-gray-200 hover:text-teal-500 p-3 m-4"
            onClick={() => setCurrentPage("About")}
          >
            About
          </button>
          <button
            className="bg-white font-bold rounded hover:bg-gray-200 hover:text-teal-500 p-3 m-4"
            onClick={() => setCurrentPage("NeededMaterials")}
          >
            Needed Materials
          </button>
          <button
            className="bg-white font-bold rounded hover:bg-gray-200 hover:text-teal-500 p-3 m-4"
            onClick={() => setCurrentPage("Facts")}
          >
            Facts
          </button>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}
