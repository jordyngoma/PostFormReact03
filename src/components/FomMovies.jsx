import React from "react";
import './FormMovies.css';

class FormMovies extends React.Component{
  constructor(props){
    super(props);
    this.state={
    title:"",
    poster:"",
    comment:""
    }
    
  }

  

  onChange = (e) => {
    this.setState({
      [e.target.title]: e.target.value
    });
  }
  
  render(){

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    
    const url = "https://post-a-form.herokuapp.com/api/movies";
    
    fetch(url, config)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        alert(res.error);
      } 
      else {
        alert(`The movie #${res} has been successfully added!`);
      }
    })
    .catch(e => {
      console.error(e);
      alert('There was an error when adding the movie.');
    });

    return(
      
      <div className="FormMovie">
        <h1>New Employee</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="movieTiltle">Movie Tiltle</label>
              <input
                type="text"
                id="movieTiltle"
                name="movieTiltle"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="moviePoster">Movie Poster</label>
              <input
                type="text"
                id="moviePoster"
                name="moviePoster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.commment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default FormMovies;