import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPost} from '../actions/postAction';
class Posts extends Component {

    componentWillMount(){
        this.props.fetchPost();
    }

    componentWillReceiveProps(nextProp){
        if(nextProp.newPost){
            console.log('NewPOsyt'+JSON.stringify(nextProp));
            this.props.posts.unshift(nextProp.newPost);
        }
    }

    render () {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

const mapStateToProp = state => ({
    posts : state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProp, {fetchPost})(Posts)