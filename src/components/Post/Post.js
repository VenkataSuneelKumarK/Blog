/**
 * Created by kanamars on 26/07/19.
 */
import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.postSelected}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;