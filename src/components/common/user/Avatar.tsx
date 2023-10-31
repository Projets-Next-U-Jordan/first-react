import styled from '@emotion/styled'

interface AvatarProps {
  size: number;
}

const Avatar = styled.img<AvatarProps>`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  border-radius: ${props => props.size/2}rem;
`;

export default Avatar;