import React from "react";
import game from '../images/game.png'

const Games = () => {
  return (
    <div className="flex flex-col items-center w-[83%] ">
      <table class="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs  uppercase bg-zinc-900 text-teal-400">
          <tr>
            <th className="px-6 py-5">Game</th>
            <th className="px-6 py-3">Release Date</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td>Malcolm Lockyer</td>
            <td className="flex h-14 justify-center items-center gap-4">
              <button className="w-20 h-10 border-2 border-blue-500 text-zinc-900">View</button>
              <button className="w-20 h-10 border-2 border-green-500 text-zinc-900">Edit</button>
              <button className="w-20 h-10 border-2 border-red-500 text-zinc-900"> Delete</button>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Witchy Woman
            </td>
            <td>The Eagles</td>
            <td className="flex h-14 justify-center items-center gap-4">
              <button className="w-20 h-10 border-2 border-blue-500 text-zinc-900">View</button>
              <button className="w-20 h-10 border-2 border-green-500 text-zinc-900">Edit</button>
              <button className="w-20 h-10 border-2 border-red-500 text-zinc-900"> Delete</button>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Shining Star
            </td>
            <td>Earth, Wind, and Fire</td>
            <td className="flex h-14 justify-center items-center gap-4">
              <button className="w-20 h-10 border-2 border-blue-500 text-zinc-900">View</button>
              <button className="w-20 h-10 border-2 border-green-500 text-zinc-900">Edit</button>
              <button className="w-20 h-10 border-2 border-red-500 text-zinc-900"> Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Games;
