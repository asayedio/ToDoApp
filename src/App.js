import React,{ Component } from 'react';
import './App.css';
import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';

class App extends Component {
  state = {
    items :[
      {id:1,task:'Finlize my work',priority:3},
      {id:2,task:'go to doctor',priority:2},
      {id:3,task:'study English',priority:1},
      
    ]
  }
  deleteItem =(id) => {
    /* using splice */
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items})

    /* using filter
    let items = this.state.items.filter(item => {
      return item.id !== id
    });
    this.setState({items})*/
  }
  addItem =(item) =>{
    item.id =Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }
render(){
  return (
    <div className="App">
      <div className="header">
        To do App 
        <ItemList items={this.state.items} deleteItem={this.deleteItem}/>
        <Item addItem={this.addItem}/>
      </div>
    </div>
  );
}
}

export default App;
