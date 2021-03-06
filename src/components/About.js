import '../css/about.css';

function About(){
    return(
        <section className="about">
            <div className="about_bg">&nbsp;</div>
            <h1 className="about_heading-primary">Our Story</h1>
            <img className="about_img-1" src="../img/Soham 100 Images/DSC8449-1024x670.jpg" alt="" />
            <div className="about_content">
                <p>So’Ham is the First Cultural Media Platform of the country under the banner of National Gallery of Modern Art.</p>
                <p>This platform is not a parallel forum to the current Social Medias. One of its kind, it is a platform to develop a dialog between NGMA, artists and art enthusiasts, aiming to build a wider interactive platform for all the voices, we put forth NGMA’s ‘So’Ham’ platform and wish to generate a wider and stronger bond between NGMA and the art fraternity, critics, scholars and practitioners from all professions who cherish art.</p>
                <p>So’Ham is an attempt to connect to the universe of art and beyond.</p>
                <p>As per the Vedic philosophy the word ‘So’Ham’ stands for one’s identity and its connection to the Universe. Taking inspiration from this philosophy, NGMA as a whole finds itself within the creative nexus and wishes that one and all will connect with NGMA through this Cultural Media Platform.</p>
            </div>
            <h1 className="about_heading-secondary">Culture</h1>
            <img className="about_img-2" src="../img/Soham 100 Images/DSC8316-1024x647.jpg" alt="" />
            <div className="about_content">
                <p>“So’Ham” intends to cater millions of artists, art lovers and those who feel at home with arts, yet somehow see themselves not included into the world of art on a day to day basis. this platform will bring the world of art closer to them.</p>
                <p>“So’Ham” symbolizes “Universal Self (Paramahamsa) Reflected as Individual Self (Hamsa) in all of us. So’Ham thus means “He I (am) or I am He”.</p>
                <p>The name itself  bears impression of intense brainstorming sessions which went on for months as it was decided from the very first day that `The name should have Indian flavor’ as well as should be descriptive to it’s aim, which is – “Indian name, rooted to it’s rich past”, in order to engage bigger, wider and grass root participation.</p>
                <p>With this nomenclature there is an effort to include anyone with a hint of art under one the platform of `Cultural Media’, where one is connected to many and vice versa. Everyone can equally share this common platform to express and explore an enriching relationship with art, or simply be an observer.</p>
                <p>This Cultural Media Platform “So’Ham” is dedicated to you all.</p>
            </div>
            <h1 className="about_heading-primary">Our Team</h1>
            <div className="about_team">
                <figure className="about_member">
                    <img src="../img/dg_1.jpg" alt="" />
                    <span>Sh. Adwaita Garanayak</span>
                    <small>Director General, NGMA,</small>
                    <p>Mentor</p>
                </figure>
                <figure className="about_member">
                    <img src="../img/user-2.jpg" alt="" />
                    <span>Dr. Shashi Bala</span>
                    <small>Curator,</small>
                    <p> Incharge IT Section</p>
                </figure>
                <figure className="about_member">
                    <img src="../img/user-1.jpg" alt="" />
                    <span>S. S. Paul</span>
                    <small>Information Systems Manager, NGMA</small>
                    <p> Founder</p>
                </figure>
                <figure className="about_member">
                    <img src="../img/user-3.jpg" alt="" />
                    <span>Aniruddha Mukherjee</span>
                    <small>Systems Analyst, NGMA</small>
                    <p>Founder Member</p>
                </figure>
                <figure className="about_member">
                    <img src="../img/user-4.jpg" alt="" />
                    <span>Yogesh Vats</span>
                    <small>Systems Analyst, NGMA</small>
                    <p>Founder Member</p>
                </figure>
            </div>
        </section>
    )
};

export default About;