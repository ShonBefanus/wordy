import styled from 'styled-components/macro';
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  border
} from 'styled-system';


const Box = styled('div')(
  compose(space, layout, typography, color, flexbox, border),
);

export default Box;

