
import React from "react";
import axios from 'axios';
import './App.css';
class App extends React.Component {
    state = {
        advice: '',
        id: ''
    }
    componentDidMount() {
        // console.log('componentDidMount')
        this.fetchTip();
    }

    fetchTip = () =>{
        axios.get('https://api.adviceslip.com/advice').then((response)=>{
            const {advice} = response.data.slip
            const {id} = response.data.slip
            // console.log(advice)
            this.setState({advice});
            this.setState({id});
        })
        .catch((error)=>{
            console.log(error)
        });
    }
    render() {
        const {advice} = this.state;
        const {id} = this.state;
        return ( 
        <div className='app'>
            <div className='card'>
                <h1 className="heading">{advice}</h1>
                
                <button className="button" onClick={this.fetchTip}>
                    <span>Trade!</span>
                </button>
            </div>
        </div>

        );
    }
}

export default App;