import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MindMapView from '@/views/MindMapView.vue'
import BoutonUnactive from '@/views/BoutonUnactivateView.vue'
import Authentification1View from '@/views/Authentification1View.vue'
import SourceView from '@/views/SourceView.vue'
import Authentification2View from '@/views/Authentification2View.vue'
import Obfuscation1View from '@/views/Obfuscation1View.vue'
import Obfuscation2View from '@/views/Obfuscation2View.vue'
import Obfuscation3View from '@/views/Obfuscation3View.vue'
import NativeCodeView from '@/views/NativeCodeView.vue'
import WebPackView from '@/views/WebPackView.vue'
import XSSView from '@/views/XSSView.vue'
import Log4ShellView from '@/views/Log4ShellView.vue'
import TargetView from '@/views/TargetView.vue'
import SolarWindsView from '@/views/SolarWindsView.vue'
import WannaCryView from '@/views/WannaCryView.vue'
import NotPetyaView from '@/views/NotPetyaView.vue'
import BlackCatView from '@/views/BlackCatView.vue'
import DarksideView from '@/views/DarksideView.vue'
import LapsusView from '@/views/AttackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        image: './cyber.png',
      },
    },
    {
      path: '/about',
      name: 'Cyber attack in 2024',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        image: './cyber.png',
      },
    },
    {
      path: '/mindmap',
      name: 'Mind Map',
      component: MindMapView,
      meta: {
        image: './cyber.png',
      },
    },
    {
      path: '/BoutonUnactive',
      name: 'BoutonUnactive',
      component: BoutonUnactive,
      meta: {
        image: './Rootme.png',
      },
    },
    {
      path: '/auth1',
      name: 'Js_Auth1',
      component: Authentification1View,
      meta: {
        image: './Rootme.png',
      },
    },
    {
      path: '/source',
      name: 'Js_Source',
      component: SourceView,
      meta: {
        image: './Rootme.png',
      },
    },
    {
      path: '/auth2',
      name: 'Js_Auth2',
      component: Authentification2View,
      meta: {
        image: './Rootme.png',
      },
    },
    {
      path: '/obfuscation1',
      name: 'Obfuscation1',
      component: Obfuscation1View,
      meta: {
        image: './Rootme.png',
      },
    },
    {
      path: '/obfuscation2',
      name: 'Obfuscation2',
      component: Obfuscation2View,
      meta: {
        image: './Rootme.png',
      },
    },
    {
      path: '/obfuscation3',
      name: 'Obfuscation3',
      component: Obfuscation3View,
      meta: {
        image: './Rootme.png',
      },
    },
    {
      path: '/native_code',
      name: 'Native Code',
      component: NativeCodeView,
      meta: {
        image: './Rootme.png',
      },
    },
    {
      path: '/webpack',
      name: 'Webpack',
      component: WebPackView,
      meta: {
        image: './Rootme.png',
      },
    },
    {
      path: '/Xss',
      name: 'XSS Stockée',
      component: XSSView,
      meta: {
        image: './Rootme.png',
      },
    },
    {
      path: '/log4shell',
      name: 'Log4Shell',
      component: Log4ShellView,
      meta: {
        image: './cyberattack.png',
      },
    },
    {
      path: '/target',
      name: 'Target Attack',
      component: TargetView,
      meta: {
        image: './cyberattack.png',
      },
    },
    {
      path: '/solarwinds',
      name: 'SolarWinds',
      component: SolarWindsView,
      meta: {
        image: './cyberattack.png',
      },
    },
    {
      path: '/wannacry',
      name: 'WannaCry',
      component: WannaCryView,
      meta: {
        image: './cyberattack.png',
      },
    },
    {
      path: '/notpetya',
      name: 'NotPetya',
      component: NotPetyaView,
      meta: {
        image: './cyberattack.png',
      },
    },
    {
      path: '/blackcat',
      name: 'BlackCat',
      component: BlackCatView,
      meta: {
        image: './cyberattack.png',
      },
    },
    {
      path: '/darkside',
      name: 'Darkside/Blackmatter',
      component: DarksideView,
      meta: {
        image: './cyberattack.png',
      },
    },
    {
      path: '/lapsus',
      name: 'Lapsus',
      component: LapsusView,
      meta: {
        image: './cyberattack.png',
      },
    },
  ],
})

export default router
