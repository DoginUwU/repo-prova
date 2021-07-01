import styled from "vue-styled-components";

export const Container = styled.div`
  position: relative;
  width: 50%;
  justify-self: center;

  button {
    color: var(--black);
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
    background: none;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  outline: none;
  border: 0;
  border-radius: 0.25rem;
  background-color: var(--white);
  padding: 1rem;
`;
