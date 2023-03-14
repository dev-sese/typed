import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import {
  currentViewAtom,
  deleteResource,
  editResourceName,
} from "store/resourceStore";
import { TypedIconButton } from "typed-design-system";

const Resource: React.FC<{
  id: string;
  type: string;
  url: string;
  name: string;
  disabled: boolean;
}> = ({ id, type, url, name, disabled }) => {
  const [, setCurrentView] = useAtom(currentViewAtom);
  const [, setDeteleResource] = useAtom(deleteResource);
  const [, setEditResourceName] = useAtom(editResourceName);

  const [inputDisable, setInputDisable] = useState(disabled);

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(name);

  const resourceClickHandler = () => {
    setCurrentView(id, type, url, name);
  };

  const editClickHandler = () => {
    setInputDisable(false);
  };

  const deleteClickHandler = () => {
    setDeteleResource(id);
  };

  const saveOnBlurHandler = () => {
    setInputDisable(true);
    setEditResourceName(id, inputValue);
  };

  useEffect(() => {
    if (!inputDisable && inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [inputDisable]);

  return (
    <div className="w-full h-[90px] p-3 flex flex-col justify-between bg-white rounded-[10px]">
      <div onClick={resourceClickHandler} className="w-full cursor-pointer">
        {inputDisable ? (
          <p>{name}</p>
        ) : (
          <input
            ref={inputRef}
            value={inputValue}
            disabled={inputDisable}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={saveOnBlurHandler}
            className="w-full bg-white focus:bg-[#F7F7F7] outline-[#38A5E1] px-2 cursor-pointer"
          />
        )}
      </div>
      <div className="flex justify-end gap-2">
        <TypedIconButton
          onClick={editClickHandler}
          size={25}
          icon="edit_19"
          className="!w-[19px] !h-[19px] object-contain"
        />
        <TypedIconButton
          onClick={deleteClickHandler}
          size={25}
          icon="trash_19"
          className="!w-[19px] !h-[19px] object-contain"
        />
      </div>
    </div>
  );
};

export default Resource;
