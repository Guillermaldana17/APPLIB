import React, { Component } from 'react'

class Search extends Component{
    constructor(props){
        super(props);
    }
    onChangeEvent = (e) => {
       const query = e.target.value.toString().toLowerCase();
       this.props.onsearch(query); 
    }
    render(){
        return(
           <input className='form-control' type='text' onChange={this.onChangeEvent}/>
        )
    }
}

export default Search;