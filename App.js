import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Navigation} from './src/services';
import {Wrapper} from './src/components';
import {Provider} from 'react-redux';
import store from './src/Redux/index';
console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
        <Provider store={store}>
          <Navigation />
        </Provider>
      </Wrapper>
    );
  }
}

export default App;
