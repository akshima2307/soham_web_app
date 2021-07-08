import '../css/events.css';

function Events(){

    return(
    <section className="events">
        <div className="events_header">
            <img className="events_header-img" src="../img/events1.jpeg" alt="event1" />
            <h1 className="events_heading">Events</h1>
            <div className="events_navigation">
                <a className="btn btn-all active" href="#">All</a>
                <a className="btn btn-lecture" href="#">Lectures</a>
                <a className="btn btn-workshop" href="#">Workshop and Seminars</a>
                <a className="btn btn-talk" href="#">Talks Tours</a>
                <a className="btn btn-film" href="#">Film / Performance</a>
                <a className="btn btn-special" href="#">Special Events</a>
            </div>
            <div className="dropdown">
                <div className="default_option">All</div>  
                <ul>
                  <li>All</li>
                  <li>Delhi</li>
                  <li>Mumbai</li>
                  <li>Bangalore</li>
                </ul>
            </div>
        </div>

        <div className="events_content">
            <div id="myCalendarWrapper"></div>
            <div className="events_card events_card-lecture">
                <img src="../img/events1.jpeg" alt="" />
                <div className="events_card-content">
                    <span>Friday, May 17, 2021</span>
                    <h1>NAIMISHA Summer Art Program.</h1>
                    <small>
                        Lecture<br/>
                        11:00 AM TO 12:00 PM<br/>
                    </small>
                    <p>Due to the ongoing coronavirus health crisis, we regret that all in-person events have been canceled through June 30, 2021.</p>
                </div>
            </div>
            <div className="events_card events_card-workshop">
                <img src="../img/ee9.jpeg" alt=""/>
                <div className="events_card-content">
                    <span>Friday, March 13, 2020 - June 30, 2021</span>
                    <h1>The Soul Speaker | Curator of Lives</h1>
                    <small>
                        Workshop and Seminars<br/>
                        10:00am - 5:00pm<br/>
                    </small>
                    <p>Due to the ongoing coronavirus health crisis, we regret that all in-person events have been canceled through June 30, 2021.</p>
                </div>
            </div>
            <div className="events_card events_card-talk">
                <img src="../img/events_2.jpeg" alt=""/>
                <div className="events_card-content">
                    <span>Friday, March 13, 2020 - June 30, 2021</span>
                    <h1>NAIMISHA</h1>
                    <small>
                        Talks  Tours<br/> 
                        10:00am - 5:00pm<br/>
                    </small>
                    <p>Due to the ongoing coronavirus health crisis, we regret that all in-person events have been canceled through June 30, 2021.</p>
                </div>
            </div>
            <div className="events_card events_card-workshop">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-4pQJlGnym6P-p86_vdFHj23n2WKVweNWgusqp=CAU" alt=""/>
                <div className="events_card-content">
                    <span>Friday, March 13, 2020 - June 30, 2021</span>
                    <h1>Art Adda</h1>
                    <small>
                        Workshop and Seminars <br/>
                        10:00am - 5:00pm<br/>
                    </small>
                    <p>Due to the ongoing coronavirus health crisis, we regret that all in-person events have been canceled through June 30, 2021.</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Events;