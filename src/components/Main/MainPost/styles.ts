import styled from "@emotion/styled";
import { css } from "@emotion/css";

export const TotalPost = styled.div`
  width: calc((100% - 32px) / 3);
`;

export const PostImg = styled.div`
  width: 100%;
  height: 127px;
  border-radius: 14px;
  margin-bottom: 15px;
  background-color: #000;
`;

export const PostTitle = css`
  font-size: 13px;
  font-weight: 600;
`;

export const PostDate = css`
  margin: 4px 0;
  font-size: 8px;
`;

export const PostContent = styled.div`
  /* font-size: 9px; */
  height: 26px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
