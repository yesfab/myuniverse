/**
 * TYPES ET INTERFACES
 */

// src/types/index.ts

// Types pour la collection de musique
export interface Track {
  title: string;
  duration: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  year: number;
  genre: string[];
  cover: string;
  vinylColor?: string;
  vinyl?: string;
  tracks?: Track[];
  favorite?: boolean;
  notes?: string;
}

// Types pour la collection de films
export interface Movie {
  id: string;
  title: string;
  director: string;
  year: number;
  genre: string[];
  poster: string;
  duration: number; // en minutes
  rating: number;
  favorite?: boolean;
  notes?: string;
}

// Types pour la collection de livres
export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string[];
  cover: string;
  pages: number;
  rating: number;
  favorite?: boolean;
  notes?: string;
}

// Types pour la collection de photos
export interface Photo {
  id: string;
  title: string;
  date: string;
  location?: string;
  camera?: string;
  tags: string[];
  url: string;
  favorite?: boolean;
  notes?: string;
}

// Type pour les dossiers
export interface Folder {
  id: string;
  title: string;
  color: string;
  icon: string;
  path: string;
}
