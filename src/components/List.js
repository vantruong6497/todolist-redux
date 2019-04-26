import React, { Component } from 'react';
import Item from './Item'
import { connect } from 'react-redux'
import {includes, orderBy as funcOrderBy } from 'lodash'
class List extends Component {

    constructor(props){
        super(props);

        this.state = {
        }
    }
  render() {
    //search
    var {items, strSearch,sort} = this.props;

    items = items.filter((item)=>{
        return includes (item.name.toLowerCase(), strSearch.toLowerCase())
    })
    //sort
    items = funcOrderBy(items,[sort.by],[sort.dir]);
    const elmItem = items.map((item,index)=>{
        return (
            <Item
                onClickEdit={this.props.onClickEdit}
                key={index}
                item={item}
                index={index} />
        )
    })
    return (
        <div className="row">
            <div className="col-md-12 mt-5">
                <div className="card mb-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                          <h3 className="panel-title">List Task</h3>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Task</th>
                                    <th className="text-center">Level</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>{elmItem}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        items : state.tasks,
        strSearch: state.search,
        sort: state.sort
    }
}
export default connect(mapStateToProps, null) (List);
