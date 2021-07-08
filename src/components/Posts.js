import React from 'react';
import '../css/homePage.css';
import { Link, useRouteMatch } from 'react-router-dom';


// Icons
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import SearchIcon from '@material-ui/icons/Search';


function RenderPosts({post, onClick}){
    let match = useRouteMatch();
    return(
        <div className="post-card" key={post.id}>
            <Link style={{textDecoration: 'none'}} to={`${match.url}/${post.id}`}>
                <img className="post-img" src={post.image} alt="" />
            </Link>
                <InsertPhotoIcon className="fa fa-picture-o post_picture-icon" />
                <span className="post-date">
                    <CalendarTodayIcon className="post_calender-icon" />
                    <span>{post.date}</span> 
                </span>
                <span className="post-heading">{post.name} </span>
                <div className="post-info">
                    <img src={post.artistImg} alt="" />
                    <span className="post-info-name">{post.artistName}</span>
                </div>
                <div className="post-info-likesView">
                    <small><ThumbUpOutlinedIcon />&nbsp;<span>{post.likes}</span></small>
                    <small><RemoveRedEyeIcon/>&nbsp;<span>{post.views}</span></small>
                </div>
        </div>
    );
}


const Posts = (props) => {
    const post = props.posts.map((post) => {
        return (
            <RenderPosts post={post}/>
        );
    });
    return(
        <>
            <section class="category">
                    <div class="category_dropdown">
                        <details >
                            <summary>Choose Categories...</summary>
                            <div>
                                <label>
                                    <input type="radio" name="radio"/>
                                    <span>All Categories</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio" checked/>
                                    <span>Architecture</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio"/>
                                    <span>College</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio"/>
                                    <span>Drawing</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio"/>
                                    <span>Graphics</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio"/>
                                    <span>Installation</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio"/>
                                    <span>Museum's corner</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio"/>
                                    <span>Other</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio"/>
                                    <span>Painting</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio"/>
                                    <span>Poetry</span>
                                </label>
                            </div>
                        </details>
                    </div>
                    <div class="category_input">
                        <SearchIcon/>
                        <input type="text" />
                    </div>
                    <div class="category_content">
                        <ul>
                            <li class="category_tab category_active">
                                <span class="category_tab-link category_active-link" href="#" >All</span>
                            </li>
                            <li class="category_tab">
                                <span class="category_tab-link" href="#"><i class="fa fa-picture-o" aria-hidden="true"></i>Image</span>
                            </li>
                            <li class="category_tab">
                                <span class="category_tab-link" href="#"><i class="fa fa-file-video-o" aria-hidden="true"></i>Video</span>
                            </li>
                            <li class="category_tab">
                                <span class="category_tab-link" href="#"><i class="fa fa-file-audio-o" aria-hidden="true"></i>Audio</span>
                            </li>
                        </ul>
                    </div>
            </section>
            <section className="posts">
                <div className="posts-container">
                    {post}
                </div>
            </section>
        </>
        );
    }

        


export default Posts;

