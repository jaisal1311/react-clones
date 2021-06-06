import styled from "styled-components";
const Login = (props) => {
  return (
    <div>
      <Container>
        <Nav>
          <a href="/">
            <img src="images/login-logo.svg" alt="" />
          </a>
          <ActionButtons>
            <div>
              <Join>Join now</Join>
            </div>
            <div>
              <SignIn>Sign in</SignIn>
            </div>
          </ActionButtons>
        </Nav>
        <Section></Section>
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* max-width: 1128px; */
  padding: 12px 0 16px 12px;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 35px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 30px 0 30px;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    border-radius: 5px;
  }
`;

const SignIn = styled.a`
  border: 1px solid #066ca2;
  font-size: 16px;
  color: #066ca2;
  padding: 10px 24px;
  border-radius: 30px;
  font-weight: 600;
  transition-duration: 167ms;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

export default Login;
