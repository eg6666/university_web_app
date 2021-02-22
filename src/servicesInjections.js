import Vue from 'vue';
import axios from '@/services/axios';
import api from '@/services/api';
import session from '@/services/session';

Vue.prototype.$session = session;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;