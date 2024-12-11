import Br from "../../Common/Br";
import * as S from "./styles";

interface MainPostProps {
  postImg?: string;
  mainTitle: string;
  content: string;
  date: string;
}
export default function MainPost(MainPostProps: MainPostProps) {
  return (
    <S.TotalPost>
      {/* <S.PostImg src={MainPostProps.postImg}></S.PostImg> */}
      <S.PostImg></S.PostImg>
      <div css={S.PostTitle}>{MainPostProps.mainTitle}</div>
      <S.PostContent>{MainPostProps.content}</S.PostContent>
      <Br />
      <div css={S.PostDate}>{MainPostProps.date}</div>
      <Br />
    </S.TotalPost>
  );
}
