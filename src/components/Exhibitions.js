import '../css/exhibitions.css';

function Exhibitions(){

    return(
    <>
    <section class="exhibition_1">
        <div class="exhibition_1_header">
            <img src="../img/ee12.png" alt="" />
            <h1>Exhibitions</h1>
        </div>
        <div class="container--tabs">
            <section class="row">
                    <ul class="nav-tabs">
                        <li class="active"><a href="#tab-1">Current Exhibition</a></li>
                        <li class=""><a href="#tab-2">Upcoming Exhibition</a></li>
                        <li class=""><a href="#tab-3">Past Exhibition</a></li>
                    </ul>
                    <div class="dropdown">
                        <div class="default_option">All</div>  
                        <ul>
                            <li>All</li>
                          <li>Delhi</li>
                          <li>Mumbai</li>
                          <li>Bangalore</li>
                        </ul>
                    </div>
                <div class="tab-content">
                    <div id="tab-1" class="tab-pane active"> 
                        <div class="exhibition_cards-1">
                            <div class="exhibition_card-1">
                                <img src="../img/ee1.jpeg" alt="" />
                                <div class="exhibition_card-1-content">
                                    <span>Exhibition</span>
                                    <h3> <a href="http://ngmaindia.gov.in/virtual-tour-of-abanindranath-tagore.asp">Gurudev Journey of the maestro through his vistual vocabulary</a></h3>
                                    <p><i class="fa fa-calendar" aria-hidden="true"></i>April 28</p>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i>Virtual</p>
                                </div>
                            </div>
                            <div class="exhibition_card-1">
                                <img src="../img/ee2.jpeg" alt="" />
                                <div class="exhibition_card-1-content">
                                    <span>Exhibition</span>
                                    <h3> <a href="http://ngmaindia.gov.in/virtual-tour-of-nandalal-bose.asp">Rhythm of Life | Nandalal Bose</a></h3>
                                    <p><i class="fa fa-calendar" aria-hidden="true"></i>April 28</p>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i>Ngma Delhi</p>
                                </div>
                            </div>
                            <div class="exhibition_card-1">
                                <img src="../img/ee3.jpeg" alt="" />
                                <div class="exhibition_card-1-content">
                                    <span>Exhibition</span>
                                    <h3> <a href="http://ngmaindia.gov.in/virtual-tour-of-life-and-works-of-sailoz-mookherjea.asp">Life and Works of Sailoz Mookherjea</a></h3>
                                    <p><i class="fa fa-calendar" aria-hidden="true"></i>April 28</p>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i>Ngma Delhi</p>
                                </div>
                            </div>
                            <div class="exhibition_card-1">
                                <img src="../img/ee4.jpeg" alt="" />
                                <div class="exhibition_card-1-content">
                                    <span>Exhibition</span>
                                    <h3> <a href="http://ngmaindia.gov.in/virtual-tour-of-nicholas-roerich.asp">Nicholas Roerich</a> </h3>
                                    <p><i class="fa fa-calendar" aria-hidden="true"></i>May 21</p>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i>Ngma Delhi</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div id="tab-2" class="tab-pane">
                        <div class="exhibition_cards-1">
                            <div class="exhibition_card-1">
                                <img src="../img/ee13.jpeg" alt="" />  
                                <div class="exhibition_card-1-content">
                                    <span>Exhibition</span>
                                    <h3> <a> In Transmission हस्तांतरण </a></h3>
                                    <p><i class="fa fa-calendar" aria-hidden="true"></i>June 15</p>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i>NGMA Delhi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-3" class="tab-pane">
                        <div class="exhibition_card-horizontal">
                            <div class="exhibition_card-horizontal-content">
                                <h1> <a href="">Shashwat Maharathi-The Eternal Seeker</a></h1>
                                <span>17th September 2019, 6:00 pm
                                    <br />
                                    at National Gallery of Modern Art, Jaipur House, New Delhi</span>
                                <a href="http://ngmaindia.gov.in/pdf/Shashwat-19sep19.pdf">View Details</a>
                            </div>
                            <img src="../img/ee15.png" alt="" />
                        </div>
                        <div class="exhibition_card-horizontal">
                            <div class="exhibition_card-horizontal-content">
                                <h1> <a>One Shiny Day</a> </h1>
                                <span>14th August 2019 to 28thOctober 2019
                                    <br />
                                    at National Gallery of Modern Art, New Delhi</span>
                                <a href="http://ngmaindia.gov.in/pdf/oneshinyday-19sep19.pdf">View Details</a>
                            </div>
                            <img src="../img/ee16.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>

    <section class="exhibition_2">
        <h1>More Exhibition...</h1>
        <div class="exhibition_cards-2">
            <div class="exhibition_card-2">
                <img src="../img/ee6.jpeg" alt="" />
                <div class="exhibition_card-2-content">
                    <span>Exhibition</span>
                    <h3>Explore the Life and Work of Pioneering Artist : JAMINI ROY</h3>
                    <span>Coming soon</span>
                </div>
            </div>
            <div class="exhibition_card-2">
                <img src="../img/ee7.jpeg" alt="" />
                <div class="exhibition_card-2-content">
                    <span>Exhibition</span>
                    <h3>The Great Maestro - Abanindranath Tagore</h3>
                    <span>Closing soon</span>
                </div>
            </div>
            <div class="exhibition_card-2">
                <img src="../img/ee8.jpeg" alt="" />
                <div class="exhibition_card-2-content">
                    <span>Exhibition</span>
                    <h3>Reminiscences : Gaganendranath Tagore</h3>
                    <span>Current</span>
                </div>
            </div>
            <div class="exhibition_card-2">
                <img src="../img/ee9.jpeg" alt="" />
                <div class="exhibition_card-2-content">
                    <span>Exhibition</span>
                    <h3>The Soul Speaker | Curator of Lives</h3>
                    <span>Coming Soon</span>
                </div>
            </div>
        </div>
    </section>
    </>

    )
};

export default Exhibitions;