import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import './Item.css';
const addIcon = <FontAwesomeIcon icon={faCalendarPlus} /> 
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
    if(e.target.task.value ===''){
      this.props.errorMessage('Enter the required filed!')
      return false;
    }
    else{
      this.props.addItem(this.state)
      this.setState({
        task:'',
        priority:''
      })
    }
  }
render(){
  return (
    <div>
        <form> 
          <input type="text" placeholder="Enter task name ..." id="task" onChange={this.handleChange} value={this.state.task}/>
          <input type="number" placeholder="Enter task priority ..." id="priority" onChange={this.handleChange} value={this.state.priority}/>
          <button type="button" className="addIcon" onClick={this.handleSubmit}>{addIcon}</button> 
        </form>
    </div>
  );
}
}

export default Item;
