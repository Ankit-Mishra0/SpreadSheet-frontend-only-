import React, { useState } from "react";

const SpreadSheet = () => {
  const [priority, setPriority] = useState(Array(100).fill(""));
  const [status, setStatus] = useState(Array(100).fill(""));
  const rows = Array.from({ length: 100 });

  return (
    <div className="overflow-x-auto">
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-23 items-center text-sm">
          <div className="col-span-1 h-10 flex items-center justify-center border border-gray-200">
            <input
              className="h-10 w-full text-center bg-gray-100"
              type="number"
              value={rowIndex + 1}
              readOnly
            />
          </div>

          <div className="col-span-4 border border-gray-200">
            <input className="h-10 w-full px-2" type="text" />
          </div>

          <div className="col-span-2 border border-gray-200">
            <input
              type="text"
              className="h-10 w-full px-2"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
            />
          </div>

          <div className="col-span-2 border border-gray-200">
            <select
              className={`h-10 w-full px-2 text-center text-sm font-semibold ${
                status[rowIndex] === "In-process"
                  ? "text-orange-300 "
                  : status[rowIndex] === "Blocked"
                  ? "text-red-500"
                  : status[rowIndex] === "Need to start"
                  ? "text-blue-300"
                  : status[rowIndex] === "Complete"
                  ? "text-green-500"
                  : "text-gray-500"
              }`}
              value={status[rowIndex] || ""}
              onChange={(e) => {
                const updated = [...status];
                updated[rowIndex] = e.target.value;
                setStatus(updated);
              }}
            >
              <option value=""></option>
              <option value="In-process">In-process</option>
              <option value="Need to start">Need to start</option>
              <option value="Complete">Complete</option>
              <option value="Blocked">Blocked</option>
            </select>
          </div>

          <div className="col-span-2 border border-gray-200">
            <input className="h-10 w-full px-2" type="text" />
          </div>

          <div className="col-span-2 border border-gray-200">
            <input className="h-10 w-full px-2" type="url" />
          </div>

          <div className="col-span-2 border border-gray-200">
            <input className="h-10 w-full px-2" type="text" />
          </div>

          <div className="col-span-2 border border-gray-200">
            <select
              className={`h-10 w-full px-2 font-medium text-center
      ${
        priority[rowIndex] === "High"
          ? "text-red-500"
          : priority[rowIndex] === "Medium"
          ? "text-yellow-600"
          : priority[rowIndex] === "Low"
          ? "text-blue-600"
          : "text-gray-500"
      }`}
              value={priority[rowIndex] || ""}
              onChange={(e) => {
                const updated = [...priority];
                updated[rowIndex] = e.target.value;
                setPriority(updated);
              }}
            >
              <option value=""></option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="col-span-2 border border-gray-200">
            <input
              type="text"
              className="h-10 w-full px-2"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
            />
          </div>

          <div className="col-span-2 border border-gray-200 flex justify-between items-center">
            <input className="h-10 w-full px-2" type="number" />
            <span className="text-gray-400">₹</span>
          </div>

          <div className="col-span-2 border border-gray-200 border-dotted h-10"></div>
        </div>
      ))}
    </div>
  );
};

export default SpreadSheet;
