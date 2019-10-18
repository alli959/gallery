import React, {Component} from 'react';
import './App.css';
import Thumbnail from './components/Thumbnail/Thumbnail';
import { connect } from 'react-redux';

import {getImages} from './actions';


class App extends Component {

  
  componentWillMount() {
    this.props.getImages();
  }
  
  render(){
      return (
        <div className="App">
          <header className="App-header">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            </meta>
          </header>
          <div>
            <Thumbnail images = {this.props.images}/>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images
});

const mapDispachToProps = dispatch => ({
  getImages: () => dispatch(getImages())
});

export default connect(mapStateToProps, mapDispachToProps)(App);
