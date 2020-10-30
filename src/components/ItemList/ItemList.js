import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ItemList.css';

const ItemList =(props) =>{
    const {items} = props;
    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />
    const ItemList = items.map(item => {
        return(
            <div key={item.id}>
                <span>{item.task}</span>
                <span>{item.priority}</span>
                <span>{deleteIcon}</span>
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