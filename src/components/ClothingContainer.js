import React from 'react'
import ClothingCard from './ClothingCard'
// import db from './tempDb.json'
class ClothingContainer extends React.Component{
    state = {
        clothing: []
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        fetch('http://localhost:3000/clothing')
        .then(resp => resp.json())
        .then(json => {
            this.setState({clothing: json})
        })
    }
    createCards = () => {
        return this.state.clothing.map(element => {
            return <ClothingCard name={element.name} type={element.type} image={element.image}/>
        })
    }
  render(){   
     return (
        <div className="categories">
            {this.createCards()}
        </div>
     )
  }
}
export default ClothingContainer