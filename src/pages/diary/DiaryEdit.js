import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <Header>My Diary 수정</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 수정화면{prompt.pk} 글 수정
        </h2>
      </Main>
      <Footer>수정 화면</Footer>
    </>
  );
};

export default DiaryEdit;