import { useAtom } from "jotai";
import React from "react";
import { currentViewAtom } from "store/resourceStore";
import { TypedIconButton } from "typed-design-system";

const Resource: React.FC<{
  id: string;
  type: string;
  url: string;
  name: string;
  disabled: boolean;
}> = ({ id, type, url, name, disabled }) => {
  const [, setCurrentView] = useAtom(currentViewAtom);

  const resourceClickHandle = () => {
    setCurrentView(id, type, url, name);
  };

  return (
    <div
      className="w-full h-[90px] p-3 flex flex-col justify-between bg-white rounded-[10px]"
      onClick={resourceClickHandle}
    >
      {disabled ? (
        <p className="">{name}</p>
      ) : (
        <input
          value={name}
          disabled={disabled}
          className="bg-white focus:bg-[#F7F7F7] outline-[#38A5E1] px-2"
        />
      )}
      <div className="flex justify-end gap-2">
        <TypedIconButton
          size={25}
          icon="edit_19"
          className="!w-[19px] !h-[19px] object-contain"
        />
        <TypedIconButton
          size={25}
          icon="trash_19"
          className="!w-[19px] !h-[19px] object-contain"
        />
      </div>
    </div>
  );
};

export default Resource;
