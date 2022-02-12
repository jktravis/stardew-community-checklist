import styled from "@emotion/styled";

const Box = styled("div")`
  margin: 0.5rem;
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.colors.box.backgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.box.border};
  border-radius: 5px;
  box-shadow: 0 1px ${({ theme }) => theme.colors.box.shadow};

  color: #03617b;

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  -moz-filter: ${({ completed }) => (completed ? "grayscale(100%)" : "grayscale(0%)")};
  -ms-filter: ${({ completed }) => (completed ? "grayscale(100%)" : "grayscale(0%)")};
  -o-filter: ${({ completed }) => (completed ? "grayscale(100%)" : "grayscale(0%)")};
  -webkit-filter: ${({ completed }) => (completed ? "grayscale(100%)" : "grayscale(0%)")};
  filter: ${({ completed }) => (completed ? "grayscale(100%)" : "none")};
`;

export default Box;
