import React from 'react';
import './Forest.scss';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import Mushroom from '../Mushroom/Mushroom';


class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { mushrooms } = this.props;
    const displayMushrooms = mushrooms.map((mushroom) => (
    <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));
    return (
      <div className="Forest d-flex flex-wrap">
        { displayMushrooms }
      </div>
    );
  }
}

export default Forest;
