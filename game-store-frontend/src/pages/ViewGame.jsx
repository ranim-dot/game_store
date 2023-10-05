import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewGame = () => {
    const[game, setGame] = useState({
        name:'',
        desc:'',
        release_data:'',
        quantity:''
    })

 const {id} = useParams();

 useEffect (() => {
    LoadGame()
 },[])

const LoadGame = async () =>{
    const result = await axios.get(`http://localhost:8080/games/${id}`)
    setGame(result.data)
}

  return (
    <div className='flex justify-center mt-3  w-[83%]'>
        <div className='sidebar_bg rounded-md justify-center items-center shadow-md h-[70%] w-[50%] flex flex-col '>
           <h1 className='text-white  text-xl uppercase py-6 font-bold font-satoshi'>View the {game.name} game</h1>
           <p>Name : {game.name}</p>
           <p>description : {game.desc}</p>
           <p>Quantity : {game.quantity}</p>
           <p>Release Date : {game.release_data}</p>

        </div>
    </div>
  )
}

export default ViewGame