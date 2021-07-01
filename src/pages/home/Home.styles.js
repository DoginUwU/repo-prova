import styled from "vue-styled-components";

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 2fr 0.8fr;
  margin-top: -7rem;
  padding: 0 9rem;
  gap: 3rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }

  @media (max-width: 1100px) {
    padding: 0 2rem;
  }
`;
