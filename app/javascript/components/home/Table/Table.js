import React from 'react';
import Item from './Item';
import ActiveItem from './ActiveItem';

export default class Table extends React.Component{
    render(){

        const items = this.props.modules.map((data) => {
            const handleWatchVideo = this.props.handleWatchVideo.bind(this, data)
            return(
                data.active ?
                <ActiveItem handleWatchVideo={handleWatchVideo} key={data.id} title={data.title} description={data.description} /> :
                <Item handleWatchVideo={handleWatchVideo} key={data.id} title={data.title} description={data.description} />
            )
        })

        return(
            <div className='pt-5 pb-5'>
                <div className='container'>
                    <div className='text-center'>
                        <h2 className='pt-4 pb-4'>Videos</h2>
                    </div>
                    {items}
                </div>
            </div>
        )
    }
}