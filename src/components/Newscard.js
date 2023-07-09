import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class extends Component {
    handelPrev= async()=>{
        let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=0bd0cc492b274ad499dd7766145b6aac&page-${this.state.page-1}pageSize=20`;
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({
            page: this.state.page-1,
            articles: parseData.articles
        })
    }
     handelNext= async()=>{
        let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=0bd0cc492b274ad499dd7766145b6aac&page-${this.state.page+1}pageSize=20`;
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({
            page: this.state.page+1,
            articles: parseData.articles
        })
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=cricket&apiKey=0bd0cc492b274ad499dd7766145b6aac&page=1pageSize=20"
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({
            articles: parseData.articles
        })
    }

    render() {
        return (
            <div className='container'>
                <h2 className='my-4'>Top-Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitems title={element.title ? element.title.slice(0, 20) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary"onClick={this.handelPrev}>&larr; Previous</button>
                <button type="button" className="btn btn-primary"onClick={this.handelNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
