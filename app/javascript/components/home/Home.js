import React from 'react';
import Jumbotron from './Jumbotron';
import Table from './Table/Table';

export default class Home extends React.Component{
    state = {
        modules: [
            {id: 1, title: '', description: '', active: false},
            {id: 2, title: '', description: '', active: false},
            {id: 3, title: '', description: '', active: false},
            {id: 4, title: '', description: '', active: false}
        ]
    }

    handleWatchVideo(i, e){
        e.preventDefault()
        const modules = [...this.state.modules]
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