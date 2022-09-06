import React from "react";

const { Kakao } = window;
const Share = () => {
  //   const onClickShare = () => {
  //     Kakao.Share.sendDefault({
  //       objectType: "feed",
  //       content: {
  //         title: "피해피해",
  //         description: "침수피해를 예측하고 친구와 공유하세요.",
  //         imageUrl: "",
  //         link: {
  //           mobileWebUrl: "https://www.naver.com",
  //           androidExecutionParams: "test",
  //         },
  //       },

  //       buttons: [
  //         {
  //           title: "웹으로 이동",
  //           link: {
  //             mobileWebUrl: "https://www.naver.com",
  //           },
  //         },
  //       ],
  //     });
  //   };
  const onClickShare = () => {
    Kakao.Share.sendCustom({
      templateId: 82583,
      templateArgs: {
        title: "제목 영역입니다.",
        description: "설명 영역입니다.",
      },
    });
  };
  //   const onClickShare = () => {
  //     Kakao.Share.sendDefault({
  //       objectType: "feed",
  //       content: {
  //         title: "오늘의 디저트",
  //         description: "아메리카노, 빵, 케익",
  //         imageUrl:
  //           "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
  //         link: {
  //           mobileWebUrl: "https://developers.kakao.com",
  //           androidExecutionParams: "test",
  //         },
  //       },
  //       itemContent: {
  //         profileText: "Kakao",
  //         profileImageUrl:
  //           "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
  //         titleImageUrl:
  //           "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
  //         titleImageText: "Cheese cake",
  //         titleImageCategory: "Cake",
  //         items: [
  //           {
  //             item: "Cake1",
  //             itemOp: "1000원",
  //           },
  //           {
  //             item: "Cake2",
  //             itemOp: "2000원",
  //           },
  //           {
  //             item: "Cake3",
  //             itemOp: "3000원",
  //           },
  //           {
  //             item: "Cake4",
  //             itemOp: "4000원",
  //           },
  //           {
  //             item: "Cake5",
  //             itemOp: "5000원",
  //           },
  //         ],
  //         sum: "총 결제금액",
  //         sumOp: "15000원",
  //       },
  //       social: {
  //         likeCount: 10,
  //         commentCount: 20,
  //         sharedCount: 30,
  //       },
  //       buttons: [
  //         {
  //           title: "웹으로 이동",
  //           link: {
  //             mobileWebUrl: "https://developers.kakao.com",
  //           },
  //         },
  //       ],
  //     });
  //   };
  return (
    <button id="share-button" onClick={onClickShare}>
      공유
    </button>
  );
};

export default Share;
