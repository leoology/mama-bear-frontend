import React from 'react'
class ClothingCard extends React.Component{
  render(){   
     return (
        <div>
            <p> Shop {this.props.type} !</p>
            <img className="clothing-card" src={this.props.image} alt={this.props.name}/>
        </div>
     )
  }
}
export default ClothingCard