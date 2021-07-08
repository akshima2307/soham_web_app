import '../css/blog.css';

function RenderBlogs({blog}){
    return(
    <div class="blog_card" key={blog.id} >
        <div class="blog_card-img">
            <img src={blog.blogImg} alt="" />
        </div>
        <div class="blog_card-content">
            <h1>{blog.blogTitle}</h1>
            <h2>{blog.blogPublisher}</h2>
            <span>{blog.blogDate}</span>
            <p>{blog.blogDescription}</p>
            <a href="#">Read More</a>
        </div>
    </div>
    )
}


function Blog(props){
    const blogs = props.blogs.map((blog) => {
        return (
            <RenderBlogs blog={blog}/>
        );
    });
    return(
    <section class="blog">
        <div class="blog_bg">&nbsp;</div>
        <h1 class="blog_heading">BLOG</h1>
        <div class="blog_container">
            {blogs}
        </div>
    </section>
    );
};

export default Blog;