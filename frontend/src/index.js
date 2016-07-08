import React, { Component } from 'react'
import { render } from 'react-dom'
import { Head , SlideContent ,Content , Footer } from './components'

const rootEl = document.getElementById('app')

class Root extends Component{
    constructor(props){
        super(props)
        this.google = google
    }
    componentDidMount(){
    }
    render(){
        return (
            <div >
                <Head />
                <SlideContent />
                <Content />
                <Footer google={this.google}/>
            </div>
        )
    }
}

render(
    <Root />,
  rootEl
)