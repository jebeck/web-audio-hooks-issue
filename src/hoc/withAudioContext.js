import React from 'react';
import PropTypes from 'prop-types';

import {
  makeGetAudioCtxSingleton,
  useAudioContext,
} from '../hooks/useAudioContext';

function AudioContextWrapper({ Component, getAudioCtx, ...rest }) {
  const audioCtx = useAudioContext({ getAudioCtx });

  return <Component {...audioCtx} {...rest} />;
}

AudioContextWrapper.propTypes = {
  Component: PropTypes.func.isRequired,
  getAudioCtx: PropTypes.func.isRequired,
};

export function withAudioContext(Component) {
  return function AudioContextSingletonWrapper(props) {
    return (
      <AudioContextWrapper
        Component={Component}
        getAudioCtx={makeGetAudioCtxSingleton()}
        {...props}
      />
    );
  };
}
