import styled from "vue-styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  position: relative;
  width: 90%;
  background-color: var(--white);
  margin-top: -7rem;
  padding: 4rem 2rem;
`;

export const BackButton = styled.a`
  position: absolute;
  top: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.25rem;
  transition: all 0.2s;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background-color: var(--purple-100);
    color: var(--white);
  }
`;

export const DownloadButton = styled.a`
  position: absolute;
  bottom: 0;
  left: 0;

  text-decoration: none;
  padding: 0.4rem 1rem;
  background-color: var(--purple-100);
  color: var(--white);

  border-radius: 0.35rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BasicInformations = styled.div`
  position: relative;

  p {
    margin-left: 2rem;
  }
`;

export const Profile = styled.div`
  text-align: right;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  p {
    font-size: 0.75rem;
    margin-top: 1rem;
  }
`;

export const IssueList = styled.div`
  padding: 2rem;
  list-style: none;

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }

  li {
    margin-top: 2rem;
    display: flex;
    padding: 1rem 1.6rem;
    border: 1px solid var(--gray-0);
    border-radius: 4px;
    & + li {
      margin-top: 1.6rem;
    }
    img {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      border: 2px solid var(--gray-0);
    }
    div {
      flex: 1;
      margin-left: 1rem;
      strong {
        font-size: 1rem;
        a {
          text-decoration: none;
          color: var(--gray-900);
          &:hover {
            color: var(--purple-100);
          }
        }
        span {
          background: var(--gray-0);
          color: var(--gray-900);
          border-radius: 2px;
          font-size: 0.75rem;
          font-weight: 600;
          height: 1.25rem;
          padding: 3px 4px;
          margin-left: 1.6rem;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: var(--gray-300);
      }
    }
  }
`;
