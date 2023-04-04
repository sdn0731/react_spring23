import React, { Component } from "react";
import MainBody from "./MainBody";
import Navigation from "./Navigation";

class Header extends Component{
    //constructor for state
    constructor(props){
        super(props)
        this.state = { 
            count: 0, 
            theme : window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
        }
    }

    render(){
        const { linkText, linkUrl } = this.props
        // this.props.linkText
        console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
        console.log(this.state)
        return(
            <header className={`App-header ${this.state.theme}`}>
                <Navigation />
                <MainBody />
            </header>
        )
    }
}

export default Header