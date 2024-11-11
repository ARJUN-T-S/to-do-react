import React from 'react';
import './mp.css';


const Main = ({ text, handleText, handleWork,style,style2,handleYes,handleNo }) => {
  return (
    <div className="w-full min-h-[400px] bg-black bg-opacity-30 flex flex-wrap justify-center items-center">
      <div className={`w-1/2 min-h-[200px] bg-black ${style2} rounded-2xl`}>
        <form action="" className="flex flex-col flex-wrap justify-center items-center space-y-5 p-4">
          <h1 className="text-white text-2xl">ENTER YOUR WORKS TO BE DONE TODAY!!</h1>
          <input type="text" className="w-full" value={text} onChange={handleText} />
          <button className="text-black bg-white w-16 font-bold rounded-full p-2" onClick={handleWork}>ADD</button>
        </form>
      </div>
      <div className={`${style} w-1/2 h-[200px] bg-black prompttt rounded-2xl text-center `}>
      <h1 className='text-white text-4xl font-bold'>Do you want to add the pending tasks to your list</h1>
      <button className="text-black bg-white ml-4 rounded-xl w-16 p-2 font-bold" onClick={handleYes}>YES</button>
      <button className="text-black bg-white ml-4 rounded-xl w-16 p-2 font-bold" onClick={handleNo}>NO</button>
      </div>
    </div>
  );
};

export default Main;
