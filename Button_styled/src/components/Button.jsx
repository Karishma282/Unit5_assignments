import styled from "styled-components";

const button = styled.button`
  /* display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block; */
  margin: 100px 10px 0 10px;
  cursor: pointer;
  background-color: ${(props) => props.background};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  width: 200px;
  height: 40px;
  border-radius: 5px;
  font-weight: 550;
  font-family: Proxima Nova Regular, Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;

export default button;