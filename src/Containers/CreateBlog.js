import React, { Component } from 'react'
import axios from '../axiosInstance';
import styled from 'styled-components'

import Create from '../Components/createBlog/createBlog'
import Loader from '../Components/UI/Spinner/Spinner'
import WithError from '../Components/withError/withError'

// const firebaseUrl = ''

const CreateCon = styled.div`
    width: 50%;
    margin:  30px auto;
    padding: 20px;
    background: silver;
    text-align: center;
`;

class CreateBlog extends Component {
    state={
        loading: false,
        showError: false,
        inputData: [
            {
                ID:1,
                field: "input",
                type: "text",
                placeholder: "Title",
                value: ""
            }, {
                ID:2,
                field: "textarea",
                type: "text",
                placeholder: "content",
                row: 5,
                value: ""
            }, {
                ID:3,
                field: "input",
                type: "url",
                placeholder: "imageUrl",
                value: ""
            }, {
                ID:4,
                field: "input",
                type: "text",
                placeholder: "Author",
                value: ""
            }
        ]
    }

    ChangeInputHandler = (e, ID) => {
       let inputFIeld = [...this.state.inputData]
        let newInput = inputFIeld.find((value)=>{return value.ID === ID})
        newInput.value = e.target.value
        this.setState({
            inputData: inputFIeld
        })
    }

    submitHandler = ( event ) => {
        event.preventDefault()
        this.setState({
            loading: !this.state.loading
        })
        let data = {}
        this.state.inputData.forEach(ele => {
            data[ele.placeholder] = ele.value
        });
        axios.post('/blogs.json', data)
            .then(res => {
                this.setState({
                    loading: false
                })
                this.props.history.push('/blogs')
            })
            .catch(err=>{
                this.setState({
                    loading: !this.state.loading,
                    showError: true
                })
                console.log(err)
            })
    }

    render() {
        let loader, showError
        if(this.state.loading){
           loader = <Loader/>
        }
        if(this.state.showError){
            showError = <WithError/>
        }
        const inputField = this.state.inputData.map((ele, index)=>{
            return <Create 
            key={index} 
            inputValue = {ele}
            Change = {(e)=>this.ChangeInputHandler(e, ele.ID)}/>
        })
        return (
            <div>
                {loader}
                {showError}
                <form onSubmit = {this.submitHandler}>
                    <CreateCon>
                        {/* <Create /> */}
                        {inputField}
                        <button>Submit</button>
                    </CreateCon>
                </form>
            </div>
        )
    }
}

export default CreateBlog
