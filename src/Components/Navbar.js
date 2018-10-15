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
                <ul>
                    <li>Logo</li>
                    <li>Skills</li>
                    <li>Projects</li>
                </ul>
            </div>
        );
    }
}