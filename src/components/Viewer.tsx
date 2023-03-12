const Viewer = () => {
  return (
    <div style={{ width: "920px" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <div>url</div>
          <button>X</button>
        </div>
        <iframe></iframe>
      </div>
    </div>
  );
};

export default Viewer;
