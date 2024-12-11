import React from "react";
import * as S from "./styles";

export default function HashTag({ tagText }: { tagText: string }) {
  return <S.TagBox>{`${"# "}${tagText}`}</S.TagBox>;
}
