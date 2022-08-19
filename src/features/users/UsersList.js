import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersSlice'
import { Link } from 'react-router-dom'
import { RowCenter } from '../styles/GlobalStyles'
import { UserContainer } from '../styles/GlobalStyles'
import styled from 'styled-components'
const UsersList = () => {
    const users = useSelector(selectAllUsers)

    const renderedUsers = users.map(user => (
        <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
    ))
    const StyledUl = styled.ul`
    color:yellow;
    list-style: none;
    `
    return (
        <RowCenter>
            <UserContainer>
            <h2>Users</h2>

            <StyledUl>{renderedUsers}</StyledUl>
            </UserContainer>
        </RowCenter>
    )
}

export default UsersList