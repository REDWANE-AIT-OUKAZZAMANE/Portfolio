import { IconType } from 'react-icons';
import { FiCamera, FiMusic, FiBook, FiCode, FiGlobe } from "react-icons/fi";
import { IoGameController } from "react-icons/io5";

export interface Hobby {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

export const hobbies: Hobby[] = [
  {
    id: 1,
    title: "Photography",
    description: "I enjoy capturing moments through my lens, especially landscapes and street photography. Photography helps me see the world from different perspectives and appreciate the beauty in everyday scenes.",
    icon: FiCamera
  },
  {
    id: 2,
    title: "Music",
    description: "Music is a big part of my life. I enjoy playing guitar and discovering new genres and artists. My playlist ranges from classical to electronic music, depending on my mood and what I'm working on.",
    icon: FiMusic
  },
  {
    id: 3,
    title: "Reading",
    description: "I'm an avid reader with interests spanning from science fiction and fantasy to technical books and biographies. Reading helps me unwind and continuously learn new things outside of my professional field.",
    icon: FiBook
  },
  {
    id: 4,
    title: "Side Projects",
    description: "Beyond my professional work, I enjoy coding personal projects that let me experiment with new technologies and creative ideas without constraints. These projects are my playground for innovation.",
    icon: FiCode
  },
  {
    id: 5,
    title: "Traveling",
    description: "Exploring new places, experiencing different cultures, and meeting people from around the world is something I'm passionate about. Each journey brings new perspectives and inspirations to my life and work.",
    icon: FiGlobe
  },
  {
    id: 6,
    title: "Gaming",
    description: "Gaming is my way to unwind and explore virtual worlds. I enjoy both competitive multiplayer games and immersive story-driven experiences. Gaming has taught me problem-solving skills and the value of persistence.",
    icon: IoGameController
  }
]; 