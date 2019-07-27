/**
 * Created by kanamars on 26/07/19.
 */
import React, {Component} from 'react';
import './FullPost.css';
import axios from 'axios';

class FullPost extends Component{
    state= {
        LoadedPost: null
    };
    componentDidUpdate() {
        if(this.props.selectedId){
            console.log("!this.state.LoadedPost", !this.state.LoadedPost);
            console.log("(this.state.LoadedPost && this.state.LoadedPost.id !== this.props.selectedId)", (this.state.LoadedPost && this.state.LoadedPost.id !== this.props.selectedId));
            if(!this.state.LoadedPost || (this.state.LoadedPost && this.state.LoadedPost.id !== this.props.selectedId)){
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.selectedId)
                    .then((response)=>{
                        this.setState({
                            LoadedPost: response.data
                        })
                    });
            }
        }

    }
    render(){
        let post = (<p> Please select a post!</p>);
        if(this.props.selectedId){
            post = <p> Loading...</p>

        }
        if(this.state.LoadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.LoadedPost.title}</h1>
                    <p>{this.state.content}</p>
                    <div className="Edit">
                        <button className="delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;