import axios from "../axios";
import React from "react";
import  "./row.css"

const base_url= "https://image.tmdb.org/t/p/original/";
class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    
  }
  componentDidMount() {
    const fetchData = async () => {
      const request = await axios.get(this.props.fetchUrl);
      this.setState({
        movies: request.data.results,
      });
      console.log(request.data.results);
      return;
    };
    fetchData();
  }
  render() {
    const {movies}=this.state;

    return (
      <div className="row">
        <h1>{this.props.title}</h1>

        <div className="row_posters">
            {movies.map(movie=>(
                <img 
                    key={movie.id}
                    className="row_poster"
                    src={`${base_url}${movie.poster_path}`} 
                />
            ))}
        </div>
      </div>
    );
  }
}

export default Row;
