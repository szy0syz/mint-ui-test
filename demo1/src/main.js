import Vue from 'vue';
import App from './app';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});
