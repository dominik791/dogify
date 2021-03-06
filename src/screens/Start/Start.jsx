import React, { Component } from 'react';
import Heading from '../../common/components/Heading/Heading';
import Logo from '../../common/components/Logo/Logo';
import styles from './Start.module.scss';

class Start extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Logo hasText={false} logoClassName={styles.logo} />
        <Heading text={'Start'} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
          anim id est laborum.
        </p>
      </div>
    )
  }
}

export default Start;
