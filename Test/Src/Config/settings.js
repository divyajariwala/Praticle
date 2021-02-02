import {Dimensions, Platform} from 'react-native';

const device = Dimensions.get('window');
const devMode = __DEV__;
const settings = {
  baseUrl: !devMode
    ? 'http://192.168.0.123:8080/'
    : 'https://swapi.dev/api/',
  endpoints: {
    getPeople: 'people/',
  },
  version: {
    android: '1.0.0',
    ios: '1.0.0',
  },
  devMode,
  paypalTest: true,
  token: null,
  homepageNoEntryToast: 'Please select location',
  borderIssue: Platform.OS === 'android' && Platform.Version < 21,
  isIphoneX:
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (device.height === 812 || device.width === 812),
  geolocationOptions: {
    enableHighAccuracy: false,
    timeout: 20000,
    maximumAge: 10000,
    distanceFilter: 1,
  },
};
export default settings;
