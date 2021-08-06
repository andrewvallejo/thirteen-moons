import { covers } from "./cardCovers";

export const randomize = (items) => {
  return Math.floor(Math.random() * items.length);
}

export const createCover = () => covers[randomize(covers)]