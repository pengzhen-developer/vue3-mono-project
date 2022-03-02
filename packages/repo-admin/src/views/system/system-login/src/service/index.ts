import axios from 'axios'

export const signIn = () => {
  return axios.post('http://10.10.10.152:8080/upms/user/login/signIn', { loginNo: 'root', pwd: 'e10adc3949ba59abbe56e057f20f883e', rememberMe: 1 })
}
