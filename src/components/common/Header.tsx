import styled from '@emotion/styled'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  border: none;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.25rem;
  gap: 0.5rem;
`;

const Header = () => {
    return <HeaderContainer>
        <Link to="/">Blog</Link>
        <Link to="/users">Users</Link>
    </HeaderContainer>
}

export default Header;