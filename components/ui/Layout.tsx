import { Logo } from "assets";
import { breakpoints } from "components/theme";
import Link from "next/link";
import styled from "styled-components";
import { Container, Heading, Main } from "./";

export const Layout: React.FC = ({ children }) => {
  return (
    <Main>
      <Header>
        <Container>
          <HeaderWrapper>
            <LogoWrapper>
              <Link href="/" passHref>
                <Logo />
              </Link>
            </LogoWrapper>
          </HeaderWrapper>
        </Container>
      </Header>
      <Container>
        <PageWrapper>
          <Heading>Unsere Auswahl für Sie</Heading>
          {children}
        </PageWrapper>
      </Container>
    </Main>
  );
};

const Header = styled.header`
  padding-block: 2rem;
  border-bottom: 1px solid var(--accent);
`;

const LogoWrapper = styled.div`
  width: 50%;

  @media ${breakpoints.md} {
    width: 15%;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PageWrapper = styled.main`
  padding-block: 2rem;
`;
