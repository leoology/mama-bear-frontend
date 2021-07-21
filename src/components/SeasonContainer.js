import React from 'react'
import SeasonCard from './SeasonCard'
class SeasonContainer extends React.Component {
    state={
        season:"",
        image:""

    }
    componentDidMount(){
        this.determineSeason()
    }
    determineSeason(){
        const a = new Date().getMonth() + 1
        if(a===12|1|2){
            debugger
            this.setState({season:"Winter", image:"https://engayla.com/wp-content/uploads/2019/11/winter-clothing-e1572933890557.jpg"})

        }
        else if(a===3|4|5){
            this.setState({season:"Spring", image:"https://cdn.rtrcdn.com/assets/imgs/0520_Return_Mobile.jpg"})
        }
        
        else if(a===6|7|8){
            
            this.setState({season:"Summer", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROz2YySora0NoPvsxl0srodLh299dbhcVD2g&usqp=CAU"})

        }
        else if(a===9|10|11){
            this.setState({season:"Autumn", image:"https://www.moneycrashers.com/wp-content/uploads/2019/01/transition-summer-wardrobe-fall-clothing-fashion.jpg"})
        }
        // switch (a){
        //     case 12|1|2:
        //     return {season: this.setState.season="Winter"}
        //     case 3|4|5:
        //     return{season: this.setState.season="Spring"}
        //     case 6|7|8:
        //     return{season: this.setState.season="Summer"}
        //     case 9|10|11:
        //         return{season: this.setStateseason="Autumn"}
        //     default: return this.state
        // }

    }
    createSeasonCard(){
        return (<div>
            <SeasonCard img={this.state.image} season={this.state.season} />
            </div>)
    }
    render(){
        return(
            <div>
                {this.createSeasonCard}
            </div>
        )
    }

}
export default SeasonContainer 