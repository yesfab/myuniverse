/**
 * COMPOSANTS POUR LES DOSSIERS
 */

// src/components/ui/Folder.tsx
import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Folder as FolderType } from "@/types";

interface FolderProps {
  folder: FolderType;
  index: number;
  delay?: number;
}

export default function Folder({ folder, index, delay = 0 }: FolderProps) {
  const folderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation d'entrée du dossier
    if (folderRef.current) {
      gsap.from(folderRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: delay + index * 0.1,
        ease: "power3.out",
      });
    }
  }, [index, delay]);

  return (
    <Link href={folder.path}>
      <div
        ref={folderRef}
        className="folder cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div
          className="h-64 rounded-lg shadow-md flex flex-col items-center justify-center"
          style={{ backgroundColor: folder.color }}
        >
          <div className="text-6xl mb-4">{folder.icon}</div>
          <h2 className="text-2xl font-semibold text-white">{folder.title}</h2>
        </div>
      </div>
    </Link>
  );
}

// Utilisation dans pages/index.tsx
// import Folder from '@/components/ui/Folder';
// ...
// {folders.map((folder, index) => (
//   <Folder key={folder.id} folder={folder} index={index} />
// ))}
