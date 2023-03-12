import React from "react";

interface ResourceProps {
  url: string;
}

const Resource: React.FC<ResourceProps> = ({ url }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "90px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input placeholder="url 입력" value={url} />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Resource;
