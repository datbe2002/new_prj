import React from 'react';

interface ISelect<T = React.Key> {
  value?: string | number | null;
  label?: string;
  data?: T;
}

export default ISelect;
