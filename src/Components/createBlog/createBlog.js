import React from 'react'
// import styled from 'styled-components'
import classes from './create.modules.css'


// const Input = styled.input`
//     width: 100%;
//     outline: none;
//     list-style: none;
//     border: none;
//     padding: 5px 10px
//     margin-top: 10px;
//     &:hover{
//         background: #f1f1f1
//     }
// `;
// const Textarea = styled.textarea`
//      width: 100%;
//     list-style: none;
//     outline: none;
//     border: none;
//     padding: 5px 10px;
//     margin-top: 10px;
//     &:hover{
//         background: #f1f1f1;
//     }
// `
// const Button = styled.button`
//     padding: 10px 20px;
//     margin: 20px auto 0px;
//     border: none;
//     width: 40%;
//     background: #FF851B;
//     outline: none;
//     color: white;
//     font-size: 15px;
//     font-weight: 600;
//     &:hover{
//         background: #de7418;
//     }
// `


const createBlog = (props) => {
    let propsValue = props.inputValue
    let inputfield = null
    switch(propsValue.field){
        case ('input'):
            inputfield = <input value={propsValue.value} onChange={props.Change} type={propsValue.type} placeholder={propsValue.placeholder} />;
            break;
        case ('textarea'):
            inputfield = <textarea value={propsValue.value} onChange={props.Change} rows={propsValue.row} placeholder={propsValue.placeholder}/>;
            break;
            default:
            inputfield = null
    };
    return (
        <>
            <>
                {/* <h1> Let the world hear you !!! </h1>
                <Input type="text" placeholder="Title" />
                <Textarea rows="6"  placeholder="enter your content" />
                <Input type="url" placeholder="image url here"/>
                <Input type="text" placeholder="Author full-name"/>
                <Button>Submit</Button> */}
                {inputfield}
            </>
        </>
    )
}

export default createBlog
