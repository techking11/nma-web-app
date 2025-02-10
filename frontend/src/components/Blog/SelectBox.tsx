import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';

interface ICategory {
  title: string;
  type: string;
  items: {
    name: string;
    value: string;
  }[];
}

export default function SelectBox({ title, type, items }: ICategory) {
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => setAge(event.target.value);
  return (
    <Box className="flex flex-col md:flex-row items-center w-full">
      <p className="pr-5 text-xl w-full md:w-[25%] mb-3 md:mb-0 md:text-right text-gray-700">
        {title}
      </p>
      <FormControl className="w-full md:w-[75%]">
        <Select value={age} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <p>{type}</p>
          </MenuItem>
          {items.map((item, i) => (
            <MenuItem key={i} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
