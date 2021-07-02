import React from 'react'
import Tile from "./Tile";
import "./Gallery.style.css"

const  Gallery = () => {

    const data = [{
        id: 1,
        name: "Bussiness",
        image: "https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/c80a929/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2Fca%2F35%2F98c16ebc408fb55229f9716d0729%2Fdownload-3.jpg"
    }, {
        id: 2,
        name: "CEO",
        image: "https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2019/08/6-Major-Changes-to-Business-Conferences-in-Recent-Years-750x430.jpg"
    }, {
        id: 3,
        name: "Tickets",
        image: "https://www.seriousplayconf.com/wp-content/uploads/2020/08/Tabletop-Judging-900x720.png"
    }, {
        id: 4,
        name: "Game creation event",
        image: "https://www.seriousplayconf.com/wp-content/uploads/2019/10/DSC02822-1-900x720.jpg"
    }, {
        id: 5,
        name: "question",
        image: "https://www.seriousplayconf.com/wp-content/uploads/2019/10/DSC02913-1-900x720.jpg"
    }, {
        id: 6,
        name: "Research paper Present",
        image: "https://www.seriousplayconf.com/wp-content/uploads/2019/10/DSC03035-1-900x720.jpg"
    }, {
        id: 7,
        name: "Break",
        image: "https://www.seriousplayconf.com/wp-content/uploads/2019/10/DSC03214-1-900x720.jpg"
    }, {
        id: 8,
        name: "Lecture",
        image: "https://www.seriousplayconf.com/wp-content/uploads/2019/10/Serious-Play-Presentation_19921066425_l-900x720.jpg"
    }, {
        id: 9,
        name: "conference",
        image: "https://www.seriousplayconf.com/wp-content/uploads/2019/10/Serious-Play-Workshop_19890777902_l-900x720.jpg"
    }, {
        id: 10,
        name: "Medicine",
        image: "https://www.seriousplayconf.com/wp-content/uploads/2019/10/Serious-Play-Presentation_19762206969_l-900x720.jpg"
    }, {
        id: 11,
        name: "Speakers",
        image: "https://www.seriousplayconf.com/wp-content/uploads/2019/10/DSC02772-900x720.jpg"
    }];

    return(
        <div className="gallery-wrapper" data-testid='gallery-div'>
            <div className="header" data-testid='gallery-header'>
                <h3 className="main1" data-testid='gallery-topic'>Gallery Page</h3>
                <p className="second" data-testid='gallery-des'>This section contain all the latest Event Gallery</p>
            </div>
            <div className="tiles" data-testid='gallery-tiles'>
                {data.map((data) => {
                    return <Tile data={data} key={data.id} />
                })}
            </div>
        </div>
    )
}

export default Gallery

