import React from "react";
import * as S from "./styles";
import Br from "../../../components/Common/Br";

export default function Header() {
  return (
    <S.TotalHeader>
      <h2>{"So's FE Daily"}</h2>
      <div>
        <div>{"git logo"}</div>
        <div>{"email Logo"}</div>
        <div>{"portfolio Logo"}</div>
      </div>
    </S.TotalHeader>
  );
}
