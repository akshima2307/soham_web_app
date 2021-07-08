import '../css/museumCorner.css';

function RenderMuseum({museum}){
    return(
    <div class="post-card-2">
        <i class="fa fa-university post_museum-icon" aria-hidden="true"></i>
        <div class="post-card-container">
            <div class="post-card-content-1">
                <img src={museum.museumImg}/>
            </div>
            <div class="post-card-content-2">
                <div class="post-info">
                    <img src={museum.museumLogo} alt="" />
                    <span class="post-info-name">{museum.museumName}</span>
                </div>
                <span class="post-date-2">
                    {museum.museumDescription}
                </span>
            </div>
        </div>
        <div class="post-info-likesView">
            <button>Follow</button>
            <button>Unfollow</button>
        </div>
    </div>
    );
}


function MuseumCorner(props){
    const museums = props.museums.map((museum) => {
        return (
            <RenderMuseum museum={museum}/>
        );
    });
    return(
        <section class="posts-2">
        <div class="posts-container-2">
            {museums}
        </div>
    </section>
    );
};

export default MuseumCorner;