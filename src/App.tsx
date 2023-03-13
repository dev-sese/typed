import { Viewer } from "components/Viewer";
import { List } from "components/List";
import { useAtom } from "jotai";
import { viewerStateAtom } from "store/resourceStore";

function App() {
  const [viewerState] = useAtom(viewerStateAtom);

  return (
    <div className="flex  bg-[#F0F0F0]">
      <List></List>
      <div className="w-[1px] min-h-screen bg-[#C4C4C4]" />
      {viewerState && <Viewer />}
    </div>
  );
}

export default App;
