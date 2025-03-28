/**
 * PAGE D'ACCUEIL
 */

// src/pages/index.tsx
import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import type { Folder } from "@/types";

export default function Home() {
  const foldersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation d'entrée des dossiers
    gsap.from(".folder", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  // Liste des dossiers
  const folders: Folder[] = [
    {
      id: "music",
      title: "Musique",
      color: "#E57373",
      icon: "🎵",
      path: "/music",
    },
    {
      id: "movies",
      title: "Films & Séries",
      color: "#64B5F6",
      icon: "🎬",
      path: "/movies",
    },
    {
      id: "books",
      title: "Livres",
      color: "#81C784",
      icon: "📚",
      path: "/books",
    },
    {
      id: "photography",
      title: "Photographie",
      color: "#FFD54F",
      icon: "📷",
      path: "/photography",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Mon Univers Culturel
      </h1>

      <div
        ref={foldersRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {folders.map((folder) => (
          <Link key={folder.id} href={folder.path}>
            <div
              className="folder cursor-pointer transition duration-300 hover:scale-105"
              style={{ transform: "translateZ(0)" }}
            >
              <div
                className="h-64 rounded-lg shadow-lg flex flex-col items-center justify-center"
                style={{ backgroundColor: folder.color }}
              >
                <div className="text-6xl mb-4">{folder.icon}</div>
                <h2 className="text-2xl font-semibold text-white">
                  {folder.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
