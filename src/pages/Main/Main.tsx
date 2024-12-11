import React from "react";
import Header from "./Header/Header";
import Br from "../../components/Common/Br";
import HashTag from "../../components/Main/HashTag/HashTag";
import MainPost from "../../components/Main/MainPost/MainPost";
import * as S from "./styles";

export default function Main() {
  return (
    <>
      <Header />
      <Br />
      <h1 style={{ textAlign: "center" }}>{"안녕 여기는 나의 기술블로그"}</h1>
      <S.MainBody>
        {/* <div>{"#해시태그"}</div>
        <HashTag tagText="hi" />
        <HashTag tagText="hi2sssdfsdfjdsfl;ksdfj;" /> */}
        <S.Row>
          <MainPost
            mainTitle="현식 그는 누구인가"
            content="유전자 편집 기술의 발전으로 인간의 생명 연장이 가능해질 수 있다는 연구 결과가 나왔습니다."
            date="2024.12.04"
          ></MainPost>
          <MainPost
            mainTitle="현식 그는 누구인가"
            content="유전자 편집 기술의 발전으로 인간의 생명 연장이 가능해질 수 있다는 연구 결과가 나왔습니다."
            date="2024.12.04"
          ></MainPost>
          <MainPost
            mainTitle="현식 그는 누구인가"
            content="유전자 편집 기술의 발전으로 인간의 생명 연장이 가능해질 수 있다는 연구 결과가 나왔습니다."
            date="2024.12.04"
          ></MainPost>
          <MainPost
            mainTitle="현식 그는 누구인가"
            content="유전자 편집 기술의 발전으로 인간의 생명 연장이 가능해질 수 있다는 연구 결과가 나왔습니다."
            date="2024.12.04"
          ></MainPost>
        </S.Row>
      </S.MainBody>
    </>
  );
}
