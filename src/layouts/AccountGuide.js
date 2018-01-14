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
      <p>블라블라</p>
      <Link to="/account/guide/hehe">요로켕</Link>
      <Link to="/account/guide/haha">저러켕</Link>
      <Route
        path="/account/guide/:title"
        component={Post}
      />
    </div>
  );
};

export default AccountGuide;
