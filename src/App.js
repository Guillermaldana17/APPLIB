import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu/';
import List from './Components/List/';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: 1, rating: 1, title: 'NOAH', image: 'Libro01.png' },
        { id: 2, rating: 4, title: 'EL ENVIO', image: 'Libro02.png' },
        { id: 3, rating: 4, title: 'ASIENTO 7A', image: 'Libro03.png' },
        { id: 4, rating: 4, title: 'TERAPIA', image: 'Libro04.png' },
        { id: 5, rating: 4, title: 'EL PROYECTO JOSHUA', image: 'Libro05.png' },
        { id: 6, rating: 5, title: 'EL PASAJERO 23', image: 'Libro06.png' }
      ],
      copyBooks: []
    };
  }
  componentDidMount() {
    this.initBooks();
  }

  initBooks = () => {
    this.setState((state, props) => ({
      copyBooks: [...state.books]
    }));
  }
  onAdd = (item) => {
    let temp = [... this.state.books];
    const id = temp[temp.length - 1].id +1;
    item['id'] = id;
    temp.push(item);
    this.setState({ books: [...temp] });
    this.initBooks();
  }
  onSearch = (query) => {
    if (query === '') {
      this.initBooks();
    } else {
      const temp = [... this.state.books]
      
      const res = temp.filter(
        elem => {return elem.title.toLowerCase().indexOf (query) > -1}
      )
      /* temp.forEach(item => {
        if (item.title.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        } 
      });*/

      this.setState({ copyBooks: res })
    }
  }
  onUpdateRating = (item) => {
    var temp = [... this.state.books];
    const index = temp.findIndex(x => x.id === item.id);

    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({books: [...temp]});
    this.initBooks();
  }
  onRemove = (id) => {
    var temp = [... this.state.books];
    const res = temp.filter(item => item.id != id);

    this.setState({books: [...res]});
    this.initBooks();
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Menu 
            title='GUINIC-Libros' 
            onadd={this.onAdd} 
            onsearch={this.onSearch} />
          <List 
            items={this.state.copyBooks}  
            onupdaterating = {this.onUpdateRating}
            onremove={this.onRemove}/>
        </div>
      </div>
    )
  }

}

export default App;
