import React, { Component } from 'react';
import './CSS/Navbar.css';

export default class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            scroll: 0,
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll = () => {
        this.setState({
            scroll: window.scrollY
        })
    }
    scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <div className={this.state.scroll < 0.1 ? 'navbarhidden' : 'navbarmain'}>
            <div className="emptyspaceone"></div>
                <ul id={this.state.scroll < 0.1 ? 'hiddenul' : 'shownul'}>
                    <li>LOGO</li>
                    <li>SKILLS</li>
                    <li>PROJECTS</li>
                    <li id='contacttab'>CONTACT</li>
                </ul>
            <div className="emptyspacetwo"></div>
            </div>
        );
    }
}