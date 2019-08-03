import React, { Component } from 'react'
import './Tour.scss'

export default class Tour extends Component {

    state={
        showInfo: false
    }

handleInfo = () => {
    this.setState({
        showInfo: !this.state.showInfo
    })
}

    render() {
        console.log(this.props);
        
const{id, city, img, name, info}= this.props.tour;
const {removeTour} = this.props;

        return (
            <article className="tour">

                <div className="img-container">
                    <img width="200" src={img} alt=""/>
           
                <span className="close-btn" onClick={()=>{removeTour(id)}}>
                    <i className="fas fa-window-close"></i>
                </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h3>{name}</h3>
                    <h5>info {""} 
                        <span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span></h5>
    
    {this.state.showInfo && (<p>
                    {info}
                </p>)}
               
                </div>
                
            </article>
        )
    }
}
