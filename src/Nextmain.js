import React from 'react';
import 'animate.css/animate.min.css';

const Nextmain = ({ arr, handleCheck, handleDelete }) => {
  return (
    <div className="w-full min-h-[350px] bg-black bg-opacity-30 flex justify-center p-4">
      <div className="min-h-[100px] bg-black mt-4 rounded-3xl flex flex-col items-center space-y-4 w-full max-w-2xl p-6">
        <h1 className="text-white font-bold text-3xl">Get Things Done!</h1>
        <ul className="w-full flex flex-col space-y-4">
          {arr.map(({ id, checkbox, item }) => (
            <li
              className="flex items-center animate__animated animate__backInRight"
              key={id}
            >
              <input
                type="checkbox"
                className="w-6 h-6"
                checked={checkbox}
                onChange={() => handleCheck(id)}
                aria-label={`Toggle ${item}`}
              />
              <label className="text-white text-xl ml-4">{item}</label>
              <button
                className="bg-white text-black ml-auto font-bold py-2 px-4 rounded-3xl"
                onClick={() => handleDelete(id)}
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nextmain