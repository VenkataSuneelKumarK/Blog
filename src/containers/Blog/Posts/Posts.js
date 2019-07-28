/**
 * Created by kanamars on 28/07/19.
 */
import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import {Route} from  'react-router-dom';
import FullPost from '../FullPost/FullPost'
import './Posts.css';
class Posts extends Component{
    state = {
        posts: []
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
        this.props.history.push("/posts/" + postId);
        // this.props.history.push({pathname: "/" + postId});
    };
    render(){

        const posts = this.state.posts.map(post => (
            //<Link to={'/' + post.id} key={post.id}>
                <Post title={post.title}
                      author={post.author}
                      key={post.id}
                      postSelected={() => this.postSelected(post.id)}/>
            //</Link>
            )
        );
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost}/>
                {/*<Route path="/:id" exact component={FullPost}/>*/}
            </div>
        );
    }
}

export default Posts;