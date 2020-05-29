import React, { Component } from 'react';
import '../assets/home.less'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    componentDidMount() {
        console.log(this.props)
        setTimeout(() => {
            this.setState({
                text: 'This is Home Page!!!'
            })
        }, 2000)
    }

    render() {
        let { text } = this.state
        return (
            <div className="home">
                <div className='item' onClick={()=>this.handleRoute('demo1')}>
                    Demo1
                </div>
                <div className='item' onClick={()=>this.handleRoute('demo2')}>
                    Demo2
                </div>
                <div className='item' onClick={()=>this.handleRoute('demo3')}>
                    Demo3
                </div>
            </div>
        )
    }

    handleRoute = (path) => {
        let { history } = this.props;
        history.push({
            pathname: path
        })
    }
    handleClick = () => {
        this.props.history.push({
            pathname: '/count'
        })
        console.log('11')
    }
}