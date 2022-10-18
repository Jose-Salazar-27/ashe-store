// External libraries dependencies
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { set, unset, test, userSelector } from '@/redux/redux-slices';

// Components and Styled components

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  console.log(user);
  return (
    <>
      <div>Home.route</div>
      <button onClick={() => dispatch(test())}>test</button>
    </>
  );
}
