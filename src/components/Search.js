import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from './../actions/index'
class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            strSearch: ''
        }

        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleSearch(){
        this.props.onSearch(this.state.strSearch);
    }
    handleClear(){
        this.props.onSearch('');
        this.setState({
            strSearch: ''
        })
    }
    handleChange(event){
        this.setState({strSearch: event.target.value});
    }
    
  render() {
    return (
        <div className="col-md-3">
                <div className="input-group">
                    <input value={this.state.strSearch} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                    <button onClick={this.handleSearch} className="btn btn-default" type="button">Go!</button>
                    <button onClick={this.handleClear} className="btn btn-warning" type="button">Clear!</button>
                    </span>
                </div>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return {

    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        onSearch : (strSearch)=>{
            dispatch(actions.searchItem(strSearch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Search);
