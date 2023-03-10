import { useMediaQuery } from 'react-responsive';

const ResponsiveQueries = {
  SD: {
    maxWidth: 719,
  },
  HD: {
    minWidth: 720,
    maxWidth: 1279,
  },
  HDplus: {
    minWidth: 1280,
    maxWidth: 1599,
  },
  FHD: {
    minWidth: 1600,
    maxWidth: 2559,
  },
  QHD: {
    minWidth: 2560,
    maxWidth: 3199,
  },
  QHDplus: {
    minWidth: 3200,
    maxWidth: 3839,
  },
  UHD: {
    minWidth: 3840,
  },
};

const IsQ = () => {
  const isQuery = {
    SD: useMediaQuery(ResponsiveQueries.SD),
    HD: useMediaQuery(ResponsiveQueries.HD),
    HDplus: useMediaQuery(ResponsiveQueries.HDplus),
    FHD: useMediaQuery(ResponsiveQueries.FHD),
    QHD: useMediaQuery(ResponsiveQueries.QHD),
    QHDplus: useMediaQuery(ResponsiveQueries.QHDplus),
    UHD: useMediaQuery(ResponsiveQueries.UHD),
  };
  return isQuery;
};

export default IsQ;
