import styled from "vue-styled-components";

export const Container = styled.a`
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 0.25rem;
  flex-wrap: wrap;
  gap: 2rem;
  text-decoration: none;
  color: var(--black);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Profile = styled.div`
  width: 100%;
  text-align: center;
  display: inline-block;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    object-fit: cover;
  }

  h2,
  p {
    margin-top: 1rem;
  }
`;

export const Details = styled.div`
  width: 80%;

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    font-weight: bold;

    svg {
      width: 1.7rem;
      height: 1.7rem;
      color: var(--purple-100);
    }
  }
`;
