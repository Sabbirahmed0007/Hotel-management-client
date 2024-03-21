import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Container from '../Shared/Container';

const Rooms = () => {

    const [rooms, setRooms]= useState([]);


    useEffect(()=>{
        fetch(`./rooms.json`)
        .then(res=> res.json())
        .then(data => setRooms(data))
    },[setRooms])



    return (
        <div>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center  gap-5'>
                    {rooms.map(room=><Cards key={room._id} room={room}></Cards>)}
                </div>

            </Container>
        </div>
    );
};

export default Rooms;