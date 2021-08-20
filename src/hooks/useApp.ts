import { useContext } from 'react';
import { AppContext } from '../providers/app';

const useApp = () => {
  const context = useContext(AppContext);

  return context;
};

export default useApp;
