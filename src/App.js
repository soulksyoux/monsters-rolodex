import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class  App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount(){
    try{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users })
      });

    }catch(err){
      console.log(err);
    }
  }


  handleChange = e => {
    this.setState({ searchField: e.target.value });  
  }



  render(){


    const { monsters , searchField } = this.state;
    const newMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}/>
        <CardList monsters={monsters}/>
      </div>
    );
  }
}

export default App;
