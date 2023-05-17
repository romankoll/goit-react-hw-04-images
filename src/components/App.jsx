import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
// import
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    searchText: '',
  };

  hendleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div>
        <Searchbar hendleSearch={this.hendleSearch} />
        <ImageGallery searchText={this.state.searchText} />
      </div>
    );
  }
}

export default App;
