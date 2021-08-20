import React from 'react';
import Spinner, { SpinnerProps } from 'react-native-loading-spinner-overlay';

export default function Loading(props: SpinnerProps) {
  return <Spinner {...props} overlayColor="#00000077" />;
}
