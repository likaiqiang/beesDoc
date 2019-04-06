import Vue from 'vue'
import {install} from 'bees-ui'
import 'bees-ui/dist/bees.css'
import './style.css'

export default ({
  Vue,
}) => {
  Vue.use(install)
}