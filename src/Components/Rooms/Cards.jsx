// import React from 'react';

// const Cards = ({room}) => {
//     console.log(room);
//     const {location, image , price, title, to, host , bathrooms, bedrooms, category, description, from, guests}= room;
//     return (
//         <div className='m-4 bg-cyan-400 p-2 rounded-md'>
//             <img src={image} alt=""  className='rounded-md'/>
//             <p>{title}</p>
//             <h1>{location}</h1>
//             <p>{host.name}</p>
//             <img src={host?.image} alt="" />
//         </div>
//     );
// };

// export default Cards;
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ room }) => {

    console.log(room);
        const {location, image , price, title, to, host , bathrooms, bedrooms, category, description, from, guests}= room;


  return (
    
    <div>
        <Link to={`/`} className="col-span-1 cursor-pointer group">
        <div className="flex flex-col gap-2 w-full">
            <div className="  aspect-square  w-full  relative  overflow-hidden  rounded-xl">
                <img className="object-cover h-full w-full group-hover:scale-110 transition" src={image} alt="Room"/>
                <div className=" absolute top-3 right-3">{}</div>
            </div>
            <div className="font-semibold text-lg">{location}</div>
            <div className="flex  items-center justify-center gap-3">
                <div className="font-semibold text-neutral-500">5 nights </div>
                {/* <p>{from}</p> */}
            </div>
            <div className="flex flex-row justify-center items-center gap-1">
                <div className="font-semibold ">$ {price}</div>
                <div className="font-light ">night</div>
            </div>
        </div>
        </Link>

    </div>
  );
};

export default Card;
