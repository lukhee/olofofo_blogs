import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
    width: 100%;
    color: red;
    text-align: center;
    padding-top: 30px
`

const withError = () => {
    return (
        <ErrorContainer>
            <h4>something went wrong, try again</h4>
        </ErrorContainer>
    )
}

export default withError
