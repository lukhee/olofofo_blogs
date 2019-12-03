import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import classes from './Header.module.css';
 

// const container = styled.div `
// padding: 10px;
// background: navy;
// color: white;
// `
const Container = styled.div`
    background: #001f3f;
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    padding: 10px;
    color: white;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
`;

const NLink = styled(Link)`
    color: white;
    margin-right: 10px;
    &:hover{
        color: white;
        text-decoration: none;
    }
`

const Header = ()=> {
    return (
        <Container>
            <NLink to= '/Blogs'>Logo</NLink>
            <NLink to='/Blogs/:category'>Select</NLink> 
            <NLink className={classes.Submit} to='/Blogs/create'> Create</NLink>
            {/* <Title>hello</Title> */}
        </Container>
    )
}

export default Header
