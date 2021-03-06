import React from 'react';


class SearchBar extends React.Component{
  state ={term:''}
  onInputChange = (event) =>{
    this.setState({term:event.target.value});
    

  }
  onFromSubmit =(event)=>{
    event.preventDefault();
     
    this.props.onTermSubmit(this.state.term);
    
  }

  render(){
    return(
      <div className ='search-bar ui segment'>
        <form  onSubmit ={ this.onFromSubmit} className ="ui form">
          <div className="feild">
            <label>Vedio Search</label>
            <input type ="text" value ={this.state.term} onChange={this.onInputChange}/>
          </div>

        </form>
        </div>
    )
  }

    

}

export default SearchBar;