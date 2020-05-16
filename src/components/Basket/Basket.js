import React from 'react';
import './Basket.scss';
import mushroomShape from '../../helpers/propz/mushroomShape';
import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  static propTypes = {
    basket: mushroomShape.mushroomShape,
  }

  render() {
    const { basket } = this.props;
    const basketMushrooms = basket.map((mushroom, i) => (
      <Mushroom key={i + 1} mushroom={mushroom}/>
    ));

    return (
      <div>
        <h2> Basket of Mushrooms </h2>
        <div className="Basket d-flex flex-wrap m-2">
          {basketMushrooms}
        </div>
      </div>
    );
  }
}
export default Basket;
