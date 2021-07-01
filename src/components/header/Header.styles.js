import styled from "vue-styled-components";

export const Container = styled.div`
  background: linear-gradient(0deg, var(--purple-50), var(--purple-100));
  color: var(--white);
`;

export const Content = styled.div`
  padding: 2rem 1rem 12rem;
  margin: 0 auto;

  display: grid;
  gap: 3rem;
  grid-template-columns: 100%;
`;

export const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  position: relative;
  width: 100%;
  padding: 1.25rem;
  text-align: center;

  svg {
    width: 3.25rem;
    height: 3.25rem;
  }

  h2 {
    font-weight: bold;
  }

  p {
    width: 100%;
  }
`;
