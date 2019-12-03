import React from 'react'
import classes from './Spinner.module.css'
import styled from 'styled-components'

const SpinnerDiv = styled.div`
    width: 100%;
    padding-top: 50px;
    position: absolute;
    bottom: 0;
    top: 55px;
    right: 0;
    left: 0;
    background: #80808052;
    // opacity: 0.1;
    z-index: 50
`
const Spinner = () => {
    return (
        <SpinnerDiv >
            <div className={classes.Loader}>Loading...</div>
        </SpinnerDiv>
    )
}

export default Spinner
