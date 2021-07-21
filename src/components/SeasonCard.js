import React from 'react'
class SeasonCard extends React.Component{
    render(){
        return(
            <div>
                <h2> It's {this.props.season}! Let's buy apparel.</h2>
                <img src={this.props.imag} alt={this.props.season} />
            </div>
        )
    }

}
export default SeasonCard