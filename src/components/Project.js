import React from 'react';


const Project = () => {
    return (
        <section className="projects" id='works'>
            <h1>
                Completed Projects <span className="box"></span>
            </h1>
            <div className="project-pics">
                <img src={require("../img/ad2.png")} alt="" />
                <img src={require("../img/img11.png")} alt="" />
                <img src={require("../img/ddd.png")} alt="" />
                <img src={require("../img/Ad.png")} alt="" />
                <img src={require("../img/ad2.png")} alt="" />
                <img src={require("../img/img11.png")} alt="" />
                <img src={require("../img/ddd.png")} alt="" />
                <img src={require("../img/Ad.png")} alt="" />
                <img src={require("../img/img11.png")} alt="" />
                <img src={require("../img/Ad.png")} alt="" />
            </div>
            <div className="see">
                <a href='https://github.com/coolpythoncodes' target='blank' >See More</a>
            </div>
        </section>
		);
}

export default Project;
