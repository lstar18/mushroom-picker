import React from 'react';
import './App.scss';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({ mushrooms, basket });
  }

  pickMushroom = () => {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    mushroomData.pickAMushroom();
    this.setState({ mushrooms, basket });
  }

  render() {
    const { mushrooms, basket } = this.state;

    return (
      <div className="App">
        <h1> Mushroom Picker </h1>
        <Forest mushrooms={mushrooms} pickMushroom={this.pickMushroom} />
        <Basket basket={basket} />
      </div>
    );
  }
}

export default App;
