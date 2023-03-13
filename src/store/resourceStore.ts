import { atom } from "jotai";
import { v4 as uuidv4 } from "uuid";

export const resourceAtom = atom([
  {
    id: uuidv4(),
    type: "url",
    url: "https://www.robinwieruch.de/react-libraries/",
    name: "https://www.robinwieruch.de/react-libraries/",
  },
  {
    id: uuidv4(),
    type: "url",
    url: "https://typed.blog/how-to-write-a-better-research-paper-faster/",
    name: "https://typed.blog/how-to-write-a-better-research-paper-faster/",
  },
  {
    id: uuidv4(),
    type: "img",
    url: "",
    name: "킥킥나는url아닌데...",
  },
]);

export const viewerStateAtom = atom(false);

export const currentResourceAtom = atom<{
  id: undefined | string;
  type: undefined | string;
  url: undefined | string;
  name: undefined | string;
}>({
  id: undefined,
  type: undefined,
  url: undefined,
  name: undefined,
});

export const currentViewAtom = atom(
  null,
  async (_get, set, id: string, type: string, url: string, name: string) => {
    set(viewerStateAtom, false);
    set(currentResourceAtom, { id: id, type: type, url: url, name: name });
    set(viewerStateAtom, true);
  }
);
