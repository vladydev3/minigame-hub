"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Users } from "lucide-react";
import Link from "next/link";

export default function TicTacToe() {
  const [gameMode, setGameMode] = useState<"local" | "online" | null>(null);
  const [roomCode, setRoomCode] = useState("");

  const [cells, setCells] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  const [winner, setWinner] = useState<"X" | "0" | null>(null);

  const resetStates = () => {
    setGameMode(null);
    setCells(Array(9).fill(null));
    setTurn("X");
    setWinner(null);
  }

  function checkWinner(cells: any[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], 
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], 
      [0, 4, 8],
      [2, 4, 6], 
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  }

  const renderGameBoard = () => (
    <div className="grid grid-cols-3 gap-2 max-w-[300px] mx-auto">
      {[...Array(9)].map((_, index) => (
        <Button
          onClick={() =>
            setCells((prev) => {
              if (cells[index] === null && checkWinner(cells) === null) {
                const newCells = [...prev];
                newCells[index] = turn;
                setTurn(turn === "X" ? "0" : "X")
                if (checkWinner(newCells)) {
                  setWinner(checkWinner(newCells));
                }
                return newCells;
              }
              return prev;
            })
          }
          key={index}
          variant="outline"
          className="h-24 text-4xl font-bold"
          aria-label={`Grid position ${index + 1}`}
        >
          {cells[index]}
        </Button>
      ))}
    </div>
  );

  const showWinner = () => (
    <h2 className="text-2xl font-bold text-center">{winner} Has won</h2>
  );

  const renderLocalGame = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Local Game</h2>
      {winner !== null && showWinner()}
      {renderGameBoard()}
      <div className="text-center">
        <p className="text-lg font-semibold mb-2">Current Turn: {turn}</p>
        <Button variant="secondary" onClick={() => resetStates()}>
          New Game
        </Button>
      </div>
    </div>
  );

  const renderOnlineGame = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Online Game</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Input
          type="text"
          placeholder="Enter room code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          className="max-w-[200px]"
        />
        <Button onClick={() => console.log("Join room:", roomCode)}>
          Join Room
        </Button>
      </div>
      <div className="text-center space-x-4">
        <Button onClick={() => console.log("Create new room")}>
          Create New Room
        </Button>
        <Button onClick={() => setGameMode(null)}>Go Back</Button>
      </div>
      <p className="text-center text-muted-foreground">
        Share the room code with a friend to play online!
      </p>
    </div>
  );

  const renderGameModeSelection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Choose Game Mode</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          onClick={() => setGameMode("local")}
          className="w-full sm:w-auto"
        >
          <Users className="mr-2" />
          Local Game
        </Button>
        {/* <Button
          onClick={() => setGameMode("online")}
          className="w-full sm:w-auto"
        >
          <Globe className="mr-2" />
          Online Game
        </Button> */}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Tic-Tac-Toe</h1>

        {!gameMode && renderGameModeSelection()}
        {gameMode === "local" && renderLocalGame()}
        {gameMode === "online" && renderOnlineGame()}
      </main>

      <footer className="bg-background border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; 2023 MiniGame Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
