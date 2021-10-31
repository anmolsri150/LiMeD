import Vue from 'vue'
import App from './App'

// BootstrapVue add
import BootstrapVue from 'bootstrap-vue'
// Router & Store add
import router from './router'
import store from './store'
// Multi Language Add
import en from './locales/en.json'
import es from './locales/es.json'
import VueI18n from 'vue-i18n'
import { firebaseConfig } from './constants/config'
// Notification Component Add
import Notifications from './components/Common/Notification'
// Breadcrumb Component Add
import Breadcrumb from './components/Common/Breadcrumb'
// RefreshButton Component Add
import RefreshButton from './components/Common/RefreshButton'
// Colxx Component Add
import Colxx from './components/Common/Colxx'
// Perfect Scrollbar Add
import vuePerfectScrollbar from 'vue-perfect-scrollbar'
import contentmenu from 'v-contextmenu'
import VueLineClamp from 'vue-line-clamp'
import VueScrollTo from 'vue-scrollto'
import firebase from 'firebase/app'
import 'firebase/auth'
import { getCurrentLanguage } from './utils'
import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('fa9aaabd-40cb-4265-80f7-b985cc130dd4', 'ropsten', { scope: ['email'] });
const web3 = new Web3(portis.provider)
window.portis = portis;
window.web3 = web3;
// web3.eth.getAccounts((error, accounts) => {
//   console.log(accounts);
// });

window.contract = new web3.eth.Contract([
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "addAuth",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_address",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_contact",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "addHospital",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_phone",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_gender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_dob",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_bloodgroup",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "addPatient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_category",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_ipfs",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_desc",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_stat",
        "type": "string"
      }
    ],
    "name": "addRecord",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "getHospitalByAddress",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "streetAddress",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "contact",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getHospitalById",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "streetAddress",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "contact",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "getPatientDetails",
    "outputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_phone",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_gender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_dob",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_bloodgroup",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "getPatientRecords",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "_name",
        "type": "string[]"
      },
      {
        "internalType": "string[]",
        "name": "_category",
        "type": "string[]"
      },
      {
        "internalType": "string[]",
        "name": "_description",
        "type": "string[]"
      },
      {
        "internalType": "string[]",
        "name": "_status",
        "type": "string[]"
      },
      {
        "internalType": "string[]",
        "name": "_date",
        "type": "string[]"
      },
      {
        "internalType": "string[]",
        "name": "ipfs",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "hospitalList",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "index",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pindex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "revokeAuth",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
], "0x15eAC431EE991111E13d4FD86b883Ebd1D1a4752")
Vue.use(BootstrapVue);
Vue.use(VueI18n);
const messages = { en: en, es: es };
const locale = getCurrentLanguage();
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: 'en',
  messages
});
Vue.use(Notifications);
Vue.use(require('vue-shortkey'));
Vue.use(contentmenu);
Vue.use(VueScrollTo);
Vue.use(VueLineClamp, {
  importCss: true
});

Vue.component('piaf-breadcrumb', Breadcrumb);
Vue.component('b-refresh-button', RefreshButton);
Vue.component('b-colxx', Colxx);
Vue.component('vue-perfect-scrollbar', vuePerfectScrollbar);

Vue.prototype.$portis = portis;
Vue.prototype.$web3 = web3;

// firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

export default new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
