import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';

const App = ({ message, name, pages }) => {

  var pagelist = pages.map((page, index) => <div index={index}>{page.id} - <a href={page.uri}>{page.name}</a></div>)
  return (
    <>
      <div className={styles.container}>
        <p className={styles.text}>
          {message} {name}
        </p>
      </div>
      {pagelist}
    </>
  );
};

App.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
  pages: PropTypes.array
};

export default App;
