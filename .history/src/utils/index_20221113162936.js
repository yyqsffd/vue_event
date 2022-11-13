import axios from 'axios'
const Axios = new axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})

export default Axios
