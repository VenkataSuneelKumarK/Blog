/**
 * Created by kanamars on 26/07/19.
 */
import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {
    state = {
        posts: [],
        postSelectedId : ""
    };
    componentDidMount(){
        axios.get('posts').then(response => {
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

    postSelected = (postId) => {
        this.setState({
            postSelectedId : postId
        })
    };


    render () {
        const posts = this.state.posts.map(post => (
                <Post title={post.title} author={post.author} key={post.id} postSelected={() => this.postSelected(post.id)}/>
            )
        );
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost selectedId={this.state.postSelectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;