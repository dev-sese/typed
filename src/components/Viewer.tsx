import { useAtom } from "jotai";
import { currentResourceAtom, viewerStateAtom } from "store/resourceStore";
import { TypedIconButton } from "typed-design-system";

const Viewer = () => {
  const [, setViewerState] = useAtom(viewerStateAtom);
  const [currentResource] = useAtom(currentResourceAtom);

  return (
    <div className="w-[calc(100vw-280px)] min-h-screen z-[5]">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[50px] p-[15px] flex justify-between bg-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
          <span className="text-sm">{currentResource.url}</span>
          <TypedIconButton
            onClick={() => {
              setViewerState(false);
            }}
            size={25}
            icon="close_19"
            className="!w-[19px] !h-[19px] mt-[1px]"
          />
        </div>
        <iframe
          src={currentResource.url}
          className="bg-[white] min-h-[calc(100vh-50px)] p-2"
        />
      </div>
    </div>
  );
};

export default Viewer;
