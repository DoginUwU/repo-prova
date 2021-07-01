import styled from "vue-styled-components";

export const Container = styled.div`
  position: relative;

  .description {
    margin-left: 1rem;
    color: var(--gray-900);
    width: 50%;
  }

  &::before {
    display: block;
    content: "";
    height: 1px;
    background-color: var(--gray-300);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  padding: 1rem;

  @media (max-width: 1100px) {
    .description {
      display: none;
    }
  }
`;

export const Title = styled.p`
  font-size: 1.25rem;
  max-width: 50%;
  overflow-wrap: break-word;
`;

export const Details = styled.div`
  display: flex;
  width: 50%;
  gap: 3rem;
  margin-left: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media (max-width: 850px) {
    margin-top: 0.5rem;
    margin-left: 0;
    gap: 1rem;
  }

  .item {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 1rem;
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const Button = styled.a`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);

  text-decoration: none;
  padding: 0.8rem 1.4rem;
  background-color: var(--purple-100);
  color: var(--white);

  border-radius: 0.35rem;
  display: flex;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 850px) {
    padding: 0.5rem 1rem;
  }
`;
