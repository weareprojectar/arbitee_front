import React from 'react';
import { Route, Link } from 'react-router-dom';

const Post = ({match}) => {
  return (
    <h2>
      {match.params.title}
    </h2>
  )
}

const AccountGuide = () => {
  return (
    <div>
      <p>Arbiter 툴과 ABT 코인 이용하기</p>
      <Link to="/account/guide/hehe">Arbiter툴 이용을 위한 계좌 만들기</Link>
      <Link to="/account/guide/haha">ABT 코인 입출금을 위한 계좌 만들기</Link>
      <Route
        path="/account/guide/:title"
        component={Post}
      />
    </div>
  );
};

export default AccountGuide;
