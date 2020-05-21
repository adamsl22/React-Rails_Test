import React from 'react';
import Jumbotron from './Jumbotron';
import Table from './Table/Table';
import axios from 'axios';

export default class Home extends React.Component{
    state = {
        modules: []
    }

    componentDidMount(){
        axios.get('/videos.json')
        .then(data => {
            let modules = []
            data.data.data.map((data) => {
                modules.push({id: data.id, title: data.title, description: data.description, active: false})
                this.setState({modules})
            })
        })
        .catch(data => {
            debugger
        })
    }

    handleWatchVideo(i, e){
        e.preventDefault()
        let modules = [...this.state.modules]
        modules.map(data => {
            data.active = false
        })
        i.active = !i.active
        modules[i.id - 1] = i
        this.setState({modules})
    }

    render(){
        return(
            <div>
                <Jumbotron />
                <Table handleWatchVideo={this.handleWatchVideo.bind(this)} modules={this.state.modules}/>
            </div>
        )
    }
}