import Resource from "components/Resource";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { currentToastAtom, resourceAtom } from "store/resourceStore";
import {
  colors,
  TypedButton,
  TypedButtonVariant,
  TypedIconButton,
} from "typed-design-system";
import { v4 as uuidv4 } from "uuid";

const ALLOW_FILE_EXTENSION = "png, jpg";
const URL_SCHEME_CONST = "https://";

export const List = () => {
  const [resourceList, setResourceList] = useAtom(resourceAtom);
  const [, setToast] = useAtom(currentToastAtom);

  const [modalState, setModalState] = useState(false);

  const openUrlModal = () => {
    setModalState(true);
  };

  const fileInput = useRef<HTMLInputElement>(null);

  const fileUploadHandler = () => {
    if (fileInput.current !== null) {
      fileInput.current.click();
    }
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const imgFile = (target.files as FileList)[0];

    if (imgFile === undefined) {
      return;
    }

    if (!fileExtensionValid(imgFile)) {
      target.value = "";
      alert(
        `업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSION}]`
      );
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(imgFile);
    reader.addEventListener("load", () => {
      setTimeout(() => {
        if (setRandomSuccess()) {
          setResourceList([
            {
              id: uuidv4(),
              type: "img",
              url: typeof reader.result === "string" ? reader.result : "",
              name: imgFile.name,
            },
            ...resourceList,
          ]);
          setToast("success", "등록에 성공했어요");
        } else {
          setToast("fail", "등록에 실패했어요");
        }
      }, getRandomDelayTime());
    });
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
            onClick={fileUploadHandler}
            height={32}
            variant={TypedButtonVariant.outlined}
            backgroundColor={colors.gray90()}
            fontColor={colors.gray0()}
            className="w-[125px] !h-[30px]"
          >
            이미지 추가
            <input
              type={"file"}
              ref={fileInput}
              onChange={inputHandler}
              id="imgUploader"
              className="hidden"
            />
          </TypedButton>
        </div>
        {modalState && <UrlModal setModalState={setModalState} />}
        <div className="flex flex-col p-[10px] gap-[10px]">
          {resourceList.map((resource) => (
            <Resource
              key={resource.id}
              id={resource.id}
              type={resource.type}
              url={resource.url}
              name={resource.name}
              disabled={true}
            />
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

  const [inputValue, setInputValue] = useState("");
  const [resourceList, setResourceList] = useAtom(resourceAtom);
  const [, setToast] = useAtom(currentToastAtom);

  const inputFocusHandle = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  const inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const enterPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let inputUrl = replaceYoutubeUrl(URL_SCHEME_CONST + inputValue);
      setTimeout(() => {
        if (setRandomSuccess()) {
          setResourceList([
            {
              id: uuidv4(),
              type: "url",
              url: inputUrl,
              name: inputUrl,
            },
            ...resourceList,
          ]);
          setToast("success", "등록에 성공했어요");
        } else {
          setToast("fail", "등록에 실패했어요");
        }
      }, getRandomDelayTime());
    }
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
        className={`w-full h-full bg-[#F7F7F7] flex justify-between gap-2
          border rounded-[3px] border-[##F7F7F7]`}
        onClick={inputFocusHandle}
      >
        <div className="flex ml-2">
          <input
            value={URL_SCHEME_CONST}
            readOnly
            className="w-10 h-100 bg-[#F7F7F7] outline-0 text-xs p-0"
          />
          <input
            ref={inputRef}
            value={inputValue}
            onChange={inputValueHandler}
            onKeyDown={enterPressHandler}
            className="h-full bg-[#F7F7F7] outline-0 text-xs p-0 m-0"
          />
        </div>
        <div className="flex justify-center items-center mr-2">
          <TypedIconButton
            onClick={closeUrlModal}
            size={25}
            icon="close_19"
            className="!w-[12px] !h-[12px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const fileExtensionValid = ({ name }: { name: string }): boolean => {
  const extension = removeFileName(name);

  if (!(ALLOW_FILE_EXTENSION.indexOf(extension) > -1) || extension === "") {
    return false;
  }

  return true;
};

const removeFileName = (originalFileName: string): string => {
  const lastIndex = originalFileName.lastIndexOf(".");
  if (lastIndex < 0) {
    return "";
  }
  return originalFileName.substring(lastIndex + 1).toLowerCase();
};

const replaceYoutubeUrl = (url: string): string => {
  let returnUrl = url;
  const re = /watch\?v=([\w-]+)/g;

  if (url.includes("https://www.youtube.com")) {
    const youtubeID = re.exec(url);
    console.log(youtubeID);
    returnUrl = `https://www.youtube.com/embed/${
      youtubeID ? youtubeID[1] : ""
    }`;
  }
  return returnUrl;
};

const getRandomDelayTime = (): number => {
  let min = 3;
  let max = 10;
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 100;
};

const setRandomSuccess = (): boolean => {
  let randomPercentage = Math.random();
  let result = false;
  if (randomPercentage < 0.8) {
    return true;
  }

  return result;
};
