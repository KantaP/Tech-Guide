import React , { Component } from 'react'

class Head extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="row">
                <div className="row">
                    <div className="text-center">
                        <img className="img-circle" src="images/my.jpg" width="135" height="135" />
                    </div>
                </div>
                <div className="row">
                    <div className="text-center">
                        <ul className="mainMenu">
                            <li><a href="#" >Home</a></li>
                            <li><a href="#" >About</a></li>
                            <li><a href="#" >Contact</a></li>
                            <li><a href="#" >Portfolio</a></li>
                        </ul>
                    </div>
                </div>
            </div> 
        )
          
    }
}

export default Head