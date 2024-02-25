import React from 'react';
const SvgrMock = React.forwardRef((props, ref) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  <span ref={ref} {...props} />
));

export const ReactComponent = SvgrMock;
