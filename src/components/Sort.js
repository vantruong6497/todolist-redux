import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from './../actions/index'
class Sort extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
        this.handleSort = this.handleSort.bind(this)
    }

    handleSort = (orderBy,orderDir)=>{
        this.props.onSort({
            orderBy: orderBy,
            orderDir: orderDir
        })
        
    }
  render() {
    let {by,dir} = this.props.sort
    let order = by + '-' + dir
    return (
        <div className="col-md-3">
            <div className="dropdown">
                <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu">
                        <li><a onClick={() =>this.handleSort('name','asc')} href="#/">NAME ASC</a></li>
                        <li><a onClick={() =>this.handleSort('name','desc')} href="#/">NAME DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a onClick={() =>this.handleSort('level','asc')} href="#/">LEVEL ACS</a></li>
                        <li><a onClick={() =>this.handleSort('level','desc')} href="#/">LEVEL DESC</a></li>
                    </ul>
                    <span className="badge  badge-success">{order}</span>
                </div>
            </div>
        </div>
    );
  }
}

var mapStateToProps = state =>{
    return{
        sort : state.sort
    }
}
var mapDispatchProps = (dispatch, props) =>{
    return{
        onSort : (sort) =>{
            dispatch(actions.sortItem(sort))
        }
    }
}
export default connect(mapStateToProps,mapDispatchProps) (Sort);
