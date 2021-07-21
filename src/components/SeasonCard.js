import React from 'react'
class SeasonCard extends React.Component{
    render(){
        return(
            <div >
                <div id={this.props.season} className="season">
                <h1 id="season-card-h1">
                It's {this.props.season}!{"\n" }<br></br> 
                Let's buy apparel.
                </h1>
                </div>
                
                <img id="season-image"src={this.props.image} alt={this.props.season}></img>
            </div>
        )
    }

}
export default SeasonCard


shirt {
    tags: "yellow shirt gucci summer female"
}

search(keywords){
    let clothes = tags.filter(tag => tag === keywords)
}