import { Viewer } from "components/Viewer";
import { List } from "components/List";
import { useAtom } from "jotai";
import { viewerStateAtom, toastAtom } from "store/resourceStore";
import Toast from "components/Toast";

function App() {
  const [viewerState] = useAtom(viewerStateAtom);
  const [toast] = useAtom(toastAtom);

  return (
    <div className="flex  bg-[#F0F0F0]">
      <List></List>
      <div className="w-[1px] min-h-screen bg-[#C4C4C4]" />
      {viewerState && <Viewer />}
      {toast.show && <Toast type={toast.type} message={toast.message} />}
    </div>
  );
}

export default App;
