import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from './../actions/index'
class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            task_id : '',
            task_name: '',
            task_level: 0
        }


        this.closeForm = this.closeForm.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChangeAdd = this.handleChangeAdd.bind(this);
    }
    onReset = () =>{
        this.setState({
            task_id : '',
            task_name: '',
            task_level: 0
        })
    }
    componentWillMount(){
        let item = this.props.itemSelected;
        if(item !== null ){
            this.setState({
                task_id : item.id,
                task_name: item.name,
                task_level: item.level
            })
        }
    }
    componentWillReceiveProps(nextProps){
        let item = nextProps.itemSelected;
        if(item !== null ){
            this.setState({
                task_id : item.id,
                task_name: item.name,
                task_level: item.level
            })
        }
    }
    handleAdd(){
        this.props.onSaveTask(this.state);
        this.props.onCloseForm(this.state);
    }
    handleChangeAdd(event){
        const target = event.target; //input or selectbox
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }
    closeForm(){
        this.props.onClickCancel();
    }
  render() {
    return (
        <div className="row">
            <div className="col-md-6 pull-right">
                <form className="form-inline">
                    <div className="form-group">
                        <div className="sr-only" htmlFor="task_name">Label
                        </div>
                        <input onChange={this.handleChangeAdd} value={this.state.task_name} name="task_name"  type="text" id="task_name" className="form-control" placeholder="Task Name"  />
                    </div>
                    <div className="form-group">
                        <div className="sr-only" htmlFor="inputDs">Label</div>
                        <select onChange={this.handleChangeAdd} value={this.state.task_level} name="task_level"  id="inputDs" className="form-control" required ref="task_level">
                            <option value={0}>Small</option>
                            <option value={1}>Medium</option>
                            <option value={2}>High</option>
                        </select>
                    </div>
                    <button onClick={this.handleAdd} className="btn btn-primary" type="button">Submit</button>
                    <button onClick={this.closeForm} className="btn btn-danger" type="button">Cancel</button>
                </form>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return {
        itemSelected: state.itemSelected
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        onSaveTask : (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () =>{
            dispatch(actions.closeForm())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Form);
