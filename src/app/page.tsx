"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gamepad2, Users, Trophy, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 fixed w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Gamepad2 className="mr-2" />
            MiniGame Hub
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/games" className="hover:underline">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-16 bg-gray-100">
        <section className="bg-white text-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to MiniGame Hub
            </h1>
            <p className="text-xl mb-8">
              Play exciting multiplayer mini-games with friends!
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {game.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <Users className="mr-1" size={16} />
                        {game.players} players
                      </span>
                      <Button variant="outline" size="sm" onClick={() => router.push(game.redirect)}>
                        Play Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Why Choose MiniGame Hub?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Users className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Multiplayer Fun</h3>
                <p className="text-muted-foreground">
                  Play with friends or make new ones online
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Trophy className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">
                  Competitive Leaderboards
                </h3>
                <p className="text-muted-foreground">
                  Climb the ranks and show off your skills
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Quick Matches</h3>
                <p className="text-muted-foreground">
                  Jump into games instantly, no waiting
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2023 MiniGame Hub. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:underline mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const games = [
  {
    id: 1,
    name: "Tic-Tac-Toe",
    description: "Classic Tic-Tac-Toe with a multiplayer twist!",
    players: "2",
    image: "/tictactoe.jpeg",
    redirect: "/tic-tac-toe",
  },
  {
    id: 2,
    name: "Word Blitz",
    description: "Form words faster than your opponents in this word game.",
    players: "2-6",
    image: "/placeholder.svg?height=200&width=400",
    redirect: "/tic-tac-toe",
  },
  {
    id: 3,
    name: "Pixel Painters",
    description: "Collaborative drawing game. Create masterpieces together!",
    players: "2-8",
    image: "/placeholder.svg?height=200&width=400",
    redirect: "/tic-tac-toe",
  },
  {
    id: 4,
    name: "Quiz Quest",
    description: "Test your knowledge against others in various categories.",
    players: "2-10",
    image: "/placeholder.svg?height=200&width=400",
    redirect: "/tic-tac-toe",
  },
  {
    id: 5,
    name: "Speed Clickers",
    description: "Click faster than your opponents to win!",
    players: "2-4",
    image: "/placeholder.svg?height=200&width=400",
    redirect: "/tic-tac-toe",
  },
  {
    id: 6,
    name: "Memory Match",
    description: "Find matching pairs in this multiplayer memory game.",
    players: "2-4",
    image: "/placeholder.svg?height=200&width=400",
    redirect: "/tic-tac-toe",
  },
];
