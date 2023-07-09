import React, { Component } from 'react'

export default class Newsitems extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div>
                <div className="card my-4" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://i.guim.co.uk/img/media/c987903c1685775b23a86d30014cf496283634ba/0_1_3979_2388/master/3979.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fefca1825f852d05e8c2b893c3369fb6" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel='noreferre' href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
