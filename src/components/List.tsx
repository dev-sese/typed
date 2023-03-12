import Resource from "components/Resource";

const List = () => {
  return (
    <div style={{ width: "280px" }}>
      <div style={{ width: " 100%", display: "flex", flexDirection: "column" }}>
        <div
          id="button-area"
          style={{ display: "flex", justifyContent: "center", gap: "8px" }}
        >
          <button>URL 추가</button>
          <button>이미지 추가</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Resource url={"url1"} />
          <Resource url={"url2"} />
          <Resource url={"url3"} />
        </div>
      </div>
    </div>
  );
};

export default List;
