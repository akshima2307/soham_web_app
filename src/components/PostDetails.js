import React from 'react';
import '../css/artDescription.css';


function RenderImg({post}){
    return(
        <img src={post.image} alt="" />
    );
};

function RenderComment({comments}){
        if (comments == null) {
          return(<div></div>);
        }
        const comm = comments.map((comment) => {
          return(
            <div class="comment" key={comment.id}>
                <img src={comment.artistImg} alt="" />
                <span>
                    {comment.artistName} <small>3d</small>
                    <p>{comment.comment}</p>
                </span>
            </div>
          );
    
    
        })
    
        return (
            <div>
                {comm}
            </div>  
        );
    
};

function RenderPostInfo({post}){
        if(post == null){
            return(
                <div></div>
            )
        }
        return(
            <div>
                <h1 class="art_heading">{post.name}</h1>
        
                <p class="art_para">{post.description}</p>
                
                <div class="art_info">
                    <div class="art_info-content">
                        <img src={post.artistImg} alt="" />
                        <span>
                            {post.artistName}
                            <small>{post.artistFollowers} followers</small>
                        </span>
                    </div>
                    <button class="art_follow">
                        Follow
                    </button>
                </div>
            </div>
        )
};

const PostDetails = (props) =>{

        if (props.post == null) {
        return (<div></div>)
        }
        

        return(
            <section class="art">                
                <div class="art_img">
                    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                    <RenderImg post={props.post} />
                </div>
                <div class="art_content">
                    <div class="art_icon">
                        <div class="art_share">
                            <svg class="gUZ pBj" height="25" width="25" viewBox="0 0 24 24" aria-label="More options" role="img"><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path></svg>
                            {/* <div class="share-menu">
                                <button class="share-menu-toggle" data-toggle-share-menu="" title="Open sharemenu">
                                  <i class="share-logo fa fa-upload" aria-hidden="true"></i>
                                </button>
                                <div class="share-items">
                                  <div class="share-item">
                                    <a href="https://www.facebook.com/sharer.php?u=[EncodedURL]" class="share-link share-link-facebook"><span class="fab fa-facebook" style="color: rgb(66, 103, 178);"></span></a>
                                  </div>
                                  <div class="share-item">
                                    <a href="https://twitter.com/share?text=[TITLE]&url=[EncodedURL]" class="share-link share-link-twitter"><span class="fab fa-twitter" style="color: rgb(0, 172, 238);"></span></a>
                                  </div>
                                  <div class="share-item">
                                    <a href="https://pinterest.com/pin/create/button/?url=[EncodedURL]&media=[MEDIA]" class="share-link share-link-pinterest"><span class="fab fa-pinterest" style="color: #e74c3c;"></span></a>
                                  </div>
        
                                  <div class="share-item">
                                    <a href="mailto:?subject=[SUBJECT]&body=Check out this site [URL]" class="share-link share-link-mail"><span class="fas fa-envelope" style="color: rgb(219, 68, 55);;"></span></a>
                                  </div>
                                  <button class="share-menu-toggle" data-toggle-share-menu=""><span class="share-close fas fa-times"></span></button>
                                </div>
                              </div> */}
                            </div>
                        <button class="art_save">
                            Save
                        </button>
                    </div>
        
                    {/* Art Info */}
                    <RenderPostInfo post={props.post}/>
        
                    <div class="container--tabs">
                        <section class="row">
                            <ul class=" nav-tabs">
                                <li class="active"><a href="#tab-1">{props.post.comments.length} Comments</a></li>
                            </ul>
                            <div class="tab-content">
                                <div id="tab-1" class="tab-pane active">
                                    {/* Comment */}
                                    <RenderComment comments={props.post.comments}/>
                                    <div class="user_comment">
                                        <img src={props.post.artistImg} alt="" />
                                        <input type="text" placeholder="Add a comment..." />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        );
}


export default PostDetails;