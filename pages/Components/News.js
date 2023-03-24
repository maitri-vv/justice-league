import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 6
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
    console.log('This is constructor');
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-News`

  }

  async updateNow() {
    this.props.setProgress(10);
    console.log('compnentDidMount');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=98421eb58c7c4258bf674a2a932c747f&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    this.props.setProgress(30);

    let data = await fetch(url);
    let parseDat = await data.json();
    this.props.setProgress(70);
    console.log(parseDat);
    this.setState({ articles: parseDat.articles, totalResults: parseDat.totalResults, loading: false })
    this.props.setProgress(100);

  }

  async componentDidMount() {
    // console.log('compnentDidMount');
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=98421eb58c7c4258bf674a2a932c747f&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true
    // })
    // let data = await fetch(url);
    // let parseDat = await data.json();
    // console.log(parseDat);
    // this.setState({ articles: parseDat.articles, totalResults: parseDat.totalResults, loading: false })
    this.updateNow();
  }

  handlePrevClick = async () => {
    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=98421eb58c7c4258bf674a2a932c747f&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true
    // })
    // let data = await fetch(url);
    // let parseDat = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseDat.articles,
    //   loading: false
    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNow();

  }

  handleNextClick = async () => {
    console.log("Next");
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {

    // }
    // else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=98421eb58c7c4258bf674a2a932c747f&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    //   let data = await fetch(url);
    //   let parseDat = await data.json();
    //   console.log(parseDat);
    //   // this.setState({ articles: parseDat.articles })

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parseDat.articles
    //   })
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNow();

  }


  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=98421eb58c7c4258bf674a2a932c747f&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    // this.setState({
    //   loading: true
    // })
    let data = await fetch(url);
    let parseDat = await data.json();
    console.log(parseDat);
    this.setState({ articles: this.state.articles.concat(parseDat.articles), totalResults: parseDat.totalResults, loading: false })

  };
  render() {

    return (
      <div>



        <h1 className='text-center mb-3'>{this.capitalizeFirstLetter(this.props.category)} News Headline</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3 ">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://image.cnbcfm.com/api/v1/image/107004840-1642794265011-2022-01-21T190502Z_3_LYNXMPEI0K10G_RTROPTP_4_SHELL-OUTLOOK.JPG?v=1642794359"} newsUrl={element.url} author={element.author ? element.author : "UnKnown"} publishedAt={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
          {/* <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://image.cnbcfm.com/api/v1/image/107004840-1642794265011-2022-01-21T190502Z_3_LYNXMPEI0K10G_RTROPTP_4_SHELL-OUTLOOK.JPG?v=1642794359"} newsUrl={element.url} author={element.author? element.author:"UnKnown"} publishedAt={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div> */}
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-primary btn-lg"> &larr; Prev</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 18)} type="button" onClick={this.handleNextClick} className="btn btn-secondary btn-lg">Next &rarr;</button>
          </div> */}


      </div>
    )
  }
}

export default News 