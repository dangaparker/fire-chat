import React, { Component } from 'react'

class ChooseName extends Component {
    state = {
        name: '',
        color: '#ffffff'
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log('Preferences', this.state);
    }

    render() {
        const colorStyle = {
            width: '100%',
            height: '2em',
            border: 'none',
            boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14)'
        }

        const {color, name} = this.state;

        return (
            <div>
                <div>
                    <h1 className="center">Pick Username</h1>
                    <h5 className="center">and Favorite Color</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col s8 offset-s2">
                            <label>Username</label>
                                <input type="text" value = {name} onChange={e => this.setState({name: e.target.value})}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 offset-s2">
                                <label>Favorite Color</label>
                                <input style={colorStyle} type="color" value ={color} onChange={e => this.setState({color: e.target.value})}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s8 offset-s2 right-align">
                                <button className="btn blue-grey">Set Preferences</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ChooseName
