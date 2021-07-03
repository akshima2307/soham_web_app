import React from 'react';

import NavBar from './NavBar';
import Posts from './Posts';
import PostDetails from './PostDetails';

import { POSTS } from '../shared/posts';


class MainComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            posts: POSTS,
            selectedPost: null
        };
    }
    onPostSelect(postId) {
        this.setState({selectedPost: postId});
    }
    render(){
        return(
            <>
                <NavBar/>
                <Posts posts={this.state.posts} 
                    onClick={(postId)=> this.onPostSelect(postId)}
                />
                <PostDetails 
                post={this.state.posts.filter((post) => post.id === this.state.selectedPost)[0]}
                />
            </>
        );  
    }
}

export default MainComponent;