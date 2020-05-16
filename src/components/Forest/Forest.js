import React from 'react';
import './Forest.scss';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import Mushroom from '../Mushroom/Mushroom';


class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
    pickMushroom: PropTypes.func.isRequired,
    checkMushroomBasket: PropTypes.func.isRequired,
  }

  pickMushroomEvent = (e) => {
    e.preventDefault();
    const { pickMushroom } = this.props;
    pickMushroom();
  }

  render() {
    const { mushrooms } = this.props;
    const displayMushrooms = mushrooms.map((mushroom) => (
    <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));
    return (
      <div className="Forest">
        <h3 className="forest-header"> Forest Of Mushrooms </h3>
        <button className= "btn btn-success" onClick={this.pickMushroomEvent}> Pick a Mushroom</button>
        <div className="d-flex flex-wrap m-1">
        { displayMushrooms }
      </div>
      </div>
    );
  }
}

export default Forest;
