/**
 * Created by kanamars on 26/07/19.
 */
import React, {Component} from 'react';
import './FullPost.css';

class FullPost extends Component{
    render(){
        let post = <p> Please select a post!</p>
        post = (
            <div className="FullPost">
                <h1>Title</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className="delete">Delete</button>
                </div>
            </div>
        );
        return post;
    }
}

export default FullPost;