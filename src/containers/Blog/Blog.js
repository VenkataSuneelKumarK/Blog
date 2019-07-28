/**
 * Created by kanamars on 26/07/19.
 */
import React, { Component } from 'react';
// import FullPost from './FullPost/FullPost';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search:"?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/posts"  component={Posts}/>
                    <Redirect from="/" to="/posts"/>
                    {/*<Route path="/:id" exact component={FullPost}/>*/}
                </Switch>
                {/*<Route path='/' exact render={() => <Posts/>}/>*/}
                {/*<Route path='/new-post' exact render={() => <NewPost/>}/>*/}
                {/*<section>*/}
                    {/*<FullPost selectedId={this.state.postSelectedId}/>*/}
                {/*</section>*/}
                {/*<section>*/}
                    {/*<NewPost />*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Blog;