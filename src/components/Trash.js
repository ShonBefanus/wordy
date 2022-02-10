import React from 'react';
import { Trash2 } from 'react-feather';
import Box, { Props as BoxProps } from './Box';

const Trash = (props) => {

  return (
    <Box
      as="button"
      aria-label='delete'
      width="100%"
      height="100%"
      color="grey"
      py={2}
      px={4}
      css={{ '&:hover': { color: 'black' } }}
      {...props}
    >
      <Trash2 size={16} css={{ margin: 'auto' }} data-automation="trash" />
    </Box>
  );
};

export default Trash;
