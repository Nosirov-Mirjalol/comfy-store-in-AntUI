import React from 'react';
import { Select } from 'antd';
const onChange = value => {
  console.log(`selected ${value}`);
};
const onSearch = value => {
  console.log('search:', value);
};
const App = () => (
  <Select
    showSearch={{ optionFilterProp: 'label', onSearch }}
    placeholder="Select a person"
    onChange={onChange}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
);
export default App;