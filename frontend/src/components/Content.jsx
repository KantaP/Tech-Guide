import React , { Component } from 'react'

class Content extends Component {
    constructor(props){
        super(props)
        this.listItem = [
            {image: 'images/blank.jpg' , title: 'Test1' , descr: 'Hello , I am test 1'},
            {image: 'images/blank.jpg' , title: 'Test2' , descr: 'Hello , I am test 2'},
            {image: 'images/blank.jpg' , title: 'Test3' , descr: 'Hello , I am test 3'},
            {image: 'images/blank.jpg' , title: 'Test4' , descr: 'Hello , I am test 4'},
            {image: 'images/blank.jpg' , title: 'Test5' , descr: 'Hello , I am test 5'},
            {image: 'images/blank.jpg' , title: 'Test6' , descr: 'Hello , I am test 6'},
            {image: 'images/blank.jpg' , title: 'Test7' , descr: 'Hello , I am test 7'},
            {image: 'images/blank.jpg' , title: 'Test8' , descr: 'Hello , I am test 8'},
            {image: 'images/blank.jpg' , title: 'Test9' , descr: 'Hello , I am test 9'},
        ]
    }
    render(){
        return(
            <div className="row">
                <div className="mainListItem">
                    <div className="containerFlex">
                        {
                            this.listItem.map((x,index)=>{
                                return (
                                    <div key={index} className="itemBox">
                                        <div className="itemImage">
                                            <img className="img-thumbnail" src={x.image} width="250" height="150" />
                                        </div>
                                        <div className="itemTitle">
                                            {x.title}
                                        </div>
                                        <div className="itemDescr">
                                            {x.descr}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Content