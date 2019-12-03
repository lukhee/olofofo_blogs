import React from 'react'
import styled from 'styled-components'

const BlogCon = styled.div`
    // background: #FF851B;
    background: white;
    text-align: center;
    border-radius: 4px;
    padding: 10px
    color: #001f3f
    box-sizing: border-box;
`;
const Image = styled.img`
    width: 100%;
    height: 200px;
    background: grey;
    border-radius: 4px
`;

const blogCon = (props)=> {
    console.log(props)
    return (
        <BlogCon>
            <Image src={props.gottenData.imageUrl} alt="image here"/>
            <div>
                <h1> {props.gottenData.Title} </h1>
                <p>Description</p>
                <span>{props.gottenData.Author}</span>
            </div>
            <button>View More</button>
        </BlogCon>
    )
}

export default blogCon
