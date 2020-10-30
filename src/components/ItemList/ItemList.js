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
        <div>
             {ItemList}
        </div>
    )
} 
export default ItemList;