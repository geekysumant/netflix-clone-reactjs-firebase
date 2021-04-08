import React from "react";
import axios from "../axios";
import requests from "../requests";
import "./banner.css"


const base_url= "https://image.tmdb.org/t/p/original/";
export default class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          movie: {},
        };
        
      }
  componentDidMount() {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      this.setState({
        movie: request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
        ],
      });
      
      return;
    };
    fetchData();
  }

  render() {
    const {movie}=this.state;
    return (
        <header 
            className="banner"
            style={ {
                backgroundSize: 'cover',
                backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
                backgroundPosition: "cover cover"
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{movie?.overview}</h1>
            </div>
            <div className="banner_fadeBottom"></div>
        </header>
    )
  }
}
