import { Link } from "react-router-dom"
import logo from './../media/letterway.png'
import styled from "styled-components"


const Header = () => {
    const HeaderUl = styled.ul`
    padding-top: 4rem;
    color: white;
    `
    const HeaderLi= styled.li`
    font-family: monospace;
    font-size: 2rem;
    color: yellow;
    text-decoration: none;

    `
    const StyledNav = styled.nav`
    color: yellow;
    text-decoration: none;
    `
    return (
        <header>
            <h1><Link to="/"><img alt="letterwatlogo" src={logo} width={150} ></img></Link></h1>
            <StyledNav>

                <HeaderUl>
                    <HeaderLi><Link to="/">Home</Link></HeaderLi>
                    <HeaderLi><Link to="post">Post</Link></HeaderLi>
                    <HeaderLi><Link to="user">Users</Link></HeaderLi>
                </HeaderUl>

            </StyledNav>
        </header>
    )
}

export default Header