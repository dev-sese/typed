import { atom } from "jotai";
import { v4 as uuidv4 } from "uuid";

export const resourceAtom = atom([
  {
    id: uuidv4(),
    url: "https://www.robinwieruch.de/react-libraries/",
  },
  {
    id: uuidv4(),
    url: "https://typed.blog/how-to-write-a-better-research-paper-faster/",
  },
]);
