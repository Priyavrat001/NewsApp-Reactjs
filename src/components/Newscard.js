import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Newscards extends Component {
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0bd0cc492b274ad499dd7766145b6aac&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loading: false
        })
    }
    // Remove the previous button

    // handelPrev = async () => {
        //     // No use any more of this code.Wrap in a function

    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0bd0cc492b274ad499dd7766145b6aac&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({ loading: true })
    //     // let data = await fetch(url)
    //     // let parseData = await data.json()
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parseData.articles,
    //     //     loading: false
    //     // })
    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews()
    // }

   // Remove the previous button

    // handelNext = async () => {
        //     // No use any more of this code.Wrap in a function

    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //     //     this.setState({ loading: true })
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0bd0cc492b274ad499dd7766145b6aac&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     //     let data = await fetch(url)
    //     //     let parseData = await data.json()
    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parseData.articles,
    //     //         loading: false
    //     //     })
    //     // }
    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews()
    // }
    upperCase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `NewsApp | ${this.upperCase(this.props.category)}`;
    }
    // this function update the api in previous and next buttons whithout using the code above.

    updateNews = async () => {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0bd0cc492b274ad499dd7766145b6aac&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        // using function updatenews

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0bd0cc492b274ad499dd7766145b6aac&page=1&pageSize=${this.props.pageSize}`
        // this.setState({ loading: true })
        // let data = await fetch(url)
        // let parseData = await data.json()
        // this.setState({
        //     articles: parseData.articles,
        //     totalResults: parseData.totalResults,
        //     loading: false
        // })
        this.updateNews()
    }

    static defualtProps = {
        country: "in",
        pageSize: 9,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    render() {
        return (
            <div className='container'>
                <h2 className='my-4 text-center'>Top-Headlines of {this.upperCase(this.props.category)}</h2>
                {/* {this.state.loading && <Loading />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles !== this.state.totalResults}
                    loader={<Loading />}
                >
                    <div className="container">
                        <div className="row">
                        {/* !this.state.loading && */}
                            { this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitems title={element.title ? element.title.slice(0, 20) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handelPrev}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handelNext}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}
