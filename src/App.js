import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/searchBox.component'; 

class App extends Component {
  constructor(){
    super();
    this.state = {
      names: [],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({names : users}))
  }

  handleChange = (e) => {
    this.setState({'searchField': e.target.value})
  }

  render() {
    const {names,searchField} = this.state;
    const filteredMonsters = names.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
     return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeHolder='Search Monsters' handleChange={this.handleChange}></SearchBox>
      <CardList monsters={filteredMonsters}>
      
      </CardList>  
      
    </div>
    );
  }
}

export default App;
