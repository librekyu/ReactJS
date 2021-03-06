import React, { useCallback } from 'react';
import Router from 'next/router';
import { COMMON_MESSAGE } from '../src/const/commonMessage';

const Home = (props) => {
  const onClickButton = useCallback((e) => {
    e.preventDefault();
    Router.push('/router/inputRouter');
  }, []);

  return (
    <>
      {COMMON_MESSAGE.INDEX_WELCOME_STRING}
      <br/>
      <button onClick={onClickButton}>To inputRouter</button>
    </>
  );
};

Home.getInitialProps = (props) => {
  console.log('*****************  Home get initial props  ***************************');
};

export default Home;
