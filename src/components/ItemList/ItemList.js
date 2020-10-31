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
                    <span className="task">{item.task}</span>
                    <span className="priority">{item.priority}</span>
                    <span className="action delete-icon" onClick={() => deleteItem(item.id)}>{deleteIcon}</span>
                </div>
            )
        })
    ):(<p><font>{exclamationIcon}</font>You don't have items! start adding</p>)
    return(
        <div className="item-list">
            <div>
                <span className="task title">Task</span>
                <span className="priority title">Priority</span>
                <span className="action title">Action</span>
            </div>
             {ItemList}
        </div>
    )
} 
export default ItemList;