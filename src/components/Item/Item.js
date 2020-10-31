import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Item.css';
const addIcon = <FontAwesomeIcon icon={faPlus} /> 
class Item extends Component {
  state = {
    task:'',
    priority:' '
  } 
  handleChange = (e) =>{
    this.setState({
      //the birlant id
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) =>{
    // to prevent the default refresh
    e.preventDefault();
    this.props.addItem(this.state)
      this.setState({
        task:'',
        priority:''
      })
  }
render(){
  return (
    <div>
        <form> 
          <input type="text" placeholder="Enter task name ..." id="task" onChange={this.handleChange} value={this.state.task}/>
          <input type="number" placeholder="Enter priority ..." id="priority" onChange={this.handleChange} value={this.state.priority}/>
          <input type="submit" className="addIcon"  id="submit" value="Add" onClick={this.handleSubmit}/>
          
        </form>
    </div>
  );
}
}

export default Item;
