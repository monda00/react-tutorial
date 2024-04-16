/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: yoralblue;
  color: white;
`;

export default function EmotionComp() {
  return (
    <MyPanel>
      <b>Styled JSX</b>
    </MyPanel>
  );
}
