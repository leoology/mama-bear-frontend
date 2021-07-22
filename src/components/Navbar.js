import React from 'react'
class Navbar extends React.Component{
// handleScroll(){
//     var header= document.getElementById("navbar")
//     header.classList.toggle("sticky", window.scrollY>0)
//     }
  render(){   
     return (
        <nav className="navbar" id="navbar" onScroll={this.handleScroll}>
            <div className='max-width'>
                <ul className="menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/clothes">Clothes</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>      
                </div>
            </div>
        </nav>
     )
  }
}
export default Navbar