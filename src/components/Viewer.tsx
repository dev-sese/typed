import { TypedIcon } from "typed-design-system";

const Viewer = () => {
  return (
    <div className="w-[calc(100vw-280px)] min-h-screen z-[5]  bg-[#F0F0F0]">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[50px] p-[15px] flex justify-between bg-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
          <span className="text-sm">url</span>
          <button className="mt-[1px]">
            <TypedIcon icon="close_19" className="w-[19px] h-[19px]" />
          </button>
        </div>
        <iframe
          src={"https://typed.do/"}
          className="bg-[white] min-h-[calc(100vh-50px)] p-2"
        />
      </div>
    </div>
  );
};

export default Viewer;
