import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';

export const StyledLink = styled.p<{ $selected: boolean }>`
  font-family: 'Inconsolata';
  color: white;
  opacity: ${({ $selected }) => ($selected ? '1' : '0.5')};
  padding: 0;
  font-size: 20px;
  margin: 0;
  cursor: pointer;
  text-decoration: ${({ $selected }) => ($selected ? 'underline' : 'none')};

  &:hover {
    opacity: 1;
  }
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 16px 16px;
  box-sizing: border-box;
`;

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Nav>
      <StyledLink
        onClick={() => navigate('/')}
        $selected={location.pathname == '/'}
      >
        60° Sonic Self Portraits
      </StyledLink>
      {!isMobile && (
        <StyledLink
          onClick={() => navigate('/components')}
          $selected={location.pathname == '/components'}
        >
          Components
        </StyledLink>
      )}
    </Nav>
  );
};
