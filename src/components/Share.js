import React, { useCallback } from 'react';

const { Kakao, location } = window;
const Share = () => {
  const onClickShare = useCallback(() => {
    Kakao.Share.sendCustom({
      templateId: 82583,
      templateArgs: {
        title: '제목 영역입니다.',
        description: '설명 영역입니다.',
        requestUrl: location.origin,
        pagePathname: location.pathname,
      },
    });
  }, []);

  return (
    <button id="share-button" onClick={onClickShare}>
      카카오톡으로 공유
    </button>
  );
};

export default Share;
