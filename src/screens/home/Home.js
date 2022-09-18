import React, {Component} from "react";
import Header from "../../common/header/Header";
import './Home.css';

//import GridList from '@material-ui/core/GridList';
//import GridListTile from '@material-ui/core/GridListTile';
//import GridListTileBar from '@material-ui/core/GridListTileBar';

class Home extends Component{
  render(){
    return(
      <div >
        <Header />

        <script src="./common/moviesData.js"></script>
      </div>
    )
  }
}
export default Home;