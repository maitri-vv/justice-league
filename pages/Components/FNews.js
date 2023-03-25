import React, { useState, useEffect } from "react";
import NewsItem from "./FNewsItem";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScroll from 'react-infinite-scroller';


const FNews = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNow = async () => {
    // props.setProgress(10);
    console.log("compnentDidMount");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&country=${props.category}&apiKey=98421eb58c7c4258bf674a2a932c747f&page=${page}&pagesize=${props.pageSize}`;

    setLoading(true);
    // props.setProgress(30);

    let data = await fetch(url);
    let parseDat = await data.json();
    // props.setProgress(70);
    console.log(parseDat);
    setArticles(parseDat.articles);
    setTotalResults(parseDat.totalResults);
    setLoading(false);
    // props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}-News`;
    updateNow();
  }, []);

  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNow();
  };

  const handleNextClick = async () => {
    console.log("Next");
    setPage(page + 1);

    updateNow();
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&country=${props.category}&apiKey=98421eb58c7c4258bf674a2a932c747f&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseDat = await data.json();
    console.log(parseDat);
    setArticles(parseDat.articles);
    setTotalResults(parseDat.totalResults);
    setLoading(false);
  };

  return (
    <div>
      <h1 className="p-5 m-4 text-4xl font-bold text-center">
        {capitalizeFirstLetter(props.category ? props.category : "General")}{" "}
        News Headline
      </h1>
     
        <div className="grid w-full p-5 place-content-center bg-slate-200">
          <div className="grid grid-cols-1 gap-10 m-3 justify-items-center xl:grid-cols-3 xl:max-w-screen-xl lg:max-w-screen-lg place-content-center ">
            {articles.map((element) => {
              return (
                <div className="" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    discription={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://image.cnbcfm.com/api/v1/image/107004840-1642794265011-2022-01-21T190502Z_3_LYNXMPEI0K10G_RTROPTP_4_SHELL-OUTLOOK.JPG?v=1642794359"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "UnKnown"}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="row">
            {!loading && articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://image.cnbcfm.com/api/v1/image/107004840-1642794265011-2022-01-21T190502Z_3_LYNXMPEI0K10G_RTROPTP_4_SHELL-OUTLOOK.JPG?v=1642794359"} newsUrl={element.url} author={element.author? element.author:"UnKnown"} publishedAt={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div> */}
      
      {/* <div className="container d-flex justify-content-between">
            <button disabled={page <= 1} type="button" onClick={handlePrevClick} className="btn btn-primary btn-lg"> &larr; Prev</button>
            <button disabled={page + 1 > Math.ceil(totalResults / 18)} type="button" onClick={handleNextClick} className="btn btn-secondary btn-lg">Next &rarr;</button>
          </div> */}
    </div>
  );
};
FNews.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 6,
};

FNews.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default FNews;
