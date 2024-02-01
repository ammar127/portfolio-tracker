import React, { Suspense } from "react";
import { Spin } from 'antd';

const Loadable = (Component) => (props) =>
(
  <Suspense fallback={<Spin  fullscreen />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
