/* eslint-disable import/no-extraneous-dependencies */
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  padding: 1rem;
  margin: 0 auto;
  dis
  max-width: ${(props) => props.maxWidth};
  margin: ${(props) => props.margin};
`;

Container.defaultProps = {
  maxWidth: "100%",
  margin: "0 auto",
};

export default Container;
