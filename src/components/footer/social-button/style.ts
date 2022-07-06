import styled from 'styled-components'

export const SocialWrapper = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 3rem;
  z-index: 999;
  
  .btn {
    cursor: pointer;
    font-size: 2rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
    color: #fff;
    animation: open-social-btn 500ms;
    &:hover {
      transition: all 500ms ease;
      background: ${({ theme }) => theme.colors.terciary};
      color: ${({ theme }) => theme.colors.primary};
    }

    @keyframes open-social-btn {
      from {
        transform: scale(0);
      }
    }
  }
`
