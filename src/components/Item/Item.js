import React,{ Component } from 'react';
import './Item.css';

class Item extends Component {
  state = {
    items :[
      {id:1,name:'ahmed',age:23},
      {id:2,name:'ahmed',age:23},
      {id:3,name:'ahmed',age:23},
      
    ]
  }
render(){
  return (
    <div>
        Item
    </div>
  );
}
}

export default Item;
