import React from 'react';

export default class Home extends React.Component{
    state = {
        modules: [
            {id: 1, title: '', description: '', active: false},
            {id: 2, title: '', description: '', active: false},
            {id: 3, title: '', description: '', active: false},
            {id: 4, title: '', description: '', active: false}
        ]
    }
    render(){
        return(
            <div>This is the Home component.</div>
        )
    }
}