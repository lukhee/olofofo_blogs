import React, { Component } from 'react'
import stlyed from 'styled-components'

import Blog from '../Components/blogCon/blogCon'
import Carousel from '../Components/carousel'
import Loader from '../Components/UI/Spinner/Spinner'
import Axios from '../axiosInstance';

const BlogsDiv = stlyed.div`
    background: silver;
    padding: 10px;
    margin: 10px 20px
    box-sizing: border-box;
`;

const BlogFlex = stlyed.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px , 1fr));
    grid-gap: 1rem;
`


class BlogsConntainer extends Component {
    state = {
        data: [],
        loading: true
    }
    componentDidMount(){
        Axios.get('/blogs.json')
        .then(res=>{
            let fetchData = []
            for (let key in res.data) {
                fetchData.push({
                    ...res.data[key],
                    id: key
                })
                this.setState({
                    data: fetchData,
                    loading: false,
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        let loadingComponent 
        if(this.state.loading){
            loadingComponent = <Loader/>
        }
        let displayBlog = this.state.data.map((data, index)=>{
            return (
                <Blog key={index} gottenData = {data}/>
            )
        })
        return (
            <>
                {loadingComponent}
                <Carousel />
                <BlogsDiv>
                    <h1> blogs page here</h1>
                    <BlogFlex>
                        {displayBlog}
                    </BlogFlex>
                </BlogsDiv>
            </>
        )
    }
}

export default BlogsConntainer
