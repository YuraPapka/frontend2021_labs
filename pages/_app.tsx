import React, {FC} from 'react';
import {AppProps} from 'next/app';

import {Provider} from '../src/store/provider';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
