import { useAtom } from "jotai";
import React from "react";
import { currentResourceAtom, viewerStateAtom } from "store/resourceStore";
import { TypedIconButton } from "typed-design-system";

export const Viewer = () => {
  const [currentResource] = useAtom(currentResourceAtom);

  const viewerRendererWithType = (
    type: undefined | string,
    url: undefined | string,
    name: undefined | string
  ) => {
    switch (type) {
      case "url":
        return <UrlViewer url={url} />;
      case "img":
        return <ImgViewer url={url} name={name} />;
    }
  };

  return (
    <div className="w-[calc(100vw-280px)] min-h-screen z-[5]">
      {viewerRendererWithType(
        currentResource.type,
        currentResource.url,
        currentResource.name
      )}
    </div>
  );
};

const UrlViewer: React.FC<{
  url: undefined | string;
}> = ({ url }) => {
  const [, setViewerState] = useAtom(viewerStateAtom);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[50px] p-[15px] flex justify-between bg-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
        <span className="text-sm">{url}</span>
        <TypedIconButton
          onClick={() => {
            setViewerState(false);
          }}
          size={25}
          icon="close_19"
          className="!w-[19px] !h-[19px] mt-[1px]"
        />
      </div>
      <iframe src={url} className="bg-[white] min-h-[calc(100vh-50px)] p-2" />
    </div>
  );
};

const ImgViewer: React.FC<{
  url: undefined | string;
  name: undefined | string;
}> = ({ url, name }) => {
  const [, setViewerState] = useAtom(viewerStateAtom);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[50px] p-[15px] flex justify-between bg-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
        <span className="text-sm">{name}</span>
        <TypedIconButton
          onClick={() => {
            setViewerState(false);
          }}
          size={25}
          icon="close_19"
          className="!w-[19px] !h-[19px] mt-[1px]"
        />
      </div>
      <div className="bg-[white] min-h-[calc(100vh-50px)] p-2 flex justify-center items-center">
        <img src={url} className="min-w-[50%] max-w-[75%]"></img>
      </div>
    </div>
  );
};
