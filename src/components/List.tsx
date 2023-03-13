import Resource from "components/Resource";
import { useAtom } from "jotai";
import React, { useRef } from "react";
import { useState } from "react";
import { resourceAtom } from "store/resourceStore";
import {
  colors,
  TypedButton,
  TypedButtonVariant,
  TypedIconButton,
} from "typed-design-system";

export const List = () => {
  const [resourceList] = useAtom(resourceAtom);

  const [modalState, setModalState] = useState(false);

  const openUrlModal = () => {
    setModalState(true);
  };

  return (
    <div className="w-[280px] min-h-screen bg-[#F7F7F7]">
      <div className="w-full flex flex-col">
        <div
          id="button-area"
          className="h-[50px] flex justify-center gap-[10px] p-[10px] drop-shadow-[0_2px_5px_rgba(0,0,0,0.1)] bg-white"
        >
          <TypedButton
            onClick={openUrlModal}
            height={32}
            variant={TypedButtonVariant.outlined}
            backgroundColor={colors.gray90()}
            fontColor={colors.gray0()}
            className="w-[125px] !h-[30px] !text-xs"
          >
            URL 추가
          </TypedButton>
          <TypedButton
            height={32}
            variant={TypedButtonVariant.outlined}
            backgroundColor={colors.gray90()}
            fontColor={colors.gray0()}
            className="w-[125px] !h-[30px]"
          >
            이미지 추가
          </TypedButton>
        </div>
        {modalState && <UrlModal setModalState={setModalState} />}
        <div className="flex flex-col p-[10px] gap-[10px]">
          {resourceList.map((resource) => (
            <Resource key={resource.id} url={resource.url} disabled={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

const UrlModal: React.FC<{
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setModalState }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputFocusHandle = () => {
    inputRef.current?.focus();
  };

  const closeUrlModal = () => {
    setModalState(false);
  };

  return (
    <div
      className="absolute top-[42px] left-[10px] z-10 p-[5px] w-[260px] h-[40px] 
        bg-white border rounded-[5px] border-[#E5E5E5] drop-shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
    >
      <div
        className={`w-full h-full bg-[#F7F7F7] p-2 flex justify-between gap-2
          border rounded-[3px] border-[##F7F7F7]`}
        onClick={inputFocusHandle}
      >
        <input
          ref={inputRef}
          value={"https://"}
          className="h-100 bg-[#F7F7F7] outline-0 text-xs"
        />
        <TypedIconButton
          onClick={closeUrlModal}
          size={25}
          icon="close_19"
          className="!w-[12px] !h-[12px] object-contain"
        />
      </div>
    </div>
  );
};
