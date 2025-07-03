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
        image: '../../public/cyber.png',
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
        image: '../../public/cyber.png',
      },
    },
    {
      path: '/mindmap',
      name: 'Mind Map',
      component: MindMapView,
      meta: {
        image: '../../public/cyber.png',
      },
    },
    {
      path: '/BoutonUnactive',
      name: 'BoutonUnactive',
      component: BoutonUnactive,
      meta: {
        image: '../../public/Rootme.png',
      },
    },
    {
      path: '/auth1',
      name: 'Js_Auth1',
      component: Authentification1View,
      meta: {
        image: '../../public/Rootme.png',
      },
    },
    {
      path: '/source',
      name: 'Js_Source',
      component: SourceView,
      meta: {
        image: '../../public/Rootme.png',
      },
    },
    {
      path: '/auth2',
      name: 'Js_Auth2',
      component: Authentification2View,
      meta: {
        image: '../../public/Rootme.png',
      },
    },
    {
      path: '/obfuscation1',
      name: 'Obfuscation1',
      component: Obfuscation1View,
      meta: {
        image: '../../public/Rootme.png',
      },
    },
    {
      path: '/obfuscation2',
      name: 'Obfuscation2',
      component: Obfuscation2View,
      meta: {
        image: '../../public/Rootme.png',
      },
    },
    {
      path: '/obfuscation3',
      name: 'Obfuscation3',
      component: Obfuscation3View,
      meta: {
        image: '../../public/Rootme.png',
      },
    },
    {
      path: '/native_code',
      name: 'Native Code',
      component: NativeCodeView,
      meta: {
        image: '../../public/Rootme.png',
      },
    },
    {
      path: '/webpack',
      name: 'Webpack',
      component: WebPackView,
      meta: {
        image: '../../public/Rootme.png',
      },
    },
    {
      path: '/Xss',
      name: 'XSS Stockée',
      component: XSSView,
      meta: {
        image: '../../public/Rootme.png',
      },
    },
    {
      path: '/log4shell',
      name: 'Log4Shell',
      component: Log4ShellView,
      meta: {
        image: '../../public/cyberattack.png',
      },
    },
    {
      path: '/target',
      name: 'Target Attack',
      component: TargetView,
      meta: {
        image: '../../public/cyberattack.png',
      },
    },
    {
      path: '/solarwinds',
      name: 'SolarWinds',
      component: SolarWindsView,
      meta: {
        image: '../../public/cyberattack.png',
      },
    },
    {
      path: '/wannacry',
      name: 'WannaCry',
      component: WannaCryView,
      meta: {
        image: '../../public/cyberattack.png',
      },
    },
    {
      path: '/notpetya',
      name: 'NotPetya',
      component: NotPetyaView,
      meta: {
        image: '../../public/cyberattack.png',
      },
    },
    {
      path: '/blackcat',
      name: 'BlackCat',
      component: BlackCatView,
      meta: {
        image: '../../public/cyberattack.png',
      },
    },
    {
      path: '/darkside',
      name: 'Darkside/Blackmatter',
      component: DarksideView,
      meta: {
        image: '../../public/cyberattack.png',
      },
    },
    {
      path: '/lapsus',
      name: 'Lapsus',
      component: LapsusView,
      meta: {
        image: '../../public/cyberattack.png',
      },
    },
  ],
})

export default router
