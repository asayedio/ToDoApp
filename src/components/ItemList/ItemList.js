import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import './ItemList.css';

const ItemList =(props) =>{
    const {items,deleteItem} = props;
    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />  
    const exclamationIcon = <FontAwesomeIcon icon={faExclamationTriangle} />
    let length = items.length;
    const ItemList = length ?(
        items.map(item => {
            return(
                <div key={item.id}>
                    <span>{item.task}</span>
                    <span>{item.priority}</span>
                    <span onClick={() => deleteItem(item.id)}>{deleteIcon}</span>
                </div>
            )
        })
    ):(<p>{exclamationIcon}You don't have items! start adding</p>)
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