import { Link } from "react-router-dom"
import logo from './../media/letterway.png'
import styled from "styled-components"


const Header = () => {
    const HeaderUl = styled.ul`
    padding: 7rem;
    color: white;
    `
    const HeaderLi= styled.li`
    font-family: monospace;
    font-size: 2rem;
    
    `
    return (
        <header className="Header">
            <h1><img alt="letterwatlogo" src={logo} width={250} ></img></h1>
            <nav>

                <HeaderUl>
                    <HeaderLi><Link to="/">Home</Link></HeaderLi>
                    <HeaderLi><Link to="post">Post</Link></HeaderLi>
                    <HeaderLi><Link to="user">Users</Link></HeaderLi>
                </HeaderUl>

            </nav>
        </header>
    )
}

export default Header