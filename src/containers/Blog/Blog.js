/**
 * Created by kanamars on 26/07/19.
 */
import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: []
    };
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
               return {
                   ...post,
                   author : "Suneel"
               }
            });
            this.setState({
                posts: updatedPosts
            });
        });
    }

    render () {
        const posts = this.state.posts.map(post => (
                <Post title={post.title} author={post.author} key={post.id}/>
            )
        );
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;