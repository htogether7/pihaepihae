import React from "react";

const { Kakao } = window;
const Share = () => {
  const onClickShare = () => {
    Kakao.Share.sendCustom({
      templateId: 82583,
      templateArgs: {
        title: "제목 영역입니다.",
        description: "설명 영역입니다.",
      },
    });
  };
  return (
    <button id="share-button" onClick={onClickShare}>
      공유
    </button>
  );
};

export default Share;
