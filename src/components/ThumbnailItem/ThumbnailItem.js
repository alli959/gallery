import React, {Component} from 'react';


class ThumbnailItem extends Component {
    constructor(props){

        super(props)

        this.state = {
            image: "pic_trulli.jpg",
            style: {
                height: '40%', 
                width: '25%',
            }

        };
    }

    componentDidMount(){
    }

    render(){

        return(
            <div className = "Thumbnail-Item"  style={this.state.style}>
                <img src={this.props.image} alt="Italian Trulli" style = {{height: '100%', width: '100%'}}/>

            </div>
    )
}
}

export default ThumbnailItem;