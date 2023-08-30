import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner1'
import PropTypes  from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,settotalResults]=useState(0)
  
  const capfirst=(string)=> {
    return string[0].toUpperCase() +string.slice(1);
  }
  
  
  const  fetchfunc= async()=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    let data= await fetch(url);
    let parseddata=await data.json();
    props.setProgress(30);
    
    setArticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    setLoading(false);
    
    props.setProgress(100);
    console.log("artilcles" + articles.length +"totalrsults"+totalResults);
  }
  
  useEffect(()=>{
     document.title=`${capfirst(props.category)}-NewsMonkey`;
    fetchfunc();
  },[])
  

  const fetchMoreData = async() => {
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`;
    let data= await fetch(url);
    let parseddata=await data.json();

    setArticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);
    setPage(page+1);
    // this.setState({
    //   articles : this.state.articles.concat(parseddata.articles),
    //   totalResults:parseddata.totalResults,
    //   page:this.state.page+1,
    // });
    console.log("artilcles" + articles.length +"totalrsults"+totalResults);
    
  };

    return (
      <div>
        <div className="  my-5">
            <h1 className='text-center ' style={{marginTop:'90px'}}>NewsMonkey-Top {capfirst(props.category)} Headlines</h1>
            {loading && <Spinner/>  }
               <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={page<=Math.ceil(totalResults/props.pagesize)}
                    loader={<Spinner/>}
               >
                  <div className="container my-5">
                        <div className="row">
                          {  articles.map((element)=>{
                                return  <div className="col-md-4 " key={element.url} >
                                              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} urlimg={element.urlToImage} newsurl={element.url} time={element.publishedAt} author={element.author} source={element.source.name}/>
                                        </div>
                          })}
                        </div>
                  </div>
              </InfiniteScroll>
        </div>
      </div>
    )
  
}
News.defaultProps = {
  country:'in',
  pagesize:'5',
  category:'general',
}
 News.PropsTypes = {
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string,
}

export default News
