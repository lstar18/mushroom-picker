import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';

class App extends React.Component {
  state = {
    mushrooms: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
  }

  render() {
    const { mushrooms } = this.state;

    return (
      <div className="App">
        <h2> Mushroom Picker </h2>
        <Forest mushrooms={mushrooms} />
      </div>
    );
  }
}

export default App;
