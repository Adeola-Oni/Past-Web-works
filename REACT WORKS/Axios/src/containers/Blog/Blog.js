import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            clickedPost: null
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                console.log(response);
                const posts= response.data.slice(0,4);
                const updatedPosts = posts.map(post=>{
                    return{
                        ...post,
                        author: 'Max'
                    }

                })
                this.setState({posts : updatedPosts})
            });
        return{
            
        }
    }

    clickHandler(id){
        this.setState({clickedPost : id})
    }
    
    render (){
        const posts = this.state.posts.map((post, index)=>{
            return <Post title={post.title} key={post.id} author={post.author} clicked={()=>this.clickHandler(post.id)}/>
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.clickedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;