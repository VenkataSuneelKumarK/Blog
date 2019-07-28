/**
 * Created by kanamars on 26/07/19.
 */
import React, {Component} from 'react';
import './FullPost.css';
import axios from 'axios';

class FullPost extends Component{
    state= {
        LoadedPost: null,
        deleteStatus: false
    };
    componentDidMount() {
        this.loadData();

    }
    componentDidUpdate(){
        this.loadData();
    }

    loadData(){
        if(this.props.match.params.id){
            if(!this.state.LoadedPost || (this.state.LoadedPost && this.state.LoadedPost.id !== +this.props.match.params.id)){
                axios.get('/posts/'+this.props.match.params.id)
                    .then((response)=>{
                        this.setState({
                            LoadedPost: response.data
                        })
                    });
            }
        }
    }
    deletePostHandler = () => {
        axios.delete('/posts/'+this.props.selectedId)
            .then((response)=>{
                this.setState({
                    LoadedPost : null
                });
            })
            .catch(error => {
                this.setState({
                   deleteStatus : true
                });
            });
    };
    render(){
        let post = (<p> Please select a post!</p>);
        let errorMsg;
        if(this.props.selectedId){
            post = <p> Loading...</p>
        }
        if(this.state.deleteStatus){
            errorMsg = (<span>Something went wrong, Please try again</span>)
        }
        if(this.state.LoadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.LoadedPost.title}</h1>
                    <p>{this.state.LoadedPost.body}</p>
                    <div className="Edit">
                        {errorMsg}
                        <button className="delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;