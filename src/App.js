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
render(){
  return (
    <div className="App">
      <div className="header">
        To do App 
        <ItemList items={this.state.items}/>
        <Item />
      </div>
    </div>
  );
}
}

export default App;
