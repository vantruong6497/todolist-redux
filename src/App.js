import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control'
import Form from './components/Form'
import List from './components/List'
import {connect} from 'react-redux'

import * as actions from './actions/index'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            itemSelected: null
        }
        this.handleToggoForm = this.handleToggoForm.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSort = this.handleSort.bind(this)
    }
    handleToggoForm(){
        this.props.onToggleForm();
        this.setState({
            itemSelected: null
        })
    }

    handleCancel(){
        this.props.onCloseForm();
    }



    handleSort(orderBy,orderDir){
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }
    render() {
        var {isDisplayForm} = this.props;
        let elmForm = null;
        let itemSelected = this.state.itemSelected;
        // soft
        // items = funcOrderBy(items,[orderBy],[orderDir]);

        if(isDisplayForm){
            elmForm = <Form
                itemSelected={itemSelected}
                onClickCancel={this.handleCancel} />
        }

    return (
        <div className="row">
            {/*Title START*/}
            <Title />
            {/*Title End*/}
            {/*Control START*/}
            <Control
                onClick={this.handleToggoForm}
                isDisplayForm={isDisplayForm}
            />
            {/*Control END*/}
            {/*FORM START*/}
            {elmForm}
            {/*FORM  END*/}
            {/*List START*/}
            <List
                onClickEdit={this.handleEdit}
                // items={items}
            />
            {/*List End */}
        </div>
    );
  }
}
const mapStateToProps = state =>{
    return {
        isDisplayForm: state.isDisplayForm,
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        },
        onCloseForm: () =>{
            dispatch(actions.closeForm())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
