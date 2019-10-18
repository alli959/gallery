import React, {Component} from 'react';

import ThumbnailTop from '../ThumbnailTop/ThumbnailTop';
import ThumbnailGrid from '../ThumbnailGrid/ThumbnailGrid';

class Thumbnail extends Component {
    constructor(props){
        super(props);
        this.state = {
            ThumbnailStyle: {
                background: '#ddd',
                width: '700px',
                height: '600px',
                margin: '40px auto'
              },
              images: []
        }
    }

    async componentDidMount(){
      await this.getData();

    }

    async getData(){
      setTimeout(() => {
        const data = [];
        for(var i = 0; i<30; i++){
          data.push(this.props.images[i].download_url);
        }
        this.setState({images: data})
      }, 1000)
    }



    render(){
        return (
          <div className="Thumbnail">
          <header className="Thumbnail-header">
          </header>
            <div className = "Thumbnail-main" style = {this.state.ThumbnailStyle}>
                <React.Fragment>
                  <ThumbnailTop />
                  <ThumbnailGrid images = {this.state.images}/>
                  {console.log(this.state.images)}
                </React.Fragment>
            </div>
        </div>
      );
    }
  }
  
  export default Thumbnail;