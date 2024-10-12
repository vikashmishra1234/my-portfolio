import React from "react";

const Card = ({ title, discription,link1,link2, image }) => {
  return (
    <div className="relative pt-2 min-h-[400px] sm:min-h-[500px]  flex flex-col my-6 bg-black shadow-sm border border-slate-900 rounded-lg w-[90vw] sm:w-96">
  <div className="relative h-56 w-full m-2.5 overflow-hidden text-white rounded-md">
    <img src={image} className="h-full w-[94%]" alt="card-image" />
  </div>
  <div className="p-4">
    <h6 className="mb-2 text-white text-2xl font-semibold">
      {title}
    </h6>
    <p className="text-white text-[20px] leading-normal font-light">
      {discription}
    </p>
  </div>
  <div className="px-4 pb-4 pt-0 mt-2">
    <a target="_blank" href={link1} className="rounded-md text-[19px]  bg-slate-800 mr-4 py-2 px-4 border border-transparent text-center  text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      view live
    </a>
    <a target="_blank" href={link2} className="rounded-md text-[19px]  bg-slate-800 mr-4 py-2 px-4 border border-transparent text-center  text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      source code
    </a>
  </div>
</div>  
  );
};

export default Card;
