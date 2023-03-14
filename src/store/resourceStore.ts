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

export const toastAtom = atom<{
  show: boolean;
  type: undefined | string;
  message: undefined | string;
}>({ show: false, type: undefined, message: undefined });

export const currentToastAtom = atom(
  null,
  async (_get, set, type: string, message: string) => {
    set(toastAtom, { show: true, type: type, message: message });
  }
);

export const deleteResource = atom(null, (get, set, uuid: string) => {
  set(resourceAtom, () => {
    let resourceList = [...get(resourceAtom)];
    resourceList = resourceList.filter((resource) => resource.id !== uuid);
    return resourceList;
  });
});

export const editResourceName = atom(
  null,
  (get, set, uuid: string, changedName: string) => {
    const currentIndex = get(resourceAtom).findIndex(
      (resource: { id: string; type: string; url: string; name: string }) =>
        resource.id === uuid
    );
    const currentList = [...get(resourceAtom)];
    currentList[currentIndex].name = changedName;
    set(resourceAtom, currentList);
  }
);
