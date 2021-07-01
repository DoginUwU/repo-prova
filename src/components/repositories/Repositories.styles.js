import styled from "vue-styled-components";

export const Container = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: center;
  border-radius: 0.25rem;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;
`;

export const List = styled.div`
  width: 100%;

  padding: 0 2rem;
  max-height: 300px;
  overflow: auto;
`;
