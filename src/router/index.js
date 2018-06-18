import Vue from 'vue'
import Router from 'vue-router'
import VisualizerView from '@/components/VisualizerView'
import MixerView from '@/components/MixerView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'visualizer',
      component: VisualizerView,
    },
    {
        path: '/mixer',
        name: 'mixer',
        component: MixerView,
    }

      
      
    
  ]
})
