import React from 'react';
import '../App.css';
import styled, { css } from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f7f3f7;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-101%)'};
  text-align: left;
  border-radius: 15px;
  padding: 1rem 1rem 0;
  position: fixed;
  z-index:10000;
  top: 5.5rem;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 21.5rem;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {
  return (
      <StyledMenu open={open}>
        <Link to="/" >
          <span className="navFavIcon" role="img" aria-label="home"><img src="https://image.flaticon.com/icons/svg/1946/1946433.svg" style={{ width: '1em' }} /> </span>
        Home
      </Link>
        <Link to="/favorites">
          <span className="navFavIcon" role="img" aria-label="home"><img src="https://image.flaticon.com/icons/svg/786/786432.svg" style={{ width: '1em' }} /> </span>
        Favorites
      </Link>
      </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' :'#0D0C1D' };
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default function Hamburger() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}

