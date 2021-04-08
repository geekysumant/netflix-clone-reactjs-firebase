import axios from "../axios";
import React from "react";
import  "./row.css"
import YouTube from 'react-youtube';
import  movieTrailer from 'movie-trailer';

const base_url= "https://image.tmdb.org/t/p/original/";
class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movieTrailer: ""
    };
    this.opts={
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };
    
  }
  componentDidMount() {
    const fetchData = async () => {
      const request = await axios.get(this.props.fetchUrl);
      this.setState({
        movies: request.data.results,
      });
      return;
    };
    fetchData();
  }
  handleVideoOnClick=(movie)=>{
    if(this.state.movieTrailer){
      this.setState({
        movieTrailer:""
      })
    }else{
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
      .then((url)=>{
        const urlParams= new URLSearchParams(new URL(url).search);
        this.setState({
          movieTrailer: urlParams.get('v')
        });
      }).catch(err=> console.log(err));
    }
      
  }
  render() {
    
    const {movies}=this.state;
    const {isLargeRow}=this.props;

    return (
      <div className="row">
        <h1>{this.props.title}</h1>

        <div className="row_posters">
            {movies.map(movie=>(
                <img 
                    onClick={()=>this.handleVideoOnClick(movie)}
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_poster_large"}`}
                    src={ isLargeRow ?`${base_url}${movie.poster_path}`:`${base_url}${movie.backdrop_path}` } 
                />
            ))}
        </div>
        {this.state.movieTrailer && <YouTube videoId={this.state.movieTrailer} opts={this.opts}/>}
      </div>
    );
  }
}

export default Row;
