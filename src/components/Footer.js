/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/04/09.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from 'react';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter=SHOW_ALL>
      All
    </FilterLink>
    {", "}
    <FilterLink filter=SHOW_ACTIVE>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter=SHOW_COMPLETED>
      Completed
    </FilterLink>
  </p>
);

export default Footer;