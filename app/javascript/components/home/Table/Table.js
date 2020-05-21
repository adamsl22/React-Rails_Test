import React from 'react';
import Item from './Item';

export default class Table extends React.Component{
    render(){

        const items = this.props.modules.map((data) => {
            return <Item key={data.id} title={data.title} description={data.description} />
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