import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from './../actions/index'
class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemSelected: null
        }
    }
    handleDelete(id){
        this.props.onDeleteItem(id);
    }
    handleEdit(){
        this.props.onOpenForm();
        this.props.onEditTask(this.props.item);
    }
  render() {
    const item = this.props.item;
    const index = this.props.index;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td className="text-center">{this.showLevelElement(item.level)}</td>
            <td>
                <a href="#/" onClick={()=>this.handleEdit()} className="btn btn-warning">Edit</a>
                <a href="#/" onClick={()=>this.handleDelete(item.id)} className="btn btn-danger">Delete</a>
            </td>
        </tr>
    );
  }

  showLevelElement(level){
    let elmlevel = <span className="label label-default">Small</span>;
    if(level === 1){
        elmlevel = <span className="label label-info">Medium</span>;
    }else if(level === 2) {
        elmlevel = <span className="label label-danger">High</span>;
    }
    return elmlevel;
  }
}

const mapStateToProps = (state) =>{
    return {
        isDisplayForm: state.isDisplayForm,
        tasks: state.tasks
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        onDeleteItem : (id)=>{
            dispatch(actions.deleteItem(id))
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onEditTask : (task)=>{
            dispatch(actions.editItem(task))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Item);
