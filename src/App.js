import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)



    const movies = [
      {id:0, title: "asg1", overview: "dgdgasfdgfg"},
      {id:1, title: "gz2", overview: "gdfgdafgf"}
    ]



   /* this.state = {rows: [
      <p>This is my row0</p>,
      <p>This is my row1</p>,
      <p>This is my row2</p>  
    ]}
*/
    var movieRows = []
    movies.forEach((movie) => {
      movieRows.push(<p>{movie.title}</p>)
    })

    this.state = {rows: movieRows}
    }



  render() {
    return (
      <div className="App">


        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="300" src="https://stockx-assets.imgix.net/logo/stockx-homepage-logo-light.svg?auto=compress,format"/>
              </td>
            </tr>
          </tbody>
        </table>


      <input className="searchBar" id="searchBar" placeholder="Search for brand, color, etc."/>

      {this.state.rows}
      </div>
    );
  }
}

export default App;
