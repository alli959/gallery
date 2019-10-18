import React,{Component} from 'react';
import ThumbnailItem from '../ThumbnailItem/ThumbnailItem';

class ThumbnailGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            style: {
                height: '40%', 
                width: '100%',
                background: '#FFD600'
            },
            status: "Not Loaded",
            images: ["https://picsum.photos/id/0/5616/3744"]
        }
    

    }


    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.images !== prevProps.images) {
            const {images} = this.props
          this.setState({
              status: "Loaded",
              images: images
          });
          
        }
      }
    render(){
        if(this.state.status === "Not Loaded"){
            return(
                <div className = "Thumbnail-Bottom" style={this.state.style}>
                    <ThumbnailItem image = {this.state.images[0]}>
                        
                    </ThumbnailItem>

                </div>
            )
        }
        else{

            return(
                <div className = "Thumbnail-Bottom" style={this.state.style}>
                    {this.state.images.map(image => 
                        <ThumbnailItem image = {image} />
                        )}
                    
            </div>
        )
    }
    }
}

export default ThumbnailGrid;