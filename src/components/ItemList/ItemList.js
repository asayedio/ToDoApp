import React from 'react';
import './ItemList.css';

const ItemList =(props) =>{
    const {items} = props;
    const ItemList = items.map(item => {
        return(
            <div key={item.id}>
                <span>{item.task}</span>
                <span>{item.priority}</span>
                <span>&times;</span>
            </div>
        )
    })
    return(
        <div className="ListItems">
            <span>Task</span>
            <span>Date</span>
            <span>Action</span>
             {ItemList}
        </div>
    )
} 
export default ItemList;