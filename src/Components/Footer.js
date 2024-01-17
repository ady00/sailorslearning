import "../App.css";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-white dark:text-cyan-800 bg-slate-100 dark:bg-gray-900 border-t border-dashed border-gray-300">
  <div className="max-w-7xl mx-auto flex justify-center flex-row-1">
    
    <div className="flex flex-col pt-11">
      <div className="text-gray-800 dark:text-gray-300 pb-8 ">
        <div className="mb-6">
          <div className="font-semibold">Sailors Learning 2024.</div>

          <p className="text-xs flex justify-left mt-2 mb-3">
            Made by Advay for Sailors Learning
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}
