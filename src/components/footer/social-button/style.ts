import styled from 'styled-components'

export const SocialWrapper = styled.div`
  position: fixed;
  top: 3.5rem;
  right: 3rem;
  z-index: 999;

  .btn {
    .btn-alt {
      display: none;
      position: absolute;
      color: ${({ theme }) => theme.colors.text};
      font-size: .8rem;
      bottom: .5rem;
      right: 3.8rem;
      z-index: -1;
    }
    svg {
      color: #fff;
    }
    a {
      margin-top: .5rem;
    }
    position: relative;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    border-radius: 50%;
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
    animation: open-social-btn 500ms;
    &:hover {
      transition: all 500ms ease;
      background: ${({ theme }) => theme.colors.terciary};
      .btn-alt {
        display: block;
        animation: link-name 800ms;
        @keyframes link-name {
          from {
            transform: translate(3.5rem)
          }
          to {
            transform: translate(0);
          }
        }
      }
    }

    @keyframes open-social-btn {
      from {
        transform: scale(0);
      }
    }
  }
`
