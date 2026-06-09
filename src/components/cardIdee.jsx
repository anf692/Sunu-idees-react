import React from "react";

const CardIdee = (props) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-72 min-h-52 rounded-xl bg-white shadow-lg p-5 flex flex-col gap-3 hover:scale-105 transition-transform">
        <span className="text-sm font-bold text-red-500">#{props.id}</span>

        <h2 className="text-xl font-semibold text-gray-800">{props.titre}</h2>

        <p className="text-gray-600 flex-1">{props.description}</p>

        <button
          onClick={() => alert(`Voté pour ${props.id}`)}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voter
        </button>
      </div>
    </div>
  );
};

export default CardIdee;
