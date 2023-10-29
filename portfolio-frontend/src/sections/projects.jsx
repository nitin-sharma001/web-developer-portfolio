

import '../App.css';

import Card from'./projectCard';

const projects = () => {

    const data = [
        {
            id : "project1",
            itemNumber : '01',
            heading : "Hospital Faculity System",
            description : "Currently Working"
        },
        {
            id : "project2",
            itemNumber : '02',
            heading : "eCommerce",
            description : "Under Progress"
        },
        {
            id : "project3",
            itemNumber : '03',
            heading : "Music Player",
            description : "Under Progress"
        },
    {
            id : "project4",
            itemNumber : '04',
            heading : "Cab Booking System",
            description : "Under Progress"
        },
        {
            id : "project5",
            
            itemNumber : '05',
            heading : "Not Announced",
            description : "..."
        },
    {
            id : "project6",
            itemNumber : '06',
            heading : "Not Announced",
            description : "..."
        }

    ]

    return (
        <div>
             <section className="work section" id="work">
                <h2 className="section-title">Work</h2>

                <div className="work__container bd-grid">
                    <a href="" className="work__img" id='project1' data-aos="flip-right">
                        {/* <img src="../assets/img/work1.jpg" alt=""  /> */}
                        <Card id = {data[0].id} number={ data[0].itemNumber} heading={data[0].heading} description={data[0].description}/>
                    </a>
                    <a href="" className="work__img" id='project2' data-aos="flip-right">
                        {/* <img src="../assets/img/work2.jpg" alt=""/> */}
                        <Card id = {data[1].id} number={data[1].itemNumber} heading={data[1].heading} description={data[1].description}/>
                    </a>
                    <a href="" className="work__img" id='project3' data-aos="flip-right">
                        {/* <img src="../assets/img/work3.jpg" alt=""/> */}
                        <Card id = {data[2].id} number={ data[2].itemNumber} heading={data[2].heading} description={data[2].description}/>
                    </a>
                    <a href="" className="work__img" id='project4'  data-aos="flip-left">
                        {/* <img src="../assets/img/work4.jpg" alt=""/> */}
                        <Card id = {data[3].id} number={data[3].itemNumber} heading={data[3].heading} description={data[3].description}/>
                    </a>
                    <a href="" className="work__img" id='project5'  data-aos="flip-left">
                        {/* <img src="../assets/img/work5.jpg" alt=""/> */}
                        <Card id = {data[4].id} number={data[4].itemNumber} heading={data[4].heading} description={data[4].description}/>
                    </a>
                    <a href="" className="work__img" id='project6'  data-aos="flip-left">
                        {/* <img src="../assets/img/work6.jpg" alt=""/> */}
                        <Card id = {data[5].id} number={data[5].itemNumber} heading={data[5].heading} description={data[5].description}/>
                    </a>
                </div>
            </section>
        </div>
    )
}


export default projects;