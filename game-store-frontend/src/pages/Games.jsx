import React, { useEffect, useState } from "react";
import game from "../images/game.png";
import axios from "axios";
import { Link } from "react-router-dom";

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    LoadGames();
  }, []);

  const LoadGames = async () => {
    const result = await axios.get("http://localhost:8080/games");
    setGames(result.data);
  };

  const DeleteGame = async (id) => {
    await axios.delete(`http://localhost:8080/games/${id}`);
    LoadGames();
  };

  return (
    <div className="flex flex-col items-center w-[83%] ">
      <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs  uppercase bg-zinc-900 text-teal-400">
          <tr>
            <th className="px-6 py-5">Game</th>
            <th className="px-6 py-3">Release Date</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {game.name}
              </td>
              <td>{game.release_data}</td>
              <td className="flex h-14 justify-center items-center gap-4">
                <Link
                to={`/viewgame/${game.id}`}
                className="flex justify-center items-center w-20 h-10 border-2 border-blue-500 text-zinc-900">
                  View
                </Link>
                <Link
                to={`/editgame/${game.id}`}
                className="flex justify-center items-center w-20 h-10 border-2 border-green-500 text-zinc-900">
                  Edit
                </Link>
                <button 
                onClick={() => DeleteGame(game.id)}
                className="w-20 h-10 border-2 border-red-500 text-zinc-900">
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Games;
